const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

<<<<<<< HEAD
app.engine('handlebars', expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'handlebars'
})) // zamiast handlebars można wpisa c coss innego i potem to jest rozszerzenie do pliku
=======
app.engine('handlebars', expressHbs()) // zamiast handlebars można wpisa c coss innego i potem to jest rozszerzenie do pliku
>>>>>>> a5b4dd7a06a9865f8159ccd8bd099d8d1069ac5d
app.set('view engine', 'handlebars'); // zamiast handlebars można wpisa c coss innego i potem to jest rozszerzenie do pliku
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

<<<<<<< HEAD
app.use(bodyParser.urlencoded({
    extended: false
}));
=======
app.use(bodyParser.urlencoded({extended: false}));
>>>>>>> a5b4dd7a06a9865f8159ccd8bd099d8d1069ac5d
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
<<<<<<< HEAD
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    });
});

app.listen(3000);
=======
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
>>>>>>> a5b4dd7a06a9865f8159ccd8bd099d8d1069ac5d
