import { formateDay } from '../utils/formateDay';
import { formateMonth } from '../utils/formateMonth';
import { formateDateDigits } from '../utils/formateDateDigits';

export default class Statistics {
  constructor(dataStorage) {
    this.dataStorage = dataStorage;
  };

  keyWordTitle() {
    this.keyWord = this.dataStorage.getRequest().toLowerCase();
    const requestSpan = document.querySelector('.analytics-general__request-span');
    requestSpan.textContent = this.keyWord; 
  };

  countNewsWeek() {
    const subtitleTotalResults = document.querySelector('.analytics-general__subtitle_news-week');
    subtitleTotalResults.textContent = this.dataStorage.getTotalResults();
    };

  countMentionWeek() {
    this.countMentionTitleWeek = this.dataStorage.getArticles().reduce((prev, next) => {
      const count = (next.title.toLowerCase().match(this.keyWord)  || []).length;
      prev += count;
      return prev;
    }, 0);

    const subtitleMentionTitleWeek = document.querySelector('.analytics-general__subtitle_mention-week');
    subtitleMentionTitleWeek.textContent = this.countMentionTitleWeek;
  };

  chartDate() {
    //вывод дат по дням
    const chartDay = Array.from(document.querySelectorAll('.chart__day'));
     
    for (let i = 0; i < 7; i ++) {
      chartDay[i].textContent = formateDay(new Date() - new Date(i * 24 * 3600 * 1000)); 
    };

    //вывод месяца (шапка чарта)
    const chartMonth = document.querySelector('.chart__month');
    chartMonth.textContent = formateMonth(new Date());
  }

  chartBar() {
    const chartBar = Array.from(document.querySelectorAll('.chart__loader'));
    const chartCounter = Array.from(document.querySelectorAll('.chart__counter'));
    const countTitleMentions = [];
    const countDescriptionMentions = [];
 
      for (let i = 0; i < 7; i ++) {
        const countDate = 0;
        const countDateResult = 0;

        for (let j = 0; j < this.dataStorage.getArticles().length; j ++) {
        
          if ((formateDateDigits(this.dataStorage.getArticles()[j].publishedAt)) == 
          (formateDateDigits(new Date() - new Date(i * 24 * 3600 * 1000)))) {
            
            if (this.dataStorage.getArticles()[j].title !== null) {
              countTitleMentions[j] = (this.dataStorage.getArticles()[j].title.toLowerCase().match(this.keyWord) || []).length;
            } else {
              countTitleMentions[j] = 0;
            };
            if (this.dataStorage.getArticles()[j].description !== null) {
              countDescriptionMentions[j] = (this.dataStorage.getArticles()[j].description.toLowerCase().match(this.keyWord) || []).length;
            } else {
              countDescriptionMentions[j] = 0;
            }
            countDate = countDate + countTitleMentions[j] + countDescriptionMentions[j];
            countDateResult = Math.ceil((countDate / this.dataStorage.getTotalResults()) * 100);
          }
        }
        
        chartBar[i].style.width = countDateResult + '%';
        chartCounter[i].textContent = countDate;    
      }
  };
};