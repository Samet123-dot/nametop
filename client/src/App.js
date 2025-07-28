import React, { useState } from 'react';
import axios from 'axios';
import { Download, Music, Play, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setVideoInfo(null);

    try {
      const response = await axios.get(`/api/video-info?url=${encodeURIComponent(url)}`);
      setVideoInfo(response.data);
      setSuccess('Video bilgileri başarıyla alındı!');
    } catch (error) {
      setError('Video bilgileri alınamadı. URL\'yi kontrol edin.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (format = 'mp3') => {
    if (!url.trim()) return;

    setDownloading(true);
    setDownloadProgress(0);
    setError('');

    try {
      const response = await axios.get(`/api/download?url=${encodeURIComponent(url)}&format=${format}`, {
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setDownloadProgress(percentCompleted);
        }
      });

      // Dosyayı indir
      const blob = new Blob([response.data]);
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${videoInfo?.title || 'music'}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);

      setSuccess('Müzik başarıyla indirildi!');
    } catch (error) {
      setError('İndirme başarısız. Tekrar deneyin.');
      console.error('Download error:', error);
    } finally {
      setDownloading(false);
      setDownloadProgress(0);
    }
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="logo">
            <Music className="logo-icon" />
            <h1>YouTube Müzik İndirici</h1>
          </div>
          <p className="subtitle">YouTube videolarını müzik olarak indirin</p>
        </header>

        <main className="main">
          <form onSubmit={handleUrlSubmit} className="url-form">
            <div className="input-group">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="YouTube URL'sini buraya yapıştırın..."
                className="url-input"
                required
              />
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? <Loader className="spinner" /> : <Play />}
                {loading ? 'Yükleniyor...' : 'Bilgileri Al'}
              </button>
            </div>
          </form>

          {error && (
            <div className="alert error">
              <AlertCircle />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="alert success">
              <CheckCircle />
              <span>{success}</span>
            </div>
          )}

          {videoInfo && (
            <div className="video-info">
              <div className="video-card">
                <img src={videoInfo.thumbnail} alt={videoInfo.title} className="thumbnail" />
                <div className="video-details">
                  <h3 className="video-title">{videoInfo.title}</h3>
                  <p className="video-author">{videoInfo.author}</p>
                  <p className="video-duration">{formatDuration(videoInfo.duration)}</p>
                </div>
              </div>

              <div className="download-section">
                <h3>İndirme Seçenekleri</h3>
                <div className="download-buttons">
                  <button
                    onClick={() => handleDownload('mp3')}
                    className="download-btn primary"
                    disabled={downloading}
                  >
                    {downloading ? <Loader className="spinner" /> : <Download />}
                    {downloading ? 'İndiriliyor...' : 'MP3 İndir'}
                  </button>
                  <button
                    onClick={() => handleDownload('m4a')}
                    className="download-btn secondary"
                    disabled={downloading}
                  >
                    {downloading ? <Loader className="spinner" /> : <Download />}
                    {downloading ? 'İndiriliyor...' : 'M4A İndir'}
                  </button>
                </div>

                {downloading && (
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${downloadProgress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{downloadProgress}%</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>

        <footer className="footer">
          <p>YouTube müzik indirme aracı - Modern ve hızlı</p>
        </footer>
      </div>
    </div>
  );
}

export default App; 