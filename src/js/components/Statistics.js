export default class Statistics {


    newsCount(request) {
        console.log(`request= ${request}`);
        const requestSpan = document.querySelector('.analytics-general__request-span');
        requestSpan.textContent = request.value;
        console.log(`requestSpan= ${requestSpan.textContent}`);
    }

}
    /*render(result) {
        const button = document.querySelector('.section-result__button');
        this.resultForCut = result;
    
        this.showMore();
    
        if (this.resultForCut.length > 0) {
          button.classList.remove('section-result__button_hidden');
          button.addEventListener('click', () => {
            if (this.resultForCut.length > 3) { 
              this.showMore(this.resultForCut, button);
            } else {
              button.classList.add('section-result__button_hidden');
              this.showMore(this.resultForCut, button);
            }
          });
        } else {
          button.classList.add('section-result__button_hidden');
        }     
      };
    
      showMore() {
        this.resultForCut.slice(0, 3).forEach((item) => {
          this.addCard(item.publishedAt, item.description, item.title, item.source.name, item.urlToImage, item.url);
        });
        this.resultForCut = this.resultForCut.slice(3);
      };*/
