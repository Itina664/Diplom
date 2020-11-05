export default class SearchInput {
    constructor(form) {
      this.form = form;
    };
  
    //валидация поля input
    checkInputValidity (input, errorTheme) {
      if (input.validity.valueMissing) { //если поле пустое
        errorTheme.textContent = "Нужно ввести ключевое слово";
        errorTheme.classList.add('error-theme_active');
  
      } else { //если ошибок нет, то поле валидно
        errorTheme.textContent = "";
      }
    }
    
    //очищение поля текста ошибки
    reset(errorTheme) {
      errorTheme.textContent = '';
    }

    //установление кнопки submit активной/неактивной в зависимоти от проверки на валидность
    /*setSubmitButtonState (input, buttonSubmit) {
      if (input.checkValidity()) {
        buttonSubmit.removeAttribute('disabled');
      } else {
        buttonSubmit.setAttribute('disabled', true);
      }
    }*/
}