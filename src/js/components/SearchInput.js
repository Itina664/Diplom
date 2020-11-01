class SearchInput {
    constructor(form) {
      this.form = form;
    };
  
    //валидация поля input
    checkInputValidity(input, errorTheme) {
      if (input.validity.valueMissing) { //если поле пустое
        errorTheme.textContent = "Нужно ввести ключевое слово";
        errorTheme.classList.add('error_active');
  
      } else { //если ошибок нет, то поле валидно
        errorTheme.textContent = "";
      }
    }
  
    //установление кнопки submit активной/неактивной в зависимоти от проверки на валидность
    setSubmitButtonState = (buttonSubmit) => {
      if (this.form.checkValidity()) {
        buttonSubmit.removeAttribute('disabled');
      } else {
        buttonSubmit.setAttribute('disabled', true);
      }
    }
}