console.info(`Знайти та вивести довижину настипних стрінгових значень "hello world", "lorem ipsum", "javascript is cool"`);
STRING_ARRAY.forEach(value => {
    const valueLength = value.length;
    console.log(`${value} -> ${valueLength}`);
});



console.info(`Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'`);
const upperCaseStringArray = STRING_ARRAY.map(value => value.toUpperCase());
console.log(upperCaseStringArray);



console.info(`Перевести до нижнього регістру настипні стрінгові значення "HELLO WORLD", "LOREM IPSUM", "JAVASCRIPT IS COOL"`);
const lowerCaseStringArray = upperCaseStringArray.map(value => value.toLowerCase());
console.log(lowerCaseStringArray);



console.info(`Є 'брудна' стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.`);
const cleanString = DIRTY_STRING.split(' ').filter(i => !!i).join(' ');
console.log(cleanString);



console.info(`Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.`);
const stringToArray = (str) => {
    const result = str.split(' ');
    console.log(result);
    return result;
};
stringToArray(CUSTOM_STRING);



console.info(`Є масив чисел [10,8,-7,55,987,-1011,0,1050,0].За допомоги map  перетворити всі об'єкти в масиві на стрінгові`);
const numberToStringArray = NUMBERS_ARRAY.map(value => value.toString());
console.log(NUMBERS_ARRAY, numberToStringArray);



console.info(`Створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction`);
const sortNumbers = (array, direction = DESC) => {
    return array
        .map(value => value)
        .sort(
            (a, b) => direction !== DESC
                ? a - b
                : b - a
        );
}
const mySortedArray = sortNumbers(NUMBERS_TO_SORT);
const mySortedAscArray = sortNumbers(NUMBERS_TO_SORT, 'ASC');
console.log('Array to sort -> ', NUMBERS_TO_SORT);
console.log('Array sorted by DESC -> ', mySortedArray);
console.log('Array sorted by ASC -> ', mySortedAscArray);



console.info(`
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
`);
 console.log(COURSES_AND_DURATION_ARRAY
     .sort((a, b) => a.monthDuration - b.monthDuration));
console.log(COURSES_AND_DURATION_ARRAY
    .filter(item => item.monthDuration > 5));
console.log(COURSES_AND_DURATION_ARRAY
    .map((item, id) => ({
        id,
        ...item
    })));





console.info(`
 описати колоду карт (від 6 до туза без джокерів)
 - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше`);
const findCardsByCustomKey = (key, array = PLAYING_CARD_DECK) => {
    let result;
    switch (key) {
        case FIND_KEYS.SPADE_ACE:
            result = array.find(item => item.suit === SUIT.SPADES && item.value === 'A');
            break;
        case FIND_KEYS.ALL_RED:
            result = array.filter(item => item.suit === SUIT.DIAMONDS || item.suit === SUIT.HEARTS);
            break;
        case FIND_KEYS.ALL_DIAMOND:
            result = array.filter(item => item.suit === SUIT.DIAMONDS);
            break;
        case FIND_KEYS.ALL_SIXES:
            result = array.filter(item => item.value === 6);
            break;
        case FIND_KEYS.CLUBS_NINE_UP:
            result = array
                .filter(item => item.suit === SUIT.CLUBS)
                .filter(item => isNaN(item.value) || item.value > 8);
            break;
        default:
            result = `Data by key -> ${key}, not found`;
    }
    console.log(key, '->', result);
    return result;
}
findCardsByCustomKey(FIND_KEYS.SPADE_ACE);
findCardsByCustomKey(FIND_KEYS.ALL_RED);
findCardsByCustomKey(FIND_KEYS.ALL_DIAMOND);
findCardsByCustomKey(FIND_KEYS.ALL_SIXES);
findCardsByCustomKey(FIND_KEYS.CLUBS_NINE_UP);
findCardsByCustomKey('some missed key');





console.info(`
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}`);
const reduceCardDeck = PLAYING_CARD_DECK
    .reduce((result, card) => {
        result[card.suit].push(card);
        return result;
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    }
);
console.log(reduceCardDeck);



console.info(`
взяти з arrays.js масив coursesArray
--написати пошук всіх об'єктів, в яких в modules є sass
--написати пошук всіх об'єктів, в яких в modules є docker`);
const getCourse = (key, array = COURSES_ARRAY) =>  array.filter(item => item.modules.includes(key))
console.log(getCourse(SASS));
console.log(getCourse(DOCKER));

