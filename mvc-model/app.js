const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});