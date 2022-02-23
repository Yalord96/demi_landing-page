'use strict';

import Swiper from 'swiper';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.services-swiper', {
  loop: true,
  speed: 400,
  slidesPerView: 4,
  spaceBetween: 50,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      centeredSlides: true,
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    480: {
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      centeredSlides: true,
      slidesPerView: 2.5
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1600: {
      slidesPerView: 4
    }
  }
});

const portfolioSwiper = new Swiper('.portfolio-swiper', {
  loop: true,
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 32,
  modules: [Navigation],
  navigation: {
    nextEl: '.portfolio-swiper__btn-next',
    prevEl: '.portfolio-swiper__btn-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 28
    },
    375: {
      slidesPerViews: 1.7,
      centeredSlides: true
    },
    // 375: {
    //   slidesPerView: 1.5,
    //   centeredSlides: true
    // },
    // 560: {
    //   slidesPerView: 2.6,
    //   centeredSlides: true
    // },
    768: {
      slidesPerView: 3.6,
      centeredSlides: true
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2
    },
    1440: {
      slidesPerView: 2
    },
    1600: {
      slidesPerView: 3
    }
  }
});

const portfolioInstagramSwiper = new Swiper('.portfolio-instagram-swiper', {
  loop: true,
  speed: 400,
  slidesPerView: 5,
  spaceBetween: 27,
  breakpoints: {
    320: {
      slidesPerView: 1.6,
      centeredSlides: true
    },
    425: {
      slidesPerView: 2.2,
      centeredSlides: true
    },
    560: {
      slidesPerView: 3.2,
      centeredSlides: true
    },
    1024: {
      slidesPerView: 3
    },
    1600: {
      slidesPerView: 5
    }
  }
});

const partnerSwiper = new Swiper('.partner__swiper', {
  loop: true,
  speed: 400,
  slidesPerView: 6,
  spaceBetween: 78,
  autoHeight: true,
  centeredSlidesBounds: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.partners-button-next',
    prevEl: '.partners-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1336: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 3
    },
    1600: {
      slidesPerView: 5
    }
  }
});

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener('click', function (e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }
} else {
  document.body.classList.add('_pc');
}

// Меню бургер (клик)
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}
// ========================= paralax =======================
// let bg = document.querySelector('.mouse-parallax-bg');
let planetBottom = document.querySelector('.banner__parallax-planet-bottom');
let planetTop = document.querySelector('.banner__parallax-planet-top');
let girl = document.querySelector('.banner__parallax-girl');
let footerPlanetBottom = document.querySelector('.footer__parallax-planet-bottom');
let footerPlanetLeft = document.querySelector('.footer__parallax-planet-left');
let footerGirl = document.querySelector('.footer__parallax-girl');

window.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  planetBottom.style.transform = 'translate(+' + x * 10 + 'px, -' + y * 10 + 'px)';
  planetTop.style.transform = 'translate(+' + x * 15 + 'px, -' + y * 15 + 'px)';
  girl.style.transform = 'translate(+' + x * 35 + 'px, -' + y * 35 + 'px)';
  footerPlanetBottom.style.transform = 'translate(+' + x * 10 + 'px, -' + y * 10 + 'px)';
  footerPlanetLeft.style.transform = 'translate(+' + x * 15 + 'px, -' + y * 15 + 'px)';
  footerGirl.style.transform = 'translate(+' + x * 35 + 'px, -' + y * 35 + 'px)';
});

const faqUl = document.querySelector('.qna__faq-menu');
faqUl.addEventListener('click', function (e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  e.target.classList.toggle('active');
});

//
var btn = document.querySelector('.to-top');
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
