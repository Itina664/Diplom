import "./css-pages/about-page.css";
import "./css-pages/main-page.css";
import "./css-pages/analytics.css";

(function () {
    const cardsContainer = document.querySelector('.section-result__cards-container');
    const preloader = document.querySelector('.section-preloader');
    const formSearch = document.forms.theme;
    const buttonSubmitSearchTheme = document.querySelector('.section-search__button');
    const errorTheme = document.querySelector('.section-search__error-theme error');
    
    //создание карточки с новостью
    const newsCard = () => new NewsCard();

    //создание контейнера с карточками новостей
    const newsCardList = new NewsCardList(cardsContainer, card);
    
    //создание прелоудера
    const preloader = new Preloader();

    //активизируем работу с полем для поиска (инпутом)
    const searchInput = new SearchInput(formSearch);

    //валидация формы
    searchInput.checkInputValidity(input, error);
    searchInput.setSubmitButtonState();

    
    
    //активизируем поиск новостей по кнопке сабмит на форме
    formSearch.addEventListener('submit', function submit(e) {
        e.preventDefault();
        
        //запускаем крутилку-прелоадер
        preloader.renderLoading(true);

        //создаем параметры запроса
        const apiKey = 'bb30c4aebb704160a1beca231e4eae3a'
        const newsApi = new NewsApi(searchInput, dateString, apiKey, 
        headers = {
            'Content-Type': 'application/json'
        }); 
    
        //вызываем запрос новостей
        api.getNewsCards()
            .then((result) => {
                newsCardList.addCard(result);
            })
            .catch((err) => {
                console.log(err);  
            })
            //перестает крутиться прелоадер
            .finally(preload.renderLoading(false));
    });

}())