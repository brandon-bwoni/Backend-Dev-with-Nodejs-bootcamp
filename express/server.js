const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('Hello from express');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Hello again from express');
//   res.send('<h1>This is the home page</h1>');
// });

app.use('/users', (req, res, next) => {
  console.log('Hello again from home');
  res.send('<h1>This is the users page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Hello again from home');
  res.send('<h1>This is the homepage</h1>');
});


app.listen(3000);