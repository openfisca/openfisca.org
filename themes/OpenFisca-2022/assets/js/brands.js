import {siGithub, siMastodon, siSlack} from 'simple-icons';

const ICONS = {
  mastodon: siMastodon,
  slack: siSlack,
  github: siGithub,
};

async function applyBrandsIcons() {
  const elements = document.querySelectorAll('[data-simple-icon]');

  elements.forEach((element) => {
    const attribute = element.getAttribute('data-simple-icon').toLowerCase();
    const icon = ICONS[attribute];

    if (icon) {
      const svgDoc = new DOMParser().parseFromString(icon.svg, 'image/svg+xml');
      const svgElement = svgDoc.querySelector('svg');
      const existingClasses = element.getAttribute('class');

      if (existingClasses) {
        svgElement.setAttribute('class', existingClasses);
      }
      svgElement.setAttribute('fill', 'var(--svgfill)');
      element.replaceWith(svgElement);
    }
  });
}

document.addEventListener('DOMContentLoaded', applyBrandsIcons);
