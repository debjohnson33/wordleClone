import client from './pool.js';

client.on('connect', () => {
  console.log('connected to the db');
});

require('make-runnable');