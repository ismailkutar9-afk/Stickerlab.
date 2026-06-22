/* ikas-yonlendir.js
   İkas mağaza adresi ayarlıysa (ikas-config.js içinde magazaUrl dolu):
   - Tüm "Sepete Ekle / Satın Al / SEPETE AT" butonları doğrudan İkas mağazasına gider.
   - Site içi sepet (drawer) butonları gizlenir, karışıklık olmaz.
   ikas-config.js'ten SONRA yüklenmelidir. */
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    if(!(window.ikasAktif && window.ikasAktif())) return;

    // Satın alma butonları → İkas mağazasına
    var alSecici = '.add-btn, .modal-add, .prod-add, .modal-add-btn, .pack-btn, .btn-cart';
    document.addEventListener('click', function(e){
      var t = e.target.closest(alSecici);
      if(t){
        e.preventDefault();
        e.stopImmediatePropagation();
        window.ikasGit('');
      }
    }, true); // capture: orijinal sepet handler'ından önce çalışır

    // Site içi sepet açma butonlarını gizle (artık kasa İkas'ta)
    ['#cartBtn', '.cart-btn', '.cart-nav'].forEach(function(s){
      document.querySelectorAll(s).forEach(function(el){ el.style.display = 'none'; });
    });
  });
})();
