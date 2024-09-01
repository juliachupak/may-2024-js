console.group(`Створити функцію, яка робить глибоку копію об'єкту. Додати перевірки на undefined, null, NaN.
Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.`);

const user = {
    name: 'Mykola',
    age: 30,
    getAge: function() {
        console.log(this.age)
    },
    hello: function() {
        console.log(`Hello ${this.name}`)
    },
    info: function () {
        console.log(`${this.name} is ${this.age} year old`);
    }
};

const cloneObject = (obj) => {
    if (obj) {
        const clone = JSON.parse(JSON.stringify(obj));

        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                clone[key] = obj[key].bind(clone);
            }
        }

        return clone;
    }

    throw new Error('the object cannot be handled');
}

const userClone = cloneObject(user);

userClone.name = 'Borys';
userClone.age = 62;

user.info();

userClone.getAge();
userClone.hello();
userClone.info();

console.groupEnd();




console.group('За допомогою map перетворити кожен елемент заданого масиву на наступний тип {id,title,monthDuration. Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції')

console.log(COURSES_AND_DURATION_ARRAY
    .map((item, id) => ({
            ...item,
            id: `new-id-${id}`
        })));

console.groupEnd();
