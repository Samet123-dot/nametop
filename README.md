# 🎵 YouTube Müzik İndirici

Modern, dark mode ve mobil uyumlu YouTube müzik indirme web uygulaması.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)

## ✨ Özellikler

- 🎨 **Modern Dark Mode Tasarım** - Göz yormayan koyu tema
- 📱 **Mobil Uyumlu** - Tüm cihazlarda mükemmel görünüm
- 📊 **Progress Bar** - İndirme durumunu takip edin
- 🎵 **Çoklu Format Desteği** - MP3 ve M4A formatları
- ⚡ **Hızlı İndirme** - Optimize edilmiş indirme sistemi
- 🎯 **Responsive Tasarım** - Tüm ekran boyutlarına uyum

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Kurulum

1. **Repository'yi klonlayın:**
```bash
git clone https://github.com/yourusername/youtube-music-downloader.git
cd youtube-music-downloader
```

2. **Bağımlılıkları yükleyin:**
```bash
npm run install-all
```

3. **Geliştirme modunda çalıştırın:**
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
youtube-music-downloader/
├── client/                 # React frontend
│   ├── public/
│   │   ├── index.html     # HTML giriş dosyası
│   │   └── manifest.json  # PWA manifest
│   └── src/
│       ├── App.js         # Ana uygulama bileşeni
│       ├── App.css        # Modern dark mode stilleri
│       ├── index.js       # React giriş noktası
│       └── index.css      # Global stiller
├── server/                 # Node.js backend
│   └── index.js           # Express server API
├── package.json           # Ana proje konfigürasyonu
├── .gitignore            # Git ignore dosyası
├── LICENSE               # MIT lisans
└── README.md             # Bu dosya
```

## 🛠️ Teknolojiler

### Frontend
- **React 18** - Modern UI framework
- **Axios** - HTTP istekleri
- **Lucide React** - Modern ikonlar
- **CSS3** - Modern stiller ve animasyonlar

### Backend
- **Node.js** - Server runtime
- **Express** - Web framework
- **ytdl-core** - YouTube video indirme
- **CORS** - Cross-origin resource sharing

## 🎨 Özellikler

### Kullanıcı Arayüzü
- ✅ Modern dark mode tasarım
- ✅ Responsive layout
- ✅ Progress bar animasyonu
- ✅ Loading spinner'ları
- ✅ Error handling
- ✅ Success notifications
- ✅ Smooth transitions

### İndirme Özellikleri
- ✅ YouTube URL desteği
- ✅ MP3 formatı
- ✅ M4A formatı
- ✅ Video bilgileri gösterimi
- ✅ Otomatik dosya adlandırma
- ✅ İndirme progress takibi

## 📱 Mobil Uyumluluk

Uygulama tüm mobil cihazlarda mükemmel çalışır:
- 📱 iPhone/iPad (iOS)
- 📱 Android telefonlar
- 💻 Tablet cihazlar
- 🖥️ Desktop bilgisayarlar

## 🔧 Geliştirme

### Yeni özellik eklemek için:
1. `client/src/App.js` dosyasını düzenleyin
2. `client/src/App.css` dosyasına stiller ekleyin
3. Backend API'yi `server/index.js` dosyasında güncelleyin

### Build için:
```bash
npm run build
```

### Production için:
```bash
npm start
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakın.

## ⚠️ Yasal Uyarı

Bu uygulama sadece eğitim amaçlıdır. Telif hakkı olan içerikleri indirirken yasal sorumluluklarınızı unutmayın. Kullanıcılar, indirdikleri içeriklerin telif haklarına uygun şekilde kullanılmasından sorumludur.

## 📞 İletişim

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## ⭐ Yıldız Verin

Bu projeyi beğendiyseniz, GitHub'da yıldız vermeyi unutmayın! ⭐ 