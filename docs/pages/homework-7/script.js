console.info(`Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone створити пустий масив, наповнити його 10 об'єктами new User(....)`);
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const userArray = [];
for (let i = 0; i < 10; i++) {
    userArray.push(new User(getRandomId(), `User ${i}`, `Surname ${i}`, `user-${i}@gmail.com`, `097 097-97-9${i}`));
}
console.log(userArray);



console.info ('Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки обєкти з парними id (filter)');
const oddUserArray = userArray.filter(item => item.id % 2 === 0)
console.log(oddUserArray);



console.info ('Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)')
const sortedUserArray = userArray.map(i => i).sort((a,b) => (a.id - b.id));
console.log(sortedUserArray);



console.info(`створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client`);

class Client {
    constructor(id, name, surname, email, phone, orders) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.orders = orders;
    }
}

function Order(id, name, price, currency) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.currency = currency;
}

function getClientOrders() {
    const count = getRandomId(10);
    const orders = [];
    for (let i = 0; i < count; i++) {
        orders.push(new Order(i, `order name ${i}`, count*100, '$'));
    }
    return orders;
}

const clientArray = [];
for (let i = 0; i < 10; i++) {
    const id = getRandomId();
    clientArray.push(new Client(id, `Name ${i}`, `Surname ${i}`, `user-${i}@gmail.com`, `097 097-97-9${i}`, getClientOrders()));
}
console.log(clientArray)



console.info (`Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)`)
const sortedClientArray = clientArray.map(i => i).sort((a,b) => (a.orders.length - b.orders.length));
console.log (sortedClientArray);



console.info (`
Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    -- info () - яка виводить всю інформацію про автомобіль в форматі "назва поля - значення поля"
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
`)

function Car(model, producer, year, speed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.speed = speed;
    this.volume = volume;

    this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    };
    this.info = () => {
        console.group('Car info:')
        for (const argument in this) console.log(argument, this[argument]);
        console.groupEnd();
    }
    this.increaseMaxSpeed = (newSpeed) => {
        this.speed += newSpeed;
    }
    this.changeYear = (newValue) => {
        this.year = newValue;
    }
    this.addDriver = (driver) => {
        Car.prototype.driver = driver;
    }

}

function Driver(name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
}

const myCar = new Car('red star', 'ford', 1289, 150, 2.4);

myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(32);
myCar.changeYear(1974);
myCar.addDriver(new Driver('Oleg', 26,  6));
console.log(myCar);




console.info(`
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль їдемо зі швидкістю {максимальна швидкість} на годину
    -- info () - яка виводить всю інформацію про автомобіль в форматі \`назва поля - значення поля\`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car`);


class CarClass {
    constructor(model, producer, year, speed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    }
    info() {
        console.group('Car info:')
        for (const argument in this) console.log(argument, this[argument]);
        console.groupEnd();
    }
    increaseMaxSpeed(newSpeed) {
        this.speed += newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
const myCarClass = new CarClass('red star', 'ford', 1289, 150, 2.4);

myCarClass.drive();
myCarClass.info();
myCarClass.increaseMaxSpeed(32);
myCarClass.changeYear(1974);
myCarClass.addDriver(new Driver('John', 31, 0.7));
console.log(myCarClass);




console.info(`-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку`)

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
const cinderellas = [
    new Cinderella('Anna', '25', 37),
    new Cinderella('Greta', '20', 41),
    new Cinderella('Eliza', '16', 38),
    new Cinderella('Maria', '19', 36),
    new Cinderella('Diana', '25', 37),
    new Cinderella('Olga', '21', 37),
    new Cinderella('Elena', '20', 41),
    new Cinderella('Sofia', '16', 38),
    new Cinderella('Margo', '17', 39),
    new Cinderella('Siona', '24', 38)
];
const ourPrince = new Prince('Artur', '25', 36);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === ourPrince.shoeSize) {
        console.log(`Prince's`, cinderella);
    }
}

let princesCinderella = cinderellas.find(cinderella => cinderella.footSize === ourPrince.shoeSize);
console.log(princesCinderella);



console.info(`Через Array.prototype. створити власний foreach, filter`)
function forEach(item, array, callBackFunction) {
    this.item = item;
    this.array = array;
    this.callBackFunction = callBackFunction
}
Array.prototype.customForEach = function (callback) {
    const myArr = this;
    for (const myArrElement of myArr) {
        callback(myArrElement);
    }
};

NUMBERS_ARRAY.customForEach(el => console.log(el));

Array.prototype.customFilter = function (callback) {
    const result = [];
    for (const el of this) {
        if (callback(el)){
            result.push(el);
        }
    }
    return result;
};

const customFilteredArray = COURSES_AND_DURATION_ARRAY.customFilter((el) => el.monthDuration > 5);
console.log(customFilteredArray)



