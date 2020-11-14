export default class Statistics {
  constructor(dataStorage) {
    this.dataStorage = dataStorage;
  };

  keyWordTitle() {
    const requestSpan = document.querySelector('.analytics-general__request-span');
    requestSpan.textContent = this.dataStorage.getRequest(); 
  };

  countNewsWeek() {
    const subtitleNewsWeek = document.querySelector('.analytics-general__subtitle_news-week');
    subtitleNewsWeek.textContent = this.dataStorage.getTotalResults();
    };

  countMentionWeek() {
    const countMentionTitle = this.dataStorage.getArticles().reduce((prev, next, arr) => {
      const count = (next.title.match(this.dataStorage.getRequest())  || []).length;
      prev += count;
      return prev;
    }, 0);

    const countMentionDescrip = this.dataStorage.getArticles().reduce((prev, next, arr) => {
      const count = (next.description.match(this.dataStorage.getRequest())  || []).length;
      prev += count;
      return prev;
    }, 0);

    const subtitleMentionWeek = document.querySelector('.analytics-general__subtitle_mention-week');
    subtitleMentionWeek.textContent = countMentionTitle + countMentionDescrip;
  };
};