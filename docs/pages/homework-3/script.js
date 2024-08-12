for (let i = 0; i < 10; i++) {
    document.write(
        `<div>Lorem ipsum dolor sit</div>`
    )
}
for (let i = 0; i < 10; i++) {
    document.write(
        `<div>Div index = ${i}</div>`
    );
}
let i = 0;
while (i < 10) {
    document.write(
        `<h1>Lorem ipsum dolor sit amet.</h1>`
    );
    i++;
}

i = 0;
while (i < 10) {
    document.write(
        `<h1>Lorem ipsum dolor sit amet ${i}</h1>`
    );
    i++;
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
const listLength = listOfItems.length;
document.write(
    '<ul>'
);
for (let j = 0; j < listLength; j++) {
    document.write(`<li>${listOfItems[j]}</li>`);
}
document.write('</ul>');

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FJuKm2YGQCie8JHK5Nlso&w=3840&q=75'
        // image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
const productsLength = products.length;
document.write('<div class="products">');
    for (let k = 0; k < productsLength; k++) {
        document.write(
            `<div class="product-card">`
                + `<h3 class="product-title" style="text-transform: capitalize">${products[k].title}. ${products[k].price}$</h3>`
                + `<img loading="lazy" src="${products[k].image}" alt="${products[k].title}" class="product-image"/>` +
            `</div>`
        );
    }
document.write('</div>');

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const usersLength = users.length;
document.write('<div class="users">');
document.write('<h4>Users with status true</h4>');
for (let index = 0; index < usersLength; index++) {
    if (users[index].status) {
        document.write(`<div>${users[index].name}</div>`);
    }
}
document.write('<h4>Users with status false</h4>');
for (let index = 0; index < usersLength; index++) {
    if (!users[index].status) {
        document.write(`<div>${users[index].name}</div>`);
    }
}
document.write('<h4>Users older 30</h4>');
for (let index = 0; index < usersLength; index++) {
    if (users[index].age > 30) {
        document.write(`<div>${users[index].name}</div>`);
    }
}
document.write('</div>');



