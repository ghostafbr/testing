
const request = require('supertest');
const { MongoClient} = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
    let app = null;
    let server = null;
    let database = null;

    beforeAll(async () => {
        app = createApp();
        server = app.listen(3001);
        const client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();
        database = client.db(DB_NAME);
    });

    afterAll( async () => {
        server.close();
        await database.dropDatabase();
        // await database.collection('books').drop();
        // await database.collection('books').deleteMany({});
    });

    describe('Test for [GET] /api/v1/books', () => {
        test('should return a list books', async () => {
            // Arrange
            const seedData = await database.collection('books').insertMany([
                {
                    title: 'The Lord of the Rings',
                    year: 1954,
                    author: 'J. R. R. Tolkien',
                },
                {
                    title: 'The Hobbit',
                    year: 1937,
                    author: 'J. R. R. Tolkien',
                },
            ]);
            // Act
            return request(app).get('/api/v1/books').expect(200).then(({body}) => {
                expect(body.length).toEqual(seedData.insertedCount);
            });
        });

    });

});
