const path = require('path');
const express = require('express');

const mainRoutes = require('./routes/index');
const app = express();
const port = 3000;

app.use(mainRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`App listening at port ${port}`);

});