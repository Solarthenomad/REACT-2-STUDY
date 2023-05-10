var express= requie('express');

var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');


var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 5000;
app.listen(port , () => console.log('Listening on port ${port}'))

module.exports = app;