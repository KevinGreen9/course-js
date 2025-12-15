/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
    const isAdmin = true
    const isVerifiedUser = false
    const hasSpecialPermission = true
    const hasTemporaryPass = false

    let isAccess = prompt("Ваш уровень доступа!?", '');
    let pass = prompt("У вас есть специальное разрешение?", '')

    if ((isAccess === isAdmin || isAccess === isVerifiedUser) && (pass === hasSpecialPermission || pass === hasTemporaryPass)) {
        console.log(`Hello ${isAccess} you have a ${pass}` );
    } else if ((isAccess === '' || isAccess === null) && (pass === '' || pass === null)) {
        console.log(`Try again, please!`);
    } else {
        console.log('Security')
    }
    console.log(isAccess);
