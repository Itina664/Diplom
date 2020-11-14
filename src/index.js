import NewsApi from './js/modules/NewsApi.js';
import DataStorage from './js/modules/DataStorage.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import SearchInput from './js/components/SearchInput.js';

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
    
    function functionValidity(event) {
        event.preventDefault(event);
        if (searchInput.checkInputValidity(requestInput, errorTheme,titleResult)) { 
            preloader.classList.remove('section-preloader_hidden');
            newsApi.getNewsCards(requestInput.value)//вызываем запрос новостей
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
    const baseUrl = 'http://newsapi.org/v2/everything?';
    const today = new Date();
    const lastday = new Date(today - (7 * 24 * 3600 * 1000));
    const apiKey = 'c39c455b159546c983cf897e239dd2bf';
    const newsApi = new NewsApi(baseUrl, requestInput, lastday, today, apiKey, 
        {
            'Content-Type': 'application/json'
        });
    
    //активизируем поиск новостей по кнопке сабмит на форме
    formSearch.addEventListener('submit', functionValidity);
}())