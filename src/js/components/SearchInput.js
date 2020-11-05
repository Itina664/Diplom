export default class SearchInput {
    constructor(form) {
      this.form = form;
    };
  
    //валидация поля input
    checkInputValidity (input, errorTheme) {
      if (input.validity.valueMissing) { //если поле пустое
        errorTheme.textContent = "Нужно ввести ключевое слово";
        errorTheme.classList.add('section-search__error-theme_active');
  
      } else { //если ошибок нет, то поле валидно
        errorTheme.textContent = "";
      }
    }
    
    //очищение поля текста ошибки
    reset(errorTheme) {
      errorTheme.textContent = '';
    }

    //установление кнопки submit активной/неактивной в зависимоти от проверки на валидность
    setSubmitButtonState (buttonSubmit) {
      if (this.form.checkValidity()) {
        buttonSubmit.removeAttribute('disabled');
      } else {
        buttonSubmit.setAttribute('disabled', true);
      }
    }

    //добавление обработчиков валидации всем полям форм 
  setEventListeners() {
    this.form.addEventListener('input', (event) => {
      this.checkInputValidity(event.target, errorTheme);
      this.setSubmitButtonState(this.form.querySelector('section-search__button'));
    })
  }
}