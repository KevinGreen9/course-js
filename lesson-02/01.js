/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
 const isAdmin = 'admin'
    const isVerifiedUser = 'old'
    const hasSpecialPermission = 'vip'
    const hasTemporaryPass = 'user'

    let isAccess = prompt("Ваш уровень доступа!?", '');
    let pass = prompt("У вас есть специальное разрешение?", '')

    if ((isAccess === isAdmin || isAccess === isVerifiedUser) && (pass === hasSpecialPermission || pass === hasTemporaryPass)) {
       alert(`Hello ${isAccess} you have a ${pass}` );
    } else if ((isAccess === '' || isAccess === null) && (pass === '' || pass === null)) {
       alert(`Try again, please!`);
    } else {
        alert('Security')
    }
    console.log(isAccess);
