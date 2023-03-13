//1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function min(firstNum, secondNum) {
  if (firstNum < secondNum) {
    return firstNum;
  } else if (secondNum < firstNum) {
    return secondNum;
  } else {
    return "Оба числа равны";
  }
}
console.log(min(2, 2)); 

//2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function printEvenNumbers(firstNum, secondNum) {
  let maxNumber = 0;
  let minNumber = 0;
  if (firstNum > secondNum) {
    maxNumber = firstNum;
    minNumber = secondNum;
  } else if (firstNum < secondNum) {
    maxNumber = secondNum;
    minNumber = firstNum;
  } else {
    console.log("Оба числа равны");
    return;
  }
  for (let i = maxNumber; i >= minNumber; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(10, 20);

//3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) 
//и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(firstNum, secondNum = 2) {
  return Math.pow(firstNum, secondNum);
}

console.log(power(4));
console.log(power(2, 3));

//4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sum(n) {
  let sumOfNumbers = 0;
  for (let i = 1; i <= n; i++) {
    sumOfNumbers += i;
  }
  return sumOfNumbers;
}
console.log(sum(3));

//5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. 
//Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sumOfOddAndEvenNums(n, m) {
  let sumOfOdds = 0;
  let sumOfEvens = 0;

  for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
      sumOfEvens += i;
    } else {
      sumOfOdds += i;
    }
  }
  console.log(sumOfEvens);
  console.log(sumOfOdds);
}

sumOfOddAndEvenNums(1, 19);

//6. Напишите функцию, которая принимает в качестве аргументов массив строк, 
//а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null.
//Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'

function getString(arr) {
  if (arr.length === 0) {
    return null;
  }

  let maxStr = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxStr.length < arr[i].length) {
      maxStr = arr[i];
    }
  }
  console.log(maxStr);
}

getString(["one", "two", "three"]);