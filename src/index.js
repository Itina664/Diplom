import NewsApi from './js/modules/NewsApi.js';
import LocalStorageAdapter from './js/modules/LocalStorageAdapter.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import SearchInput from './js/components/SearchInput.js';

import "./css-pages/about-page.css";
import "./css-pages/main-page.css";
import "./css-pages/analytics.css";


(function () {
    const cardsContainer = document.querySelector('.section-result__cards-container_hidden');
    const errorTheme = document.querySelector('.section-search__error-theme');
    const formSearch = document.forms.search;
    const requestInput = formSearch.elements.request;
    const preloader = document.querySelector('.section-preloader');
    const buttonSubmit = document.querySelector('.section-search__button');
    const titleResult = document.querySelector('.section-result__title-container_unvisible');
    const showMore = document.querySelector('.section-result__button_unvisible');
    
    const newsCard = () => new NewsCard();//создание карточки с новостью
    const newsCardList = new NewsCardList(cardsContainer, newsCard);//создание контейнера с карточками новостей
    const searchInput = new SearchInput(formSearch);//активизируем работу с инпутом

    function functionSearch(event) {
        event.preventDefault(event);
        searchInput.setEventListeners();
        
        newsApi.getNewsCards(requestInput.value)//вызываем запрос новостей
            .then((data) => {
                console.log(`request в getNewsCards= ${requestInput.value}`);
                preloader.classList.add('section-preloader_visible');
                const localStorageAdapter = new LocalStorageAdapter(data);
                localStorageAdapter.setItemLocalStorage(1, data);
                localStorageAdapter.getItemLocalStorage(1);
                const storageData = JSON.stringify(data); //превращаем данные в строку
                const getFromStorageData = JSON.parse(storageData); //в объект
                const dataObj = Array.from(getFromStorageData);
                cardsContainer.classList.remove('cards-container_hidden');
                newsApi.create(dataObj.date, dataObj.title, dataObj.text, dataObj.infoagency, dataObj.link);
                newsCardList.addCard(dataObj.date, dataObj.title, dataObj.text, dataObj.infoagency, dataObj.link);
                titleResult.removeAttribute('disabled');
                showMore.removeAttribute('disabled');
            })
                .catch((err) => {
                    console.log(`ошибка запроса ${err}`);  
                })
                
                .finally(preloader.removeAttribute('visible'));
    };

    //создаем параметры запроса
    const baseUrl = 'http://newsapi.org/v2/everything?';
    const today = new Date();
    const lastday = new Date(today - (7 * 24 * 3600 * 1000));
    const apiKey = 'bb30c4aebb704160a1beca231e4eae3a';
    const newsApi = new NewsApi(baseUrl, requestInput, lastday, today, apiKey, 
        {
            'Content-Type': 'application/json'
        });
    
    //активизируем поиск новостей по кнопке сабмит на форме
    formSearch.addEventListener('submit', functionSearch);

}())