//класс для отрисовки коммитов на странице
export default class CommitCardList {
    constructor(commitWrapper, commit) {
      this.container = commitWrapper;
      this.commit = commit;
    };
  
    addCommit (date, message, email, name, avatar)  {
      this.container.appendChild(this.commit.create(date, message, email, name, avatar));
    };

    render(result) {
      result.forEach((item) => {
        this.addCommit(item.commit.committer.date, item.commit.message, item.commit.committer.email, item.commit.committer.name, item.author.avatar_url);
      });
    }
  }

  