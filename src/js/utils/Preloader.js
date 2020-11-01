class Preloader {
    constructor (preloader, cardsContainer) {
        this.preloader = preloader;
        this.cardsContainer = cardsContainer;
    }

    //функция активизации прелоудера + контейнер с карточками спрятан - и наоборот
    renderLoading(isLoading) {
        if(isLoading) {
            preloader.classList.add('section-preloader_visible');
            cardsContainer.classList.add('cards-container_hidden');
        }
        else {
            if(!isLoading) {
                cardsContainer.classList.remove('cards-container_hidden');
                preloader.classList.remove('section-preloader_visible');
            }
        }
    };
}