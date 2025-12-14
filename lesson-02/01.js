/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = 'admin'
const isVerifiedUser = 'oldUser'
const hasSpecialPermission = 'vipPerson'
const hasTemporaryPass = 'user'

let isAccess = prompt("Ваш уровень доступа!?", '');


if(isAccess === isAdmin || isAccess === isVerifiedUser) {
    alert('Добро пожаловать!');
    let pass = prompt("У вас есть специальное разрешение?", '')
    if(pass === hasSpecialPermission || pass === hasTemporaryPass){
        alert('Проверка пройдена!');
    }  else if(pass === '' || pass === null) {
        alert('Попробуйте снова!')
    } else {
        alert('Охранааа!!!!')
    }
} else if(isAccess === ''  || isAccess === null) {
    alert("Попробуйте снова!'")
} else {
    alert('Доступ закрыт!');
}
console.log(isAccess)