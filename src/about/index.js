import GithubApi from '../js/modules/GithubApi.js';
import CommitCard from '../js/components/CommitCard.js';
import CommitCardList from '../js/components/CommitCardList.js';

import 'swiper/swiper-bundle.css';
import "../css-pages/about-page.css";

const swiperWrapper = document.querySelector('.swiper-wrapper');
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(swiperWrapper, commitCard);

function requestUserRepos() {
  githubApi.getCommits('itina664/Diplom/commits')
    .then((data) => {
      console.log(data);
      commitCardList.render(data);
    })
    .catch((err) => {
      console.log(`ошибка запроса ${err}`);
    })
    .then(() => {
      const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 8
        },
        // when window width is >= 768px
        768: {
          spaceBetween: 8
        },
        // when window width is >= 1440px
        1440: {
          spaceBetween: 16
        },
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        /*dynamicBullets: true,
        dynamicMainBullets: 1,*/
      },
          
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  })   
};

const baseUrl = `https://api.github.com/repos/`;
const githubApi = new GithubApi(baseUrl);

requestUserRepos();

import Swiper, { Navigation, Pagination  } from 'swiper';
Swiper.use([Navigation, Pagination]);

const mySwiper = document.querySelector('.swiper-container').swiper;