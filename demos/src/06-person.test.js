const Person = require('./06-person');

describe('', () => {
    let person;
    // Arrange
    beforeEach(() => {
        person = new Person('Juan', 70, 1.70);
    });

    test('Should return down', () => {
        // Arrange
        person.weight = 45;
        // Act
        expect(person.calcIMC()).toBe('down');
    });

    test('Should return normal', () => {
        person.weight = 56;
        expect(person.calcIMC()).toBe('normal');
    });
});
