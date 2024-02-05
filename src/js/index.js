import '../../node_modules/glightbox/dist/css/glightbox.min.css';
import '../css/animate.css';
import '../css/style.css';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import GLightbox from 'glightbox';
import WOW from 'wowjs';

Alpine.plugin(intersect);
window.Alpine = Alpine;
Alpine.start();

window.wow = new WOW.WOW({
  live: false,
});

window.wow.init({
  offset: 50,
});

//========= glightbox
GLightbox({
  href: "https://www.youtube.com/embed/q-DvRq_U6OQ",
  // type: "video",
  source: "youtube", //vimeo, youtube or local
  width: 900,
  autoplayVideos: true,
});

// ==== darkToggler
const darkTogglerCheckbox = document.querySelector('#darkToggler');
const html = document.querySelector('html');

const darkModeToggler = () => {
  darkTogglerCheckbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
};
darkModeToggler();

darkTogglerCheckbox.addEventListener('click', darkModeToggler);

// ====== scroll top js
function scrollTo(element, to = 0, duration = 500) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

document.querySelector('.back-to-top').onclick = () => {
  scrollTo(document.documentElement);
};
