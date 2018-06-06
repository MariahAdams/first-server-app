const pg = require('pg');
const Client = pg.Client;
//come back and add path to a database here!!!!
const databaseUrl = 'postgres://localhost:5432/';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS glucoseLogs (
        id SERIAL PRIMARY KEY,
        date DATE,
        day VARCHAR(256),
        changeInsulin bool,
        beforeBreakfast INTEGER,
        afterBreakfast INTEGER,
        beforeLunch INTEGER,
        afterLunch INTEGER,
        beforeDinner INTEGER,
        afterDinner INTEGER
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });