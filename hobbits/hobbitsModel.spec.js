const Hobbits = require('./hobbitsModel.js');

const db = require('../data/dbConfig.js');

describe('hobbits model', () => {
  // cleanup the db before each test
  // beforeEach, beforeAll, afterEach, afterAll
  beforeEach(async () => {
    // truncate is faster then delete
    await db('hobbits').truncate();
  });

  describe('insert()', () => {
    it('should insert the hobbit into the db', async () => {
      await Hobbits.insert({ name: 'sascha' }); // using the api

      const hobbits = await db('hobbits'); // directly looking into db
      expect(hobbits).toHaveLength(1);
    });
    it('should insert the hobbit into the db', async () => {
      await Hobbits.insert({ name: 'sascha' }); // using the api
      await Hobbits.insert({ name: 'rose' });

      const hobbits = await db('hobbits'); // directly looking into db
      expect(hobbits).toHaveLength(2);
    });
  });
});
