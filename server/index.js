const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// YouTube video bilgilerini al
app.get('/api/video-info', async (req, res) => {
  try {
    const { url } = req.query;
    
    if (!url) {
      return res.status(400).json({ error: 'URL gerekli' });
    }

    const info = await ytdl.getInfo(url);
    const videoDetails = info.videoDetails;
    
    const formats = ytdl.filterFormats(info.formats, 'audioonly');
    const audioFormats = formats.map(format => ({
      itag: format.itag,
      quality: format.audioQuality,
      bitrate: format.audioBitrate,
      container: format.container
    }));

    res.json({
      title: videoDetails.title,
      thumbnail: videoDetails.thumbnails[0].url,
      duration: videoDetails.lengthSeconds,
      author: videoDetails.author.name,
      formats: audioFormats
    });
  } catch (error) {
    console.error('Video bilgisi alınamadı:', error);
    res.status(500).json({ error: 'Video bilgisi alınamadı' });
  }
});

// Müzik indir
app.get('/api/download', async (req, res) => {
  try {
    const { url, format = 'mp3', quality = 'highest' } = req.query;
    
    if (!url) {
      return res.status(400).json({ error: 'URL gerekli' });
    }

    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    
    res.header('Content-Disposition', `attachment; filename="${title}.${format}"`);
    
    if (format === 'mp3') {
      ytdl(url, {
        filter: 'audioonly',
        quality: quality
      }).pipe(res);
    } else {
      ytdl(url, {
        filter: 'audioonly',
        quality: quality
      }).pipe(res);
    }
  } catch (error) {
    console.error('İndirme hatası:', error);
    res.status(500).json({ error: 'İndirme başarısız' });
  }
});

// Ana sayfa
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
}); 