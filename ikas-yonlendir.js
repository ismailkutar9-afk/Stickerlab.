/* ikas-yonlendir.js
   İkas mağaza adresi ayarlıysa (ikas-config.js içinde magazaUrl dolu):
   - Tüm "Sepete Ekle / Satın Al / SEPETE AT" butonları doğrudan İkas mağazasına gider.
   - Site içi sepet (drawer) butonları gizlenir, karışıklık olmaz.
   ikas-config.js'ten SONRA yüklenmelidir. */
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    if(!(window.ikasAktif && window.ikasAktif())) return;
    // SADECE ödeme/checkout butonları İkas'a → müşteri kendi sepetini doldurabilsin
    var checkoutSec = '.checkout-btn, .cd-checkout, .dr-checkout';
    document.addEventListener('click', function(e){
      var t = e.target.closest(checkoutSec);
      if(t){
        e.preventDefault();
        e.stopImmediatePropagation();
        window.ikasGit('odeme');
      }
    }, true);
  });
})();
