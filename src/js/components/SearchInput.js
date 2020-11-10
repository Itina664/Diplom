export default class SearchInput {
  constructor(form) {
    this.form = form;
  };
  
  //валидация поля input
  checkInputValidity (input, error) {
    if (input.validity.valueMissing) { //если поле пустое
      error.textContent = "Нужно ввести ключевое слово";
      error.classList.add('section-search__error-theme_active');
      return false;
    } else { //если ошибок нет, то поле валидно
      error.textContent = "";
      error.classList.remove('section-search__error-theme_active');
      return true; 
    }
  };
  
  //очищение поля ошибки
  reset(error) {
      error.textContent = '';
    }
}