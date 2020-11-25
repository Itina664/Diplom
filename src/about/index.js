import "../css-pages/about-page.css";

import GithubApi from '../js/modules/GithubApi.js';
import CommitCard from '../js/components/CommitCard.js';
import CommitCardList from '../js/components/CommitCardList.js';


// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination  } from 'swiper';

// import Swiper styles
import 'swiper/swiper-bundle.css';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper(document.querySelector('.section-commit__swiper-container'), {
    speed: 400,
    spaceBetween: 100,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    /*scrollbar: {
      el: '.swiper-scrollbar',
    },*/
});

/*let mySwiper = document.querySelector('.swiper-container').swiper;
mySwiper.slideNext();
mySwiper.slidePrev();*/

/*const swiperWrapper = documentQuerySelector('.section-commit__swiper-wrapper');*/
const swiperContainer = document.querySelector('.swiper-container');
const buttonOpenGithub = document.querySelector('.section-result__button-link');
const sectionErrorServer = document.querySelector('.section-error-server_hidden');
const preloader = document.querySelector('.section-preloader_hidden');

const commitCard = new CommitCard();
const commitCardList = new CommitCardList(swiperContainer, commitCard);

function functionCommit(event) {
    event.preventDefault(event);
    preloader.classList.remove('section-preloader_hidden')
    githubApi.getCommits()//вызываем запрос новостей
        .then((commit) => {
            if (commit.committer.length !== 0) {
                console.log(commit);
                commitCardList.addCommit(commit.committer.date, commit.message, commit.committer.email, commit.committer.name, author.avatar_url);
            }
        })
        .catch((err) => {
            console.log(`ошибка запроса ${err}`);
            sectionErrorServer.classList.remove('section-error-server_hidden');
        })   
        .finally( () => {
            preloader.classList.add('section-preloader_hidden');
        });
};

//создаем параметры запроса
const baseUrl = 'https://api.github.com/repos/yandex/localization-context-extension/commits';
const githubApi = new GithubApi(baseUrl, {
    'Content-Type': 'text/css'
});

//активизируем выдачу коммитов по кнопке Открыть в Github
    buttonOpenGithub.addEventListener('submit', functionCommit);