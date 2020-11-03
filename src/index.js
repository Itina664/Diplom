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
    const buttonSubmitSearchTheme = document.querySelector('.section-search__button');
    const errorTheme = document.querySelector('.section-search__error-theme');
    const preloader = document.querySelector('.section-preloader');
    

    //создание карточки с новостью
    const newsCard = () => new NewsCard();

    //создание контейнера с карточками новостей
    const newsCardList = new NewsCardList(cardsContainer, newsCard);

    //активизируем работу с инпутом
    const searchInput = new SearchInput();

    //валидация формы
    searchInput.checkInputValidity(searchInput, errorTheme);
    searchInput.setSubmitButtonState();

    //функция активизации прелоудера + контейнер с карточками спрятан. И наоборот
    function renderLoading(isLoading) {
        if (isLoading) {
            preloader.classList.add('section-preloader_visible');
            cardsContainer.classList.add('cards-container_hidden');
        }
        else {
            /*if(!isLoading) {*/
            cardsContainer.classList.remove('cards-container_hidden');
            preloader.classList.remove('section-preloader_visible');
        }
    };

    function submitSearchForm() {
        //запускаем крутилку-прелоадер
        renderLoading(true);
        newsCardList.reset();
        //вызываем запрос новостей
        newsApi.getNewsCards()
            .then((data) => {
                const localStorageAdapter = new LocalStorageAdapter(data);
                localStorageAdapter.setItem(data);
                localStorageAdapter.getItem(data);
                storageData = JSON.stringify(data); //превращаем данные в строку
                getFromStorageData = JSON.parse(storageData); //в объект
                let dataObj = Array.from(getfromStorage);
                newsApi.create(dataObj.date, dataObj.title, dataObj.text, dataObj.infoagency);
                newsCardList.addCard(dataObj.date, dataObj.title, dataObj.text, dataObj.infoagency);
            })
                .catch((err) => {
                    console.log(err);  
                })
                //перестает крутиться прелоадер
                .finally(renderLoading(false));
    };

    //активизируем поиск новостей по кнопке сабмит на форме
    buttonSubmitSearchTheme.addEventListener('submit', submitSearchForm);
     
    //создаем параметры запроса
    const baseUrl = 'http://newsapi.org/v2/everything?';
    const lastday = date.setDate(today - 7);;
    const today = new Date();
    const apiKey = 'bb30c4aebb704160a1beca231e4eae3a';
    const newsApi = new NewsApi(baseUrl, searchInput, lastday, today, apiKey, 
        headers = {
            'Content-Type': 'application/json'
        });
     
}())