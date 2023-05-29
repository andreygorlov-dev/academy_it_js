//Массивы

//let arr = new Array();

let students = [
    "Иванов", 
    "Сидоров", 
    "Петров"
];

console.log(students[students.length - 1]);

console.log("============================================");

// pop/push shift/unshift
// push - добавляет элемент в конец
// shift - удаляет элемент в начале [!!! Сдвигается очередь нашей колллекции ]
// unshift - добавляет элемент в начало
// push - лобавляет элемент в конец
// pop - удаляет последний элемент

students.pop();

console.log(students);

students.push("Коля");

console.log(students);

students[students.length] = "Саша";

console.log(students);

students.unshift("Кузнецов");

console.log(students);

students.shift();

console.log(students);

let newArrayStudents = students;

console.log(newArrayStudents === students);

newArrayStudents.pop();

console.log(students);

console.log("============================================");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("============================================");

for (let student of students) {
    console.log(student);
}

console.log("============================================");

for (let key in students) {
    console.log(students[key]);
}

console.log("============================================");

for (let [key, student] of students.entries()) {
    console.log(`${key} ${student}`);
}

console.log("============================================");

students = [];

students[404] = "Сидоров";

console.log(students.length);

console.log("============================================");

students = [
    "Иванов", 
    "Сидоров", 
    "Петров"
];

students.length = 1;

console.log(students);

students.length = 3;

console.log(students);

console.log("============================================");

let arr = [
    [1, 2, 3],
    [4, [0, 1, 2, 3], 6],
    [7, 8, 9]
];

console.log(arr[1][1][1]);

console.log("============================================");

students = new Array(
    "Иванов", 
    "Сидоров", 
    "Петров"
);

console.log("============================================");

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
styles.shift();
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);

//Функция с переменным количеством аргументов

console.log("============================================");

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 4));

console.log("============================================");

function sum(...numbers) {
    let sums = 0;

    for (let num of numbers) {
        sums += num;
    }
    return sums;
}

console.log(sum(1, 2, 3, 4, 5));

console.log("============================================");

function showNameStudents(firstName, lastName, ...args) {
    console.log(firstName, lastName);

    for (let arg of args) {
        console.log(arg);
    }
}

showNameStudents("Иван", "Иванов", "Возраст 21", 5);

console.log("============================================");

arr = [5, 6, 8, 0, 9];
let arr2 = [-3, 88, 5, 0, -9]

console.log(Math.max(...arr, ...arr2));

console.log("============================================");

let merged = [...arr, ...arr2];

console.log(merged);

console.log("============================================");

let str = "Hello world";

console.log([...str])