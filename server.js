const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

//                         <------path-------->
const sequelize = require('./config/connection');

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//require the controller folder because there is an index file in the folder that exports all files within it
//             <------path------>
app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// 1. establish the conection to your mysql collection/database
// 2. create your config folder and connection.js file to establish this connection
// 3. create a model for your database, when you run node server, the model will create a table automatically
// 4. index.js file within the models folder is not required but is helpful to be able to reference the models folder as a whole
// 5. create the controllers folder, this folder will hold the files that control both the html routes and api/database routes
// 6. inside controllers folder, it's common practice to have an api folder for api routes and home folder for home routes, but home routes in this app is outside the api folder, which is okay
// 7. you create your route.js file to handle your post/get/put routes and in case you have multiple route files (client-route/search-route/etc) you can have an index.js file to export all filed to be able to just reference the api folder as a whole
// 8. index.js files in controllers folder will have information on what files to use for apiRoutes and what infomation or files to use for the htmlRoutes
// 9. the controllers folder is then referenced in server.js, which is why we need the index.js file, so server.js knows which files are used for handling api routes and html routes
// 10. create server.js file and make sure all paths are correct