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
            slidesPerVew: 3,
            speed: 400,
            spaceBetween: 100,
            centeredSlides: true,
          
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
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
/*mySwiper = slideNext();
mySwiper = slidePrev();*/