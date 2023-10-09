const {faker} = require('@faker-js/faker');

const generateOneBook = () => ({
    _id: faker.string.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
});

const generateManyBooks = (size = 10) => {
    const books = [];
    for (let i = 0; i < size; i++) {
        books.push(generateOneBook());
    }
    return [...books];
}

module.exports = { generateOneBook, generateManyBooks };
