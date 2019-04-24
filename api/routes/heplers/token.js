const mysql = require('./database');
const jwt = require('jsonwebtoken');

exports.do_token = (data) => {
  return new Promise((resolve, reject) => {
    let token = jwt.sign({
      id: data['id_user'], 
      name: data['name'],
      lastname: data['lastname'],  
      email: data['email'], 
      phone: data['phone'],
      mobile: data['mobile'],
      date: data['date_register'],
    }, process.env.jwt_secret, {
      expiresIn: 12000 // expires in 24 hours
    });
    resolve(token);
  });
}

 
 