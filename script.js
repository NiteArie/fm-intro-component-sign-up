const app = (() => {
    const _form = document.querySelector(".container__signup__form");

    const _firstNameInput = document.querySelector(".container__signup__form__first");
    const _lastNameInput = document.querySelector(".container__signup__form__last");
    const _emailInput = document.querySelector(".container__signup__form__email");
    const _passwordInput = document.querySelector(".container__signup__form__password");

    const _firstNameError = document.querySelector(".container__signup__form__error-first");
    const _lastNameError = document.querySelector(".container__signup__form__error-last");
    const _emailError = document.querySelector(".container__signup__form__error-email");
    const _passwordError = document.querySelector(".container__signup__form__error-password");
    
    const _emailRegex = /^\S+@\S+\.\S+$/;

    _form.addEventListener("submit", (event) => {
        event.preventDefault();

        clearForm();

        let formState = true;

        let formElements = _form.elements;

        let firstName = formElements.first.value;
        let lastName = formElements.last.value;
        let email = formElements.email.value;
        let password = formElements.password.value;

        if (!validateFirstName(firstName)) {
            showFirstNameInputError();
            showFirstNameError();
            formState = false;
        }

        if (!validateLastName(lastName)) {
            showLastNameInputError();
            showLastNameError();
            formState = false;
        }
        
        if (!validateEmailFormat(email)) {
            updateEmailInputErrorMessage("Looks like this is not an email");
            showEmailInputError();
            showEmailError();
            formState = false;
        }

        if (!validateEmailEmptyness(email)) {
            updateEmailInputErrorMessage("Email Address cannot be empty");
            showEmailInputError();
            showEmailError();
            formState = false;
        }


        if (!validatePassword(password)) {
            showPasswordInputError();
            showPasswordError();
            formState = false;
        }

        if (formState) {
            
        } else {
            
        }
    })

    function clearForm() {
        hideFirstNameInputError();
        hideFirstNameError();

        hideLastNameInputError();
        hideLastNameError();

        hideEmailInputError();
        hideEmailError();

        hidePasswordInputError();
        hidePasswordError();

    }

    function validateFirstName(firstName) {
        return firstName !== ""
    }

    function validateLastName(lastName) {
        return lastName !== ""
    }

    function validateEmailEmptyness(email) {
        return email !== ""
    }

    function validateEmailFormat(email) {
        return _emailRegex.test(email)
    }

    function validatePassword(password) {
        return password !== ""
    }

    function showFirstNameInputError() {
        _firstNameInput.classList.add("error");
    }

    function hideFirstNameInputError() {
        _firstNameInput.classList.remove("error");
    }

    function showLastNameInputError() {
        _lastNameInput.classList.add("error");
    }

    function hideLastNameInputError() {
        _lastNameInput.classList.remove("error");
    }

    function showEmailInputError() {
        _emailInput.classList.add("error");
    }

    function hideEmailInputError() {
        _emailInput.classList.remove("error");
    }

    function showPasswordInputError() {
        _passwordInput.classList.add("error");
    }

    function hidePasswordInputError() {
        _passwordInput.classList.remove("error");
    }

    function showFirstNameError() {
        _firstNameError.classList.remove("hidden");
    }

    function hideFirstNameError() {
        _firstNameError.classList.add("hidden");
    }

    function showLastNameError() {
        _lastNameError.classList.remove("hidden");
    }

    function hideLastNameError() {
        _lastNameError.classList.add("hidden");
    }

    function showEmailError() {
        _emailError.classList.remove("hidden");
    }

    function hideEmailError() {
        _emailError.classList.add("hidden");
    }

    function showPasswordError() {
        _passwordError.classList.remove("hidden");
    }

    function hidePasswordError() {
        _passwordError.classList.add("hidden");
    }

    function updateEmailInputErrorMessage(message) {
        _emailError.textContent = message;
    }

})();