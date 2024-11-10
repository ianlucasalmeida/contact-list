const express = require('express');
const { sequelize } = require('./models');
const contactRoutes = require('./routes/contactRoutes');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use('/', contactRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
