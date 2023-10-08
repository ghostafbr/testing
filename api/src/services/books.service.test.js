const BooksService = require('./books.service');

const fakeBooks = [
    {
        _id: 1,
        title: 'Clean Code',
    },
    {
        _id: 2,
        title: 'The pragmatic programmer',
    }
];

const MongoLibStub = {
    getAll: () => [...fakeBooks],
    create: () => {},
}

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Tests for booksService', () => {
    let service;
    beforeEach(() => {
        service = new BooksService();
        jest.clearAllMocks();
    });

    describe('test for getBooks', () => {
       test('should return an array of books', async () => {
           // Arrange
           // Act
           const books = await service.getBooks({});
           // Assert
           expect(books.length).toEqual(2);
       });

        test('should return an array of books', async () => {
            // Arrange
            // Act
            const books = await service.getBooks({});
            // Assert
            expect(books[0].title).toEqual('Clean Code');
        });
    });


});
