// 1. Напишите цикл for, который выводит консоль каждое второе число от 0 до 10.

for (let i = 0; i < 11; i = i + 2) {
  console.log(i);
}

// 2. Напишите цикл for, который выводит в консоль  все числа от 55 до 20.

for (let i = 55; i > 19; i--) {
  console.log(i);
}

// 3. Дан массив numbers. Вывести в консоль все числа из массива.

const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 4. Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат.

const numbers_squared = [];
for (let i = 0; i < numbers.length; i++) {
  numbers_squared.push(Math.pow(numbers[i], 2));
}
console.log(numbers_squared);

// 5. Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

const last_elem = numbers_squared[numbers_squared.length - 1];
console.log(last_elem);

// 6. Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <> years old’

const user = {
  first_name: "Ivan",
  last_name: "Ivanov",
  age: 20,
  salary: 500,
};

console.log(
  `User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`
);