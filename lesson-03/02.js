// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(a) {

    let division = a % 2
        if(division !== 0) {
        return false;
    } else{
        return true;
    }
}

console.log(isEven(100));