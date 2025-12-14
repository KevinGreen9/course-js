/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

 const score = 100 // тестовое значение, можно изменять
    // your code
    let count = 0
    
while (count < 5) {
    let grade = Math.floor(Math.random() * score);

    if (grade <= 49) {
        grade = 'F'
        count++

    } else if (grade <= 69) {
        grade = 'D'
        count++

    } else if (grade <= 79) {
     grade = 'C'
        count++

    } else if (grade <= 89) {
        grade = 'B'
        count++

    } else if (grade <= 100) {
        grade = 'A'
        count++

    }

}
