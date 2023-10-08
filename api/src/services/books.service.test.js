const BooksService = require('./books.service');

describe('Tests for booksService', () => {
    let service;
    beforeEach(() => {
        service = new BooksService();
    });

    describe('test for getBooks', () => {
       test('should return an array of books', async () => {
           // Arrange
           // Act
           const books = await service.getBooks({});
           console.log(books);
           // Assert
           expect(books.length).toEqual(2);
       });
    });

});
