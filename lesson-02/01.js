/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess= prompt("Ваш уровень доступа!?", '');


if(isAccess === isAdmin || isVerifiedUser) {
    alert('Добро пожаловать!');
    let pass = prompt("У вас есть специальное разрешение?", '')
    if(pass === hasSpecialPermission || hasTemporaryPass){
alert('Проверка пройдена!');
    }  else if(pass === '' || pass === null) {
        alert('Попробуйте снова!')
    } else {
        alert('Охранааа!!!!')
    }
} else if(isAccess === ''|| isAdmin || null) {
    alert("Попробуйте снова!'")
} else {
    alert('Доступ закрыт!');
}
console.log(isAccess)