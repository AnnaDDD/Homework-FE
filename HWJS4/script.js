//Написать цикл, который создает множество параграфов с каждым десятым числом 
//в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
//Добавить созданные параграфы в div с классом numbers.


const text = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {
  text.innerHTML += `<p>${i}</p>`;
}

// или

const numbersDiv = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {
  const p = document.createElement("p");
  p.innerText = i;
  numbersDiv.append(p);
}

//Написать цикл, который проходится по массиву строк, для каждой строки создает параграф 
//и добавляет его в div с классом strings_container. Строки взять произвольные.

const letters = ["AAA", "BBB", "CCC", "DDD"];
const strings = document.querySelector(".strings_container");

for (let i = 0; i < letters.length; i++) {
  strings.innerHTML += `<p>${letters[i]}</p>`;
}

// или

const strArray = ["Hallo", "Guten Tag", "Moin"];
const stringsDiv = document.querySelector(".strings_container");

for (let i = 0; i < strArray.length; i++) {
  const p = document.createElement("p");
  p.innerText = strArray[i];
  stringsDiv.append(p);
}


//Написать цикл, который проходится по массиву с объектами - 
//у объектов свойства first_name, last_name и  age (данные взять произвольные) 
// - и создает карточки только для совершеннолетних пользователей. 
//Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
//Добавить все карточки в div с классом users_container.

const person = [
  {
    first_name: "Anna",
    last_name: "Ivanova",
    age: 20,
  },
  {
    first_name: "Elena",
    last_name: "Borisova",
    age: 15,
  },
  {
    first_name: "Olga",
    last_name: "Petrova",
    age: 80,
  },
];

const users = document.querySelector(".users_container");

for (let i = 0; i < person.length; i++) {
  if (person[i].age >= 18) {
    users.innerHTML += `
    <p>${person[i].first_name} ${person[i].last_name}, ${person[i].age}</p>
        `;
  }
}

// или

const usersList = [
  {
    first_name: "Anna",
    last_name: "Ivanova",
    age: 20,
  },
  {
    first_name: "Elena",
    last_name: "Borisova",
    age: 15,
  },
  {
    first_name: "Olga",
    last_name: "Petrova",
    age: 80,
  },
];

const usersDiv = document.querySelector(".users_container");
for (let i = 0; i < usersList.length; i++) {
  if (usersList[i].age < 18) continue;

  const { first_name, last_name, age } = usersList[i];
  const div = document.createElement("div");
  const pFirstName = document.createElement("p");
  pFirstName.innerText = `Имя пользователя: ${first_name}`;
  const pLastName = document.createElement("p");
  pLastName.innerText = `Фамилия пользователя: ${last_name}`;
  const pAge = document.createElement("p");
  pAge.innerText = `Возраст пользователя: ${age}`;
  div.append(pFirstName, pLastName, pAge);
  usersDiv.append(div);
}