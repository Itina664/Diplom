import NewsApi from './js/modules/NewsApi.js';
import DataStorage from './js/modules/DataStorage.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import SearchInput from './js/components/SearchInput.js';
import { formateDateDigits } from './js/utils/formateDateDigits';
import { LASTDAY_TIMESTAMP } from './js/constants/lastdayTimestamp';
import { QUANTITY_CARDS_ON_PAGE } from './js/constants/quantityCardsOnPage';
import "./css-pages/main-page.css";

    const cardsContainer = document.querySelector('.section-result__cards-container');
    const errorTheme = document.querySelector('.section-search__error-theme');
    const formSearch = document.forms.search;
    const requestInput = formSearch.elements.request;
    const preloader = document.querySelector('.section-preloader_hidden');
    const sectionNotfound = document.querySelector('.section-notfound_hidden');
    const sectionErrorServer = document.querySelector('.section-error-server_hidden');
    const titleResult = document.querySelector('.section-result__title-container_hidden');
    const sectionSearchButton = document.querySelector('.section-search__button');
    const sectionResultButtonMore = document.querySelector('.section-result__button-more');
    const newsCard = new NewsCard();//создание карточки с новостью
    const newsCardList = new NewsCardList({cardsContainer: cardsContainer, card: newsCard, QUANTITY_CARDS_ON_PAGE: QUANTITY_CARDS_ON_PAGE});//создание контейнера с карточками новостей
    const searchInput = new SearchInput(formSearch);//активизируем работу с инпутом
    const dataStorage = new DataStorage();
    const formattedLastdayDigits = formateDateDigits(new Date() - new Date(LASTDAY_TIMESTAMP));
    const formattedTodayDigits = formateDateDigits(new Date());

    function lastRequest() {
        if  (dataStorage.getArticles() !== null) {
            console.log(dataStorage.getArticles());
            requestInput.value = dataStorage.getRequest();
            console.log(`requestInput.value = ${requestInput.value}`);
            cardsContainer.innerHTML = '';
            
            newsCardList.render(dataStorage.getArticles());
            titleResult.classList.remove('section-result__title-container_hidden');
        } else {
            //активизируем поиск новостей по кнопке сабмит на форме
            formSearch.addEventListener('submit', functionValidity);
        }
      };
      
    lastRequest();

    function functionValidity(event) {
        event.preventDefault(event);
        if (searchInput.checkInputValidity(requestInput, errorTheme, titleResult)) { 
            preloader.classList.remove('section-preloader_hidden');
            sectionSearchButton.setAttribute('disabled', 'disabled');
            requestInput.setAttribute('disabled', 'disabled');
            newsApi.getNewsCards(requestInput.value)//вызываем запрос новостей
            .then((data) => {
                if (data.articles.length !== 0) {
                    console.log(`данные по запросу`);
                    console.log(data);
                    dataStorage.setData(data);
                    dataStorage.getData();
                    dataStorage.setRequest(requestInput);
                    preloader.classList.add('section-preloader_hidden');
                    sectionSearchButton.removeAttribute('disabled');
                    requestInput.removeAttribute('disabled');
                    cardsContainer.innerHTML = '';
                    newsCardList.render(data.articles);
                    titleResult.classList.remove('section-result__title-container_hidden');
                } else {
                    titleResult.classList.add('section-result__title-container_hidden');
                    sectionNotfound.classList.remove('section-notfound_hidden'); 
                    requestInput.removeAttribute('disabled');
                    sectionSearchButton.removeAttribute('disabled');
                    sectionResultButtonMore.classList.add('section-result__button-more_hidden');
                    return;
                }
            })
            .catch((err) => {
                console.log(`ошибка запроса ${err}`);
                sectionErrorServer.classList.remove('section-error-server_hidden');
            })   
            .finally( () => {
                preloader.classList.add('section-preloader_hidden');
            });
        } else {
            cardsContainer.innerHTML = '';
            titleResult.classList.add('section-result__title-container_hidden');
            sectionNotfound.classList.add('section-notfound_hidden');
            sectionResultButtonMore.classList.add('section-result__button-more_hidden');
           
        };
        cardsContainer.innerHTML = '';
        titleResult.classList.add('section-result__title-container_hidden');
        sectionNotfound.classList.add('section-notfound_hidden');
    };
    
    requestInput.addEventListener('focus', () => {
        searchInput.reset(errorTheme);
    });

    //создаем параметры запроса
    const baseUrl = 'https://nomoreparties.co/news/v2/everything?';
    const apiKey = '086a02d9d4244c469d1aba48e9b1dd8f';
    const newsApi = new NewsApi({ baseUrl: baseUrl, apiKey: apiKey, lastday: formattedLastdayDigits, today: formattedTodayDigits});
    
    //активизируем поиск новостей по кнопке сабмит на форме
    formSearch.addEventListener('submit', functionValidity);
