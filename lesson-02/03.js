/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 100 // тестовое значение, можно изменять
// your code


let grade

    let exam = Math.floor(Math.random() * score);
    if(exam <= 49){
grade = exam
        grade = 'F'
    } else if(exam <= 69){
        grade = exam
        grade = 'D'
    } else if(exam <= 79){
        grade = exam
        grade = 'C'
    } else if(exam <= 89){
        grade = exam
        grade = 'B'
    }
    else if(exam <= 100){
        grade = exam
        grade = 'A'
    }
