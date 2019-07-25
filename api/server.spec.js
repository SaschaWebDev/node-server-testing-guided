const request = require('supertest'); // install as devdependency npm i -D supertest

const server = require('./server.js'); // the System Under Test (SUT)
describe('server', () => {
  it('db environment set to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /', () => {
    it('should return 200 OK', () => {
      // rest client and make a get to '/', look at the status code*
      // RETURN! so jest waits for the response of the promise
      return (
        request(server)
          .get('/')
          /* .expect(200); */
          .then(res => {
            expect(res.status).toBe(200);
          })
      );
    });

    it('should return json', () => {
      // rest client and make a get to '/', look at the status code*
      // RETURN! so jest waits for the response of the promise
      return (
        request(server)
          .get('/')
          /* .expect(200); */
          .then(res => {
            // somewhere is json inside
            expect(res.type).toMatch(/json/);
            expect(res.type).toBe('application/json');
          })
      );
    });
    it('should return { api: "up"} as the body', () => {
      // rest client and make a get to '/', look at the status code*
      // RETURN! so jest waits for the response of the promise
      return (
        request(server)
          .get('/')
          /* .expect(200); */
          .then(res => {
            // somewhere is json inside
            expect(res.body).toEqual({ api: 'up' });
            expect(res.body.api).toBe('up');
          })
      );
    });
  });
});
