/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */
const score = 100 // тестовое значение, можно изменять
// your code


<<<<<<< HEAD
let grade

if (score <= 49) {
    grade = 'F'

} else if (score <= 69) {
    grade = 'D'

} else if (score <= 79) {
    grade = 'C'


} else if (score <= 89) {
    grade = 'B'


} else if (score <= 100) {
    grade = 'A'


}
console.log(grade)
=======
    let grade =  score

    if (grade <= 49) {
        grade = 'F'

    } else if (grade <= 69) {
        grade = 'D'

    } else if (grade <= 79) {
     grade = 'C'


    } else if (grade <= 89) {
        grade = 'B'


    } else if (grade <= 100) {
        grade = 'A'


    }

console.log(grade)
>>>>>>> c8897fa6dc2b956b9a93b8f0b2bc99447ca8884d
