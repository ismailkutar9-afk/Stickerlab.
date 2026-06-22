# YAPIŞKAN — Sticker Atölyesi

Türkiye'nin sticker atölyesi için çok sayfalı web sitesi. Statik HTML/CSS/JS +
Netlify sunucusuz fonksiyonları (AI görsel ve prompt üretimi).

## Sayfalar

| Dosya                 | Açıklama                                              |
| --------------------- | ----------------------------------------------------- |
| `index.html`          | Ana sayfa (vitrin, sepet, kategoriler)                |
| `urunler.html`        | Ürün kataloğu — `urunler.json`'dan 1162 ürün yükler   |
| `paket_yap.html`      | Kendi sticker paketini oluştur                        |
| `studio_3d.html`      | three.js ile 3D sticker stüdyosu                      |
| `custom_siparis.html` | Fotoğraf/metinden AI ile özel sticker                 |
| `ders_sticker.html`   | Eğitim temalı AI sticker üretici                      |
| `urunler.json`        | Ürün verisi (Cloudinary görselleri)                   |

## Paketleri yönetme (ekle / sil / düzenle)

Tüm paketler tek dosyadan yönetilir: **`paketler.json`**. Hem Paketler sayfası
(`paketler.html`) hem de ana sayfadaki "Popüler paketler" bölümü bu dosyayı okur.

- **Paket eklemek:** `paketler` listesine yeni bir `{ ... }` bloğu ekle.
- **Paket silmek:** ilgili bloğu sil.
- **Fiyat/isim değiştirmek:** bloktaki alanı düzenle.
- **Ana sayfada göstermek:** `"one_cikan": true` yap.
- **⭐ rozeti:** `"en_avantajli": true` yap.

Her alanın ne işe yaradığı dosyanın başındaki `_alan_aciklamalari` bölümünde yazılı.
`key` (veya `kategori`) alanı `urunler.json`'daki kategori adıyla aynı olmalı ki
önizleme görselleri otomatik dolsun. Düzenledikten sonra dosyayı kaydet ve siteyi
tekrar Netlify'a yükle — değişiklik canlıya yansır.



- `generate.js` — fal.ai FLUX.1 Kontext ile görsel üretir. Ortam değişkeni: `FAL_API_KEY`
- `prompt.js` — Anthropic Claude ile görsel promptu üretir. Ortam değişkeni: `ANTHROPIC_API_KEY`

> Her iki anahtar tanımlı değilse sayfalar otomatik olarak yerel yedek prompt'a
> ve placeholder görsele düşer — site yine de çalışır.

## Yerel çalıştırma

```bash
# Basit önizleme (fonksiyonlar olmadan):
python3 -m http.server 8000
# → http://localhost:8000

# Fonksiyonlarla birlikte (Netlify CLI):
npm i -g netlify-cli
netlify dev
```

## Netlify'a yayınlama

1. Bu depoyu GitHub'a gönder (aşağıya bak).
2. netlify.com → "Add new site" → "Import an existing project" → GitHub deposunu seç.
3. Build ayarları otomatik gelir (`netlify.toml` zaten yapılandırılmış).
4. Site settings → Environment variables:
   - `FAL_API_KEY` = fal.ai anahtarın
   - `ANTHROPIC_API_KEY` = Anthropic anahtarın
5. Deploy.

## GitHub'a gönderme

```bash
git remote add origin https://github.com/KULLANICI/yapiskan-site.git
git branch -M main
git push -u origin main
```
