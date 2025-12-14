/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 100 // тестовое значение, можно изменять
// your code


let grade = Math.floor(Math.random() * score);
if(grade <= 49){
    console.log('F')
} else if(grade <= 69){
    console.log('D')
} else if(grade <= 79){
    console.log('C')
} else if(grade <= 89){
    console.log('B')
}
else if(grade <= 100){
    console.log('A')
}
