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
// check support webp 
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
  });


  //language choosen
var arrLang = {
  uk: {
    servises: 'Сервіси',
    projects: 'Проекти',
    partners: 'Партнери',
    contacts: 'Контакти',
    banner_title: 'СТУДІЯ ІМЕРСИВНИХ ТЕХНОЛОГІЙ',
    banner_list_item1: 'Створюємо мобільні додатки з AR',
    banner_list_item2: 'Нова реальність - для нового майбутнього',
    banner_list_item3: 'Допоможемо опанувати всесвіт високих технологій та грандіозних мрій',
    banner_list_item4: 'Розробимо та впровадимо інтерактив для вашого бренду',
    more: 'Дізнатись більше',
    servises_marquee: 'СЕРВІСИ |',
    servises_title: 'СЕРВІСИ',
    card_title1: 'AR портал',
    card_title2: 'AR маски',
    card_title3: 'AR мерч',
    card_title4: 'AR наліпки',
    card_title5: 'AR персонажі',
    card_title6: 'AR візитівки',
    card_title7: 'AR логотип',
    card_title8: 'AR бейджи',
    portfolio_notice: 'Масштабуйте і оновлюйте свої рішення у міру зміни ваших потреб - ми завжди поруч, щоб зробити ваш бізнес ще краще.',
    projects_content: 'ПРОЕКТИ |',
    instagram_notice: 'Підписуйся на яскравий та цікавий Instagram Demi',
    our_partners: 'НАШІ ПАРТНЕРИ',
    qna_question1: 'Яка вартість проекту?',
    qna_answer1: "Вартість проекту залежить від кількості годин, які потребуватимуть наші фахівці. Чим більше 3D-об'єктів, анімації та інтерактив, тим більше роботи доведеться виконати.",
    qna_question2: 'Чим VR відрізняється від AR?',
    qna_answer2: "VR (Віртуальна реальність) повністю створює тривимірну реальність навколо людини. Для використання потрібні спеціальні окуляри. Доповнена реальність (AR) додає тривимірні об'єкти в реальний світ.",
    qna_question3: "Чи потрібен вам комп'ютер для використання VR?",
    qna_answer3: "Деякі VR окуляри підключені до комп'ютера, але на ринку існують гарнітури, які не вимагають підключення до інших пристроїв.",
    qna_question4: 'Чи можу я розмістити заявку від вашого імені?',
    qna_answer4: "Так, ми можемо розмістити програму в AppStore і Google Play з нашого облікового запису розробників.",
    contact_us: 'Залиште заявку на безкоштовну консультацію',
    ukraine: 'Україна,',
    adress: 'Дніпро, вул. Наукова, 13'
  },
  eng: {
    servises: 'Servises',
    projects: 'Projects',
    partners: 'Partners',
    contacts: 'Contacts',
    banner_title: 'Immersive technology studio',
    banner_list_item1: 'We create mobile applications with AR',
    banner_list_item2: 'New reality — for a new future',
    banner_list_item3: 'We will help you master the universe of high technologies and grandiose dreams',
    banner_list_item4: 'We will develop and implement interactive for your brand',
    more: 'Learn more',
    servises_marquee: 'SERVICES |',
    servises_title: 'SERVICES',
    card_title1: 'AR portal',
    card_title2: 'AR masks',
    card_title3: 'AR merch',
    card_title4: 'AR stickers',
    card_title5: 'AR characters',
    card_title6: 'AR b.cards',
    card_title7: 'AR logo',
    card_title8: 'AR badges',
    portfolio_notice: "Scale and update your solutions as your needs change - we're always there to make your business even better.",
    projects_marquee: 'PROJECTS |',
    projects_title: 'PROJECTS',
    instagram_notice: 'Subscribe at Instagram Demi',
    our_partners: 'OUR PARTNERS',
    qna_question1: 'What will my project cost?',
    qna_answer1: "Each project is different. The cost of the project depends on the number of hours our specialists will need. The more 3D objects, animations, and interactivity, the more work we do on your project.",
    qna_question2: 'What is the difference between VR and AR?',
    qna_answer2: "VR (Virtual reality) creates an immersive, three-dimensional reality around a person. Special glasses are required for use. Augmented, or complete reality (AR) adds three-dimensional objects to the real world.",
    qna_question3: "Do you need a PC to use VR?",
    qna_answer3: "Some VR glasses are connected to a computer, but there are headsets on the market that do not require connection to other devices.",
    qna_question4: 'I don’t have a developer account. What should I do?',
    qna_answer4: "We can upload the app to AppStore and Google Play from our developer account, so you don’t have to!",
    contact_us: 'Leave your request for free consultation',
    ukraine: 'Ukraine,',
    adress: 'Dnipro, Naukova Street, 13'
  }
}

document.addEventListener('DOMContentLoaded', getLocalLang)
  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');
      saveLocalLang(lang);
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });

function saveLocalLang(language) {
  let langs;
  
  if (localStorage.getItem('langs') === null) {
    langs = []
  } else {
    langs = JSON.parse(localStorage.getItem('langs'))
  }

  langs.push(language);
  localStorage.setItem('langs', JSON.stringify(langs));
}

function getLocalLang() {
  let langs;

  if (localStorage.getItem('langs') === null) {
    langs = []
  } else {
    langs = JSON.parse(localStorage.getItem('langs'))
  }

  let lang = langs[langs.length -1];
  langs.forEach(function(language) {
    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });

  if (lang == 'uk') {
    document.getElementById('uk').classList.add('uk');
    document.getElementById('eng').classList.remove('eng')
  } else if (lang == 'eng') {
    document.getElementById('eng').classList.add('eng');
    document.getElementById('uk').classList.remove('uk')
  }

}

  document.getElementById('uk').onclick = function() {
    document.getElementById('uk').classList.add('uk');
    document.getElementById('eng').classList.remove('eng')
  }

  document.getElementById('eng').onclick = function() {
    document.getElementById('eng').classList.add('eng');
    document.getElementById('uk').classList.remove('uk')
  }