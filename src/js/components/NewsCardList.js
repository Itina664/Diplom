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

    reset(date, text, title, infoagency) {
      date.textContent = '';
      text.textContent = '';
      title.textContent = '';
      infoagency.textContent = '';
    };

    render(result) {
      console.log(`result1= ${result}`);
      result.forEach( (item) => {
        console.log(`result2= ${result}`);
        this.addCard(item.date, item.text, item.title, item.infoagency, item.link);
      });
    }

  }