const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
    let app = null;
    let server = null;
    beforeAll( () => {
        app = createApp();
        server = app.listen(3001);
    });

    afterAll( () => {
        server.close();
    });

    describe('Test for [GET] /', () => {

        test('should return "Hello World!"', async () => {
            return request(app).get('/').expect(200).then( (response) => {
                expect(response.text).toBe('Hello World!');
            });
        });

    });

});
