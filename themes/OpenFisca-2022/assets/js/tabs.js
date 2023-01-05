document.addEventListener('DOMContentLoaded', function() {
  const $tabs = document.querySelectorAll('.tabs');
  $tabs.forEach(($tab) => {
    const $links = $tab.querySelectorAll('.tabs_nav_link');
    $links.forEach(($link) => {
      $link.addEventListener('click', (e) => {
        $tab.querySelector('.tabs_nav_link-isActive').classList.toggle('tabs_nav_link-isActive');
        $link.classList.toggle('tabs_nav_link-isActive');
        $tab.querySelector('.tab-isActive').classList.toggle('tab-isActive');
        document.getElementById($link.getAttribute('href').slice(1)).classList.toggle('tab-isActive');
        e.preventDefault();
        return false;
      });
    });
  });
});
