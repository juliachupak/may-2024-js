console.group('Homework 2');



console.group('Part 1');

const arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

const book = {
    title: '500 herbs',
    pageCount: 595,
    genre: 'medic'
}

const book1 = {
    title: 'Assistant',
    pageCount: 368,
    genre: 'detective'
}

const book2 = {
    title: 'The Scythians',
    pageCount: 840,
    genre: 'history'
}

const books = {
    title: 'The Scythians',
    pageCount: 840,
    genre: 'history',
    author: [
        {
            name: 'R. Kipling',
            age: 33
        },
        {
            name: 'S. Kipling',
            age: 30
        },
    ]
};

const user = [
    {
        name:'John',
        username: 'jg',
        password: '123888'
    },
    {
        name:'Olena',
        username: 'olena',
        password: 'akl888'
    },
    {
        name:'Volodymyr',
        username: 'jag',
        password: '123000'
    },
    {
        name:'Nick',
        username: 'nick',
        password: 'nick'
    },
    {
        name:'Vasyl',
        username: 'vasyl',
        password: 'vasyl'
    },
    {
        name:'Jela',
        username: 'jela',
        password: '321888'
    },
    {
        name:'lena',
        username: 'lena1899',
        password: 'len888'
    },
    {
        name:'Viktor',
        username: 'vag',
        password: '123111'
    },
    {
        name:'Nickolas',
        username: 'nicky',
        password: 'nick2005'
    },
    {
        name:'Valentyna',
        username: 'val',
        password: 'val'
    },

]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);

console.groupEnd();



console.group('Part 2');

const weather = [
    {
        name: 'Monday',
        tempMorning: '16',
        tempAfternoon: '24',
        tempEvening: '12',
    },
    {
        name: 'Tuesday',
        tempMorning: '16',
        tempAfternoon: '24',
        tempEvening: '12',
    },
    {
        name: 'Wednesday',
        tempMorning: '16',
        tempAfternoon: '24',
        tempEvening: '12',
    },
    {
        name: 'Thursday',
        tempMorning: '16',
        tempAfternoon: '24',
        tempEvening: '12',
    },
    {
        name: 'Friday',
        tempMorning: '16',
        tempAfternoon: '24',
        tempEvening: '12',
    },
    {
        name: 'Saturday',
        tempMorning: '16',
        tempAfternoon: '24',
        tempEvening: '12',
    },
    {
        name: 'Sunday',
        tempMorning: '16',
        tempAfternoon: '24',
        tempEvening: '12',
    }
];

console.table(weather);
console.groupEnd();



console.group('Part 3');


const numX = 23;
const a = [1, 0, -3];

console.log(numX !== 0);
console.log(a[0] !== 0);
console.log(a[1] !== 0);
console.log(a[2] !== 0);

const time = 37;

if (time < 15) {
    console.log('first part');
} else if (time < 30) {
    console.log('second part');
} else if (time < 45) {
    console.log('third part');
} else {
    console.log('four part');
}


const day = 3;

if (day < 10) {
    console.log('first decade');
} else if (day < 20) {
    console.log('second decade');
} else if (day < 31) {
    console.log('third decade');
}

let weekDayNumber = 5;
 switch (weekDayNumber)
 {
     case 1:
         console.log('monday');
         break;
     case 2:
         console.log('tuesday');
         break;
     case 3:
         console.log('wednesday');
         break;
     case 4:
         console.log('thursday');
         break;
     case 5:
         console.log('friday');
         break;
     case 6:
         console.log('saturday');
         break;
     case 7:
         console.log('sunday');
         break;
 }

const num1= 3;
const num2 = 10;

if (num1 > num2) {
    console.log(num1);
} else if (num1 === num2) {
    console.log(num1, '=', num2);
} else {
    console.log(num2)
}

console.groupEnd();


console.group('Part 4');

let x;
let value = 0;

if (value) {
    x = value;
} else {
    x = 'default';
}

console.log(x);

console.groupEnd();


console.group('Part 5');

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
        console.log('super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('super')
}
console.groupEnd();


