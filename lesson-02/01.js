/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = 'admin';
const isVerifiedUser = 'old';
const hasSpecialPermission = 'vip';
const hasTemporaryPass = 'user';

let Access = prompt("Ваш уровень доступа!?", '');
let pass = prompt("У вас есть специальное разрешение?", '');

let isAccess =
    ((Access === isAdmin) && (pass === hasSpecialPermission)) ||
    ((Access === isVerifiedUser) && (pass === hasTemporaryPass));

if (isAccess) {
    console.log(`Hello ${Access} you have a ${pass}`);
} else if (Access === '' && pass === '') {
    console.log('Try again, please!');
} else {
    console.log('Security');
}

console.log(isAccess);
