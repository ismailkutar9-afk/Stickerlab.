/* ikas-config.js — HİBRİT SATIŞ AYARI
   ───────────────────────────────────────────────
   İkas mağazanı açtıktan sonra mağaza adresini AŞAĞIYA yapıştır.
   Örnek:  magazaUrl: "https://stickerlab.ikas.shop"
   (kendi domainini bağladıysan onu yaz: "https://magaza.stickerlab.com")

   Boş bırakırsan site eski haliyle (kendi sepetiyle) çalışmaya devam eder.
   Adresi yazdığın an, sitedeki tüm "Satın Al" butonları İkas mağazana yönlenir. */

window.IKAS = {
  magazaUrl: "https://stickerlab1.ikas.shop",          // ← BURAYA İkas mağaza adresini yapıştır (ör: "https://stickerlab.ikas.shop")
  waNumarasi: "",         // ← İkas yoksa WhatsApp sipariş numarası (ör: "905551112233")
  // İstersen ürün/paket bazlı tam link de verebilirsin (opsiyonel):
  // urunLinkleri: { "cyberpunk": "https://.../products/cyberpunk-paketi" }
};

/* Aşağısını değiştirmene gerek yok — otomatik çalışır. */
window.ikasAktif = function(){ return !!(window.IKAS && window.IKAS.magazaUrl); };
window.ikasGit = function(yol){
  if(!window.ikasAktif()) return false;
  const base = window.IKAS.magazaUrl.replace(/\/+$/,'');
  // yol verilmemişse mağazanın ürün listesine gönder
  const hedef = yol ? base + '/' + String(yol).replace(/^\/+/,'') : base + '/collections/all';
  window.location.href = hedef;
  return true;
};
// Sayfa yüklenince: İkas aktifse "Satın Al / Mağaza" butonlarını göster
document.addEventListener('DOMContentLoaded', function(){
  if(window.ikasAktif()){
    document.querySelectorAll('.ikas-satinal').forEach(function(el){
      el.style.display = '';
      el.addEventListener('click', function(e){ e.preventDefault(); window.ikasGit(el.dataset.ikasYol || ''); });
    });
  } else {
    document.querySelectorAll('.ikas-satinal').forEach(function(el){ el.style.display = 'none'; });
  }
});
