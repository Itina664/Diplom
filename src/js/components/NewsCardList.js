//класс для отрисовки карточек на странице
export default class NewsCardList {
  constructor(cardsContainer, card) {
    this.container = cardsContainer;
    this.card = card;
  };

  addCard (date, text, title, infoagency, link, url)  {
    this.container.appendChild(this.card.create(date, text, title, infoagency, link, url));
  };

  render(result) {
    this.resultForCut = result;
    const button = document.querySelector('.section-result__button');

    this.showMore();

    if (this.resultForCut.length != 0) {
      button.classList.remove('section-result__button_hidden');
      button.addEventListener('click', () => {this.showMore(this.resultForCut, button);
      });
    } else {
      button.classList.add('section-result__button_hidden');
      return;
    } 
  };

  showMore() {
    this.resultForCut.slice(0, 3).forEach((item) => {
      this.addCard(item.publishedAt, item.description, item.title, item.source.name, item.urlToImage, item.url);
    });
    
    this.resultForCut = this.resultForCut.slice(3);
    
     
  };
}