# Greeter Component - Vue 3 Web Component

Sebuah komponen Vue 3 mandiri yang dapat disematkan ke aplikasi pihak ketiga dengan tag `<script>`.

## 📦 Teknologi Utama
- Vue 3
- Vite (Build Tool)
- Vitest + Vue Test Utils (Testing)
- JSDOM (Simulasi DOM)

---

## 🛠️ Instalasi & Pengembangan

### Prasyarat
- Node.js ≥ v18
- NPM/Yarn

### Langkah 1: Clone Repositori
```bash
git clone https://github.com/ryfazrin/greeter-component.git
cd greeter-component
```

### Langkah 2: Install Dependensi
```bash
pnpm install
```

### Langkah 3: Build Komponen
```bash
pnpm run build
```
File hasil build akan muncul di:  
`dist/compiled-greeter-component.cjs`

---

## 🧪 Menjalankan Test
```bash
pnpm test       # Jalankan semua test
```

---

## 🌐 Integrasi ke Aplikasi Host

### Contoh Host App (`demo/index.html`):
```html
<!DOCTYPE html>
<html>
<head>
  <title>Host App</title>
</head>
<body>
  <!-- Container komponen -->
  <div id="my-greeter"></div>

  <!-- Sertakan komponen -->
  <script src="../compiled-greeter-component.cjs"></script>
  
  <!-- Inisialisasi -->
  <script>
    Greater.init('#my-greeter', {
      message: 'Halo dari aplikasi host app!'
    });
  </script>
</body>
</html>
```

### Uji di Browser:
1. Jalankan Host App:
```bash
pnpm run build

pnpm run preview
```
2. Buka di browser:  
`http://localhost:4173/demo/index.html`

---

## 🚀 Fitur
- Render tombol dengan pesan kustom
- Log pesan ke console saat tombol diklik
- Isolasi CSS (scoped styles)
- Kompatibel dengan berbagai framework/plain JS

---

## 🚨 Troubleshooting
**Error tests: "document is not defined"**  
- Pastikan JSDOM terinstall: `pnpm install jsdom --save-dev`

**Komponen tidak muncul**  
- Pastikan path file JS benar dan `init()` dipanggil setelah DOM siap

---

## 📜 Lisensi

MIT License