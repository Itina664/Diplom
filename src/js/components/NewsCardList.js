//класс для отрисовки карточек на странице
export default class NewsCardList {
    constructor(cardsContainer, card) {
      this.container = cardsContainer;
      this.card = card;
    };
  
    addCard (date, text, title, infoagency, link)  {
      this.container.
      appendChild(this.card.create(date, text, title, infoagency, link));
    };

    reset(input) {
      if (!input) {
        console.log(`date= ${date}`);
        console.log(`text= ${text}`);
        this.date.textContent = '';
        this.text.textContent = '';
        this.title.textContent = '';
        this.infoagency.textContent = '';
      } else return;
    };

    render(result) {
      result.forEach( (item) => {
        this.addCard(item.publishedAt, item.description, item.title, item.source.name, item.urlToImage);
      });
    }
  }