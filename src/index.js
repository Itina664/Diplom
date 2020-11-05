import NewsApi from './js/modules/NewsApi.js';
import LocalStorageAdapter from './js/modules/LocalStorageAdapter.js';
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import SearchInput from './js/components/SearchInput.js';

import "./css-pages/about-page.css";
import "./css-pages/main-page.css";
import "./css-pages/analytics.css";


(function () {
    const cardsContainer = document.querySelector('.section-result__cards-container');
    const buttonSubmitSearch = document.querySelector('.section-search__button');
    const errorTheme = document.querySelector('.section-search__error-theme');
    const requestInput = document.querySelector('.section-search__field-theme');
    const preloader = document.querySelector('.section-preloader');

    const newsCard = () => new NewsCard();//создание карточки с новостью
    const newsCardList = new NewsCardList(cardsContainer, newsCard);//создание контейнера с карточками новостей
    const searchInput = new SearchInput();//активизируем работу с инпутом
    searchInput.reset(errorTheme);

    function submitSearchForm() {
        searchInput.checkInputValidity(requestInput, errorTheme);//валидация формы
        console.log(`валидация reguestInput ${requestInput.value}`);
        searchInput.setSubmitButtonState(requestInput, buttonSubmitSearch);
        preloader.classList.add('section-preloader_visible');
        cardsContainer.classList.add('cards-container_hidden');
        console.log(`preloader= ${preloader}`);
        newsCardList.reset();
        newsApi.getNewsCards(requestInput.value)//вызываем запрос новостей
            .then((data) => {
                const localStorageAdapter = new LocalStorageAdapter(data);
                localStorageAdapter.setItemLocalStorage(key, data);
                localStorageAdapter.getItemLocalStorage(data);
                storageData = JSON.stringify(data); //превращаем данные в строку
                getFromStorageData = JSON.parse(storageData); //в объект
                let dataObj = Array.from(getfromStorage);
                newsApi.create(dataObj.date, dataObj.title, dataObj.text, dataObj.infoagency, dataObj.link);
                newsCardList.addCard(dataObj.date, dataObj.title, dataObj.text, dataObj.infoagency, dataObj.link);
            })
                .catch((err) => {
                    console.log(`ошибка запроса ${err}`);  
                })
                
                .finally(preloader.classList.remove('section-preloader_visible'));
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
    buttonSubmitSearch.addEventListener('submit', submitSearchForm);
    
    

}())