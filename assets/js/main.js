// Minimal interactions for the musician site
document.addEventListener('DOMContentLoaded', function(){
  // Minimal navigation toggle for mobile (accessible)
  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('open');
      // move focus to the first nav link when opening
      if (!expanded) {
        var firstLink = siteNav.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    // Close nav when a link is clicked (mobile)
    siteNav.addEventListener('click', function(e){
      if (e.target.tagName === 'A' && siteNav.classList.contains('open')){
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close nav on Escape
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && siteNav.classList.contains('open')){
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }
  console.log('mreligoldberg.com loaded');
});
