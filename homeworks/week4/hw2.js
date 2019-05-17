const request = require('request');

if (process.argv[2] === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const input = JSON.parse(body);
      console.log(`${input.name}`);
    },
  );
}
if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      JSON.parse(body).forEach(element => console.log(`${element.id} ${element.name}`));
    },
  );
}
