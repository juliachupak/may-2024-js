console.info('створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б');
const square1 = (a, b) => {
   return a * b;
}
const square2 = (a, b) => a * b;
console.log(square1(2,6));
console.log(square2(7,12));


console.info('створити функцію яка обчислює та повертає площу кола з радіусом r');
const squareCircle= (r) => Math.PI * Math.pow(r, 2);
console.log(squareCircle(6));


console.info('створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r');
const squareCylinder = (r, h) => {
    const squareCylinder = 2 * Math.PI * (r * h + Math.pow(r,2))
    console.log(squareCylinder);
    return squareCylinder;
}
console.log(squareCylinder(2,6));


console.info('створити функцію яка приймає масив та виводить кожен його елемент');
const returnArray = (...arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
returnArray(3,27,68, 0.5);


console.info('створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент');
const writeParagraph = (str) => document.write(`<p>${str}</p>`);
writeParagraph('Lorem ipsum dolor sit amet.')



console.info('створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий');
const writeList1 = (text) => document.write(
    `<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`
);
writeList1('Lorem ipsum dolor.');


console.info('створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write');
const writeList2 = (text, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
writeList2('Lorem ipsum dolor txt.', 6);


console.info('створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write');
const  showCustomArray = (...array) => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
showCustomArray('lorem', 15, true, 'beta', false, undefined, null);


console.info('створити функцію яка приймає масив об\'єктів з наступними полями id, name, age та виводить їх в документ. Для кожного об\'єкту окремий блок');
const showCustomObjects = (array) => {
    document.write(`<div>`);
    for (let i = 0; i < array.length; i++) {
        document.write(
            `<div style="padding: 6px; border: 1px solid lightgrey; display: inline-block; margin-right: 6px;">
                <div>${array[i].name}</div>
                <div>Age: ${array[i].age}</div>
                <div>ID: ${array[i].id}</div>
            </div>`);
    }
    document.write(`</div>`);
}
showCustomObjects([
    {
        id: 123,
        name: 'John',
        age: 29,
    },
    {
        id: 124,
        name: 'Johana',
        age: 92,
    },
    {
        id: 125,
        name: 'Jorge',
        age: 19,
    }
]);


console.info('створити функцію яка повертає найменьше число з масиву');
const getMinNumberFromArray = (arr) => {
    console.log(Math.min(...arr));
}
getMinNumberFromArray([5, 3, 1, 7, 10])


console.info('створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13');
const sumArray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
sumArray([1,2,10]);


console.info('створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах. Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]');
const swapArray = (arr, i, j) => {
    console.log('start', arr);
    const value1 = arr[i];
    const value2 = arr[j];
    arr[j] = value1;
    arr[i] = value2;
    console.log('end', arr);
}
swapArray([1,2,10], 1, 2);


console.info('Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency). Приклад exchange(10000,[{currency:\'USD\',value:25},{currency:\'EUR\',value:42}],\'USD\') // => 400');
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currencyValue;
    for (const currencyValueElement of currencyValues) {
        if (currencyValueElement.currency === exchangeCurrency) {
            currencyValue = currencyValueElement;
        }
    }

    if (!currencyValue) {
        console.warn('Unknown currency');
        return;
    }
    const value = sumUAH / currencyValue.value;
    console.log(`${sumUAH}UAH => ${value}${exchangeCurrency}`);
    return value;
}
exchange(10000,[{currency:'USD', value:25}, {currency:'EUR', value:42}],'USD');
exchange(42000,[{currency:'USD', value:25}, {currency:'EUR', value:42}],'EUR');
exchange(42000,[{currency:'USD', value:25}, {currency:'EUR', value:42}],'JBL');





