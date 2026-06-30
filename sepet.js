/* sepet.js — paylaşılan sepet sistemi (localStorage)
   Sepet öğesi: { name, fiyat, img, adet } */
window.Sepet = (function(){
  const KEY = 'sepet';
  function getir(){ try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch(e){ return []; } }
  function kaydet(l){ localStorage.setItem(KEY, JSON.stringify(l)); rozet(); }
  function ekle(item){
    const l = getir();
    const v = l.find(x => x.name === item.name);
    if(v){ v.adet++; }
    else { l.push({ name:item.name, fiyat:item.fiyat||0, img:item.img||'', adet:1 }); }
    kaydet(l);
  }
  function cikar(name){ kaydet(getir().filter(x => x.name !== name)); }
  function adetDegis(name, d){
    const l = getir(); const v = l.find(x => x.name === name);
    if(v){ v.adet = Math.max(1, v.adet + d); kaydet(l); }
  }
  function temizle(){ kaydet([]); }
  function sayi(){ return getir().reduce((s,i) => s + i.adet, 0); }
  function toplam(){ return getir().reduce((s,i) => s + (i.fiyat||0)*i.adet, 0); }
  function rozet(){
    const n = sayi();
    document.querySelectorAll('.sepet-count').forEach(el=>{
      el.textContent = n; el.style.display = n > 0 ? 'grid' : 'none';
    });
  }
  return { getir, ekle, cikar, adetDegis, temizle, sayi, toplam, rozet };
})();
document.addEventListener('DOMContentLoaded', () => window.Sepet.rozet());
