import GithubApi from '../js/modules/GithubApi.js';
import CommitCard from '../js/components/CommitCard.js';
import CommitCardList from '../js/components/CommitCardList.js';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination  } from 'swiper';

// import Swiper styles
import 'swiper/swiper-bundle.css';

import "../css-pages/about-page.css";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    speed: 400,
    spaceBetween: 100,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const mySwiper = document.querySelector('.swiper-container').swiper;
/*mySwiper = slideNext();
mySwiper = slidePrev();*/

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
};

//создаем параметры запроса
const baseUrl = `https://api.github.com/repos/`;
const githubApi = new GithubApi(baseUrl);

requestUserRepos();