export default class NewsCardList {
  constructor(options) {
    this.container = options.cardsContainer;
    this.card = options.card;
    this.QUANTITY_CARDS_ON_PAGE = options.QUANTITY_CARDS_ON_PAGE;
  };

  addCard (date, text, title, infoagency, link, url)  {
    this.container.appendChild(this.card.create(date, text, title, infoagency, link, url));
  };

  render(result) {
    const button = document.querySelector('.section-result__button-more');
    this.resultThreeCards = result;

    this.showMore();

    if (this.resultThreeCards.length > 0) {
      button.classList.remove('section-result__button-more_hidden');
      button.addEventListener('click', () => {
        if (this.resultThreeCards.length > 3) { 
          this.showMore(this.resultThreeCards, button);
        } else {
          button.classList.add('section-result__button-more_hidden');
          this.showMore(this.resultThreeCards, button);
        }
      });
    } else {
      button.classList.add('section-result__button-more_hidden');
    }     
  };

  showMore() {
    this.resultThreeCards.slice(0, this.QUANTITY_CARDS_ON_PAGE).forEach((item) => {
      this.addCard(item.publishedAt, item.description, item.title, item.source.name, item.urlToImage, item.url);
    });
    this.resultThreeCards = this.resultThreeCards.slice(this.QUANTITY_CARDS_ON_PAGE);
  };
}