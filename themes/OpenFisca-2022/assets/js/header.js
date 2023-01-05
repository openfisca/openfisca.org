document.addEventListener('DOMContentLoaded', function() {
  const $headerCollapse = document.querySelector('.header_collapse');
  const $headerNav = document.querySelector('.header_nav');
  const $headerSocial = document.querySelector('.header_social');

  $headerCollapse.addEventListener('click', function(e) {
    $headerCollapse.classList.toggle('header_collapse-open');
    $headerNav.classList.toggle('header_nav-open');
    $headerSocial.classList.toggle('header_social-open');
  });
});
