import NewsApi from './js/modules/NewsApi.js';
import DataStorage from './js/modules/DataStorage.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import SearchInput from './js/components/SearchInput.js';

import { formateDateDigits } from './js/utils/formateDateDigits';

import "./css-pages/main-page.css";

(function () {
    const cardsContainer = document.querySelector('.section-result__cards-container');
    const errorTheme = document.querySelector('.section-search__error-theme');
    const formSearch = document.forms.search;
    const requestInput = formSearch.elements.request;
    const preloader = document.querySelector('.section-preloader_hidden');
    const sectionNotfound = document.querySelector('.section-notfound_hidden');
    const sectionErrorServer = document.querySelector('.section-error-server_hidden');
    const titleResult = document.querySelector('.section-result__title-container_hidden');
    
    const newsCard = new NewsCard();//создание карточки с новостью
    const newsCardList = new NewsCardList(cardsContainer, newsCard);//создание контейнера с карточками новостей
    const searchInput = new SearchInput(formSearch);//активизируем работу с инпутом
    
    const formattedLastdayDigits = formateDateDigits(new Date() - new Date(6 * 24 * 3600 * 1000));
    const formattedTodayDigits = formateDateDigits(new Date());

    function functionValidity(event) {
        event.preventDefault(event);
        if (searchInput.checkInputValidity(requestInput, errorTheme, titleResult)) { 
            preloader.classList.remove('section-preloader_hidden');
            newsApi.getNewsCards(requestInput.value, formattedLastdayDigits, formattedTodayDigits)//вызываем запрос новостей
            .then((data) => {
                if (data.articles.length !== 0) {
                    console.log(data);
                    const dataStorage = new DataStorage(data, requestInput);
                    dataStorage.setData(data);
                    dataStorage.getData();
                    dataStorage.setRequest(requestInput);
                    preloader.classList.add('section-preloader_hidden');
                    cardsContainer.innerHTML = '';
                    newsCardList.render(data.articles);
                    titleResult.classList.remove('section-result__title-container_hidden');
                } else {
                    titleResult.classList.add('section-result__title-container_hidden');
                    sectionNotfound.classList.remove('section-notfound_hidden');
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
        };
        cardsContainer.innerHTML = '';
        titleResult.classList.add('section-result__title-container_hidden');
        sectionNotfound.classList.add('section-notfound_hidden');
    };
    
    requestInput.addEventListener('focus', () => {
        searchInput.reset(errorTheme);
    });

    //создаем параметры запроса
    const baseUrl = 'https://newsapi.org/v2/everything?';
    const apiKey = '086a02d9d4244c469d1aba48e9b1dd8f';
    const newsApi = new NewsApi(baseUrl, apiKey);
    
    //активизируем поиск новостей по кнопке сабмит на форме
    formSearch.addEventListener('submit', functionValidity);
}())