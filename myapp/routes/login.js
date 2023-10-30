var express = require('express');
var router = express.Router();
const path = require('path');
const { LoginPerson, sequelize }= require('../loginPerson.js');

/*get metoden henter login.html filen */
router.get('/', function(req, res, next) {
  const filePath = path.join(__dirname, '../public', 'login.html');
  res.sendFile(filePath);
});

/*post metoden sender informationerne fra formen */
router.post('/', function(req, res, next) {
  main(req.body.username, req.body.password);
    res.send('Du har ramt login' + req.body.username + ' ' + req.body.password);
  });

module.exports = router;

async function main(username, password){
  await sequelize.sync({ alter: true });
  const newLoginPerson = LoginPerson.build({ username: username, password:password });
  await newLoginPerson.save();

}