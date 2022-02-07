import client from '.pool';

client.on('connect', () => {
  console.log('connected to the db');
});

require('make-runnable');