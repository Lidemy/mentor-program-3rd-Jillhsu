const request = require('request');
const process = require('process');

const mode = process.argv[2];
const input = process.argv[3];
if (mode === 'create') {
  request.post('https://lidemy-book-store.herokuapp.com/books/').form({ name: `${input}` });
}
if (mode === 'update') {
  request.patch(
    `https://lidemy-book-store.herokuapp.com/books/${input}`,
  )
    .form({ name: `${process.argv[4]}` });
}
if (mode === 'delete') {
  request.del(`https://lidemy-book-store.herokuapp.com/books/${input}`);
}
if (mode === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${input}`,
    (error, response, body) => {
      const book = JSON.parse(body);
      console.log(`${book.name}`);
    },
  );
}
if (mode === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      JSON.parse(body).forEach(element => console.log(`${element.id} ${element.name}`));
    },
  );
}
