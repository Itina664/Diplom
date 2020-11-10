//класс для отрисовки карточек на странице
export default class NewsCardList {
  constructor(cardsContainer, card) {
    this.container = cardsContainer;
    this.card = card;
  };

  addCard (date, text, title, infoagency, link, url)  {
    this.container.appendChild(this.card.create(date, text, title, infoagency, link, url));
  };

  render(result, button) {
    this.resultForCut = result;
    const count = 0;
    this.showMore(this.resultForCut, button);
  };

  showMore(resultForCut, button) {
    console.log(`до откусывания resultForCut`);
    console.log(resultForCut);

    resultForCut.slice(0, 3).forEach((item) => {
      this.addCard(item.publishedAt, item.description, item.title, item.source.name, item.urlToImage, item.url);
    });
    
    resultForCut = resultForCut.slice(3);
    console.log(`после откусывания resultForCut`);
    console.log(resultForCut);
    
    if (resultForCut.length != 0) {
      button.classList.remove('section-result__button_hidden');
      document.querySelector('.section-result__button').addEventListener('click', () => {
        this.showMore(resultForCut, button);
      });
    } else {
      document.querySelector('.section-result__button').classList.add('section-result__button_hidden');
      return;
    }  
  };
}