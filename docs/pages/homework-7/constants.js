/**
 Функція яка повертає рандомне число
 @param round розряд числа
 */
const getRandomId = (round = 1000) => Math.floor(Math.random() * round);

const NUMBERS_ARRAY = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

const COURSES_AND_DURATION_ARRAY = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
