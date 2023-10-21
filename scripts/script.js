// Страница полностью загружается
window.onload = function () {

    // Находим инпуты и объявляем переменные
    let fullName = document.getElementById('fullName');
    let yourUsername = document.getElementById('yourUsername');
    let email = document.getElementById('email')
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeatPassword');
    let checkbox = document.getElementById('checkbox');
    let signUp = document.getElementById('signUp');
    let loginYourUsername = document.getElementById('loginYourUsername');
    let loginPassword = document.getElementById('loginPassword');

        // В поле "Full Name" запрет вводить цифры.
    fullName.onkeydown = (e) => {
        let letter = parseInt(e.key);
        if (!isNaN(letter)) {
            return false;
        }
    }

    // В поле "Your username" запрет вводить точки и запятые.
    yourUsername.onkeydown = (e) => {
        let letter = (e.key);
        if (letter === '.' || letter === ',') {
            return false;
        }
    }

    //“Согласен” или “Не согласен”
    checkbox.onchange = () => {
        if (checkbox.checked) {
            console.log(`Согласен`)
        } else {
            console.log(`Не согласен`)
        }
    }
    // Проверка на заполнение инпутов
    signUp.onclick = () => {
        if (!fullName.value) {
            alert(`Заполните поле 'Full Name'`);
            return;
        }

        if (!yourUsername.value) {
            alert(`Заполните поле 'Your username'`);
            return;

        }

        if (!email.value) {
            alert(`Заполните поле 'E-mail'`);
            return;
        }

        if (!password.value) {
            alert(`Заполните поле 'Password'`);
            return;
        }

        if (!repeatPassword.value) {
            alert(`Заполните поле 'Repeat Password'`);
            return;
        }

        if (!checkbox.checked) {
            alert(`Пожалуйста, отметь согласие с Соглашением.`);
            return;
        }

        // Короткий пароль, а после проверка совпадение паролей
        if (password.value.length < 8) {
            alert(`'Password' слишком короткий, введите не менее 8 символов`);
            return;
        } else if (password.value !== repeatPassword.value) {
            alert(`Пароли не совпадают`);
            return;
        }

        // Popup переменные
        let popup = document.getElementById('popup');
        let closePopup = document.getElementById('popupButton');
        // Popup открытие
        popup.classList.add('popup_active');
        // Popup закрытие и запуск функции имитации логина
        closePopup.onclick = () => {
            popup.classList.remove('popup_active');
            loginChanges();
        }
    }

    // Функция переключения на логин
    function loginChanges() {
        let signUpForm = document.querySelector('.signup');
        let signInForm = document.querySelector('.signin');

        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';

        let login = document.getElementById('loginButton');

        //  Проверка на заполнения login
        login.onclick = () => {
            if (!loginYourUsername.value || !loginPassword.value) {
                alert(`Не верно введены данные`);
                return;
            } else {
                alert(`Добро пожаловать, ${loginYourUsername.value}`);
            }
        }
    }

    let signIn = document.getElementById('signIn');
    signIn.onclick = () => {
        loginChanges()
    }
}





















