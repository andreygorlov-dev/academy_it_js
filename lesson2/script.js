//Копирование объектов
//Object.assign(); //1. целевой объект 2. остальные аргументы

let user = {
    lastName: "Вася",
    property: {
        height: 190,
        weight: 77
    }
};

let clone = Object.assign({}, user);

console.log(clone);

clone.property.height = 999;

console.log(user);

let user2 = {
    firstName: "Иванов"
};

let userAge = {
    age: 21
};

Object.assign(user, user2, userAge);

console.log(user);

const userConst = {
    firstName: "Вася"
};

userConst.firstName = "Петя";

console.log(userConst);

//userConst = ""  //Ошибка


//Флаги
// writable - true свойство можно изменить, false только для чтения
// enumerble - true свойство будет перечисляться в циклах
// configurable - true свойство можно удалить
user = {
    firstName: "Вася"
}

Object.defineProperty(user, "firstName", {writable: false, enumerable: false, configurable: false}); //1 объект, 2 свойство, 3 дескриптор

console.log(Object.getOwnPropertyDescriptors(user, "firstName"));//1 объект, 2 имя свойства

user.firstName = "Петя";

console.log(user);

user = {
    firstName: "Вася",
    toString() {
        return this.firstName
    }
}

for (let key in user) {
    console.log(key);
}

Object.defineProperty(user, "toString", {
    enumerable:false
});

for (let key in user) {
    console.log(key);
}

console.log("============================================");

//Set/Map

// Map - колекция ключь/значение.

let map = new Map();
map.set("1", "value") //устанавливаем значение по ключу
    .set("2", "Привет мир");
console.log(map.get("1")); //возвращает занчение по ключу
console.log(map.has("2")); //Есть ключь или нет
map.delete("1"); //удаляет значение по ключу
console.log(map.size); //Вернет количество элементов
map.clear(); //Очистка мапы
//map.key() - возвращает итерируемый объект по ключу
//map.values() - возвращает итерируемый объект по значению
//map.entries() - возвращает итерируемый объект по паре ключь/значение - по умолчанию for of

let studentMap = new Map([
    ["Петров", 5],
    ["Иванов", 4],
    ["Сидоров", 3]
]);

for (let student of studentMap.keys()) {
    console.log(student);
}

console.log("============================================");

for (let student of studentMap.values()) {
    console.log(student);
}

console.log("============================================");

for (let student of studentMap) {
    console.log(student);
}

console.log("============================================");

//Set

let set = new Set();
set.add("Петров"); //Добавляет значение
console.log(set.has("Петров")); //возвращает true, если есть значение

console.log(set);

set.delete("Петров"); //Удаление
set.clear(); //Очистка

set.size; //Возвращает количество

set = new Set();

let vasya = {name: "Вася"};
let petya = {name: "Петя"};
let kolya = {name: "Коля"};

set.add(vasya);
set.add(petya);
set.add(kolya);

set.add(vasya);
set.add(petya);
set.add(kolya);

console.log(set.size);
console.log(set);

for (let user of set) {
    console.log(user.name);
}

console.log("============================================");

user = ["Вася", "Петя"];

let [pers1, pers2] = user;

console.log(pers1 + " " + pers2);

console.log("============================================");

let fullName = "Иванов Иван";

let [lastName, firstName] = fullName.split(" ");
console.log(firstName + " " + lastName);

console.log("============================================");

user = ["Вася", "Иванов", "Петя", "Петров"];
let [pers3, , pers4, ,] = user;

console.log(pers3 + " " + pers4);

let [a, b, c] = "abc";

let [d, e, f] = new Set([1, 2, 3]);

console.log(a + " " + b + " " + c + " " + d + " " + e + " " + f);

console.log("============================================");

function showMenu({title = "default", width = 200, height = 100, items = []}) {
    console.log({title, width, height, items})
}

showMenu("Меню", undefined, undefined, ["item1", "item2"]);

let option = {
    title: "Меню2",
    items: ["item1", "item2", "item3"]
};
showMenu(option);

console.log("============================================");

user = {
    name: "Вася",
    years: 34
};

let {name, years: age, isAdmin = false} = user;
console.log(name, age, isAdmin);

