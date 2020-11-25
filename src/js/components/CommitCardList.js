//класс для отрисовки коммитов на странице
export default class CommitCardList {
    constructor(commitContainer, commit) {
      this.container = commitContainer;
      this.commit = commit;
    };
  
    addCommit (date, message, email, name, avatar)  {
      this.container.appendChild(this.commit.create(date, message, email, name, avatar));
    };
  }