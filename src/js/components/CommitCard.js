import { formateDateWords } from '../utils/formateDateWords';

export default class CommitCard {

    create(date, message, email, name, avatar) {
        const commit = document.createElement('a');
        const commitAvatar = document.createElement('div');
        const commitDate = document.createElement('p');
        const personContainer = document.createElement('div');
        const nameContainer = document.createElement('div');
        const personName = document.createElement('p');
        const personMail = document.createElement('p');
        const commitText = document.createElement('p');
        const formattedDateWords = formateDateWords(date);

        /*<a href="#" class="section-commit__swiper-slide">
            <p class="section-commit__commit-date">14 августа, 2019</p>
            <div class="section-commit__person-container">
              <img src="<%=require('./images/mary.png')%>" alt="Фото автора комментария" class="section-commit__person-image">
              <div class="section-commit__name-container">
                <p class="section-commit__person-name">Мария Федорова</p>
                <p class="section-commit__person-mail">mariiifed@yandex.ru</p>
              </div>
            </div>
            <p class="section-commit__commit-text">You can install this plugin directly from NetBeans Plugin Portal: in NetBeans, open   Tools >
                Plugins > Available plugins   and find and install Emmet plugin.</p>
          </a>*/
    
        commit.classList.add('swiper-slide');
        commitAvatar.classList.add('section-commit__person-image');
        commitDate.classList.add('section-commit__commit-date');
        personMail.classList.add('section-commit__person-mail');
        commitText.classList.add('section-commit__commit-text');
        personName.classList.add('section-commit__person-name');
        personContainer.classList.add('section-commit__person-container');
        nameContainer.classList.add('section-commit__name-container');

    
        commit.appendChild(commitDate);
        commit.appendChild(personContainer);
        commit.appendChild(commitText);
        personContainer.appendChild(commitAvatar);
        personContainer.appendChild(nameContainer);
        nameContainer.appendChild(personName);
        nameContainer.appendChild(personMail);
    
        commitDate.textContent = formattedDateWords;
        personName.textContent = name;
        commitText.textContent = message;
        personMail.textContent = email;
        commitAvatar.style.backgroundImage = `url(${avatar})`;
        
        /*this.cardDate = cardDate;
        this.cardTitle = cardTitle;
        this.cardText = cardText;
        this.cardInfoagency = cardInfoagency;
        this.url = url;*/

        return commit;
    };   
}