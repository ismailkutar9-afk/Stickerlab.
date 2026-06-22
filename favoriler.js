/* favoriler.js — paylaşılan favori sistemi (localStorage)
   Tüm sayfalar bu dosyayı <script src="favoriler.js"></script> ile yükler.
   Favori öğesi: { name, emoji, fiyat, img } */
window.Fav = (function(){
  const KEY = 'favoriler';

  function getir(){
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch(e){ return []; }
  }
  function kaydet(list){ localStorage.setItem(KEY, JSON.stringify(list)); }
  function ekliMi(name){ return getir().some(f => f.name === name); }
  function ekle(item){
    const l = getir();
    if(!l.some(f => f.name === item.name)){ l.push(item); kaydet(l); }
  }
  function cikar(name){ kaydet(getir().filter(f => f.name !== name)); }
  function toggle(item){
    if(ekliMi(item.name)){ cikar(item.name); return false; }
    ekle(item); return true;
  }
  function sayi(){ return getir().length; }

  // Favoriyi 3D stüdyoya gönder ve oraya yönlen (gerçek görselle)
  function uc3DGonder(item){
    localStorage.setItem('studioSticker', JSON.stringify({
      img: item.img || '',
      name: item.name,
      ts: Date.now()
    }));
    location.href = 'studio_3d.html';
  }

  // Sayfadaki tüm #favCount rozetlerini güncelle
  function rozetGuncelle(){
    const n = sayi();
    document.querySelectorAll('.fav-count').forEach(el=>{
      el.textContent = n;
      el.style.display = n > 0 ? 'grid' : 'none';
    });
  }

  return { getir, ekliMi, ekle, cikar, toggle, sayi, uc3DGonder, rozetGuncelle };
})();

document.addEventListener('DOMContentLoaded', () => window.Fav.rozetGuncelle());
