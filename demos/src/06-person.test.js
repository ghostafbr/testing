const Person = require('./06-person');

let person;

beforeEach(() => {
    const person = new Person('Juan', 70, 1.70);
});

test('Should return down', () => {
    person.weight = 45;
    expect(person.calcIMC()).toBe('down');
});

test('Should return normal', () => {
    person.weight = 56;
    expect(person.calcIMC()).toBe('normal');
});
