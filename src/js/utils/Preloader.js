export default class Preloader {
    //функция активизации прелоудера + контейнер с карточками спрятан. И наоборот
    renderLoading(isLoading) {
        if (isLoading) {
            iconPreloader.classList.add('section-preloader_visible');
            cardsContainer.classList.add('cards-container_hidden');
        }
        else {
            /*if(!isLoading) {*/
            cardsContainer.classList.remove('cards-container_hidden');
            iconPreloader.classList.remove('section-preloader_visible');
        }
    };
}