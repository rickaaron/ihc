const mysql = require('./database');
const jwt = require('jsonwebtoken');

exports.DoToken = (data) => {
  return new Promise((resolve, reject) => {
    let myToken = jwt.sign({
      id: data['id_user'],
      seller: data['is_seller'],
      name: data['name'],
      lastname: data['lastname'],
      nickname: data['nickname'],
      img: data['img_profile'],
      email: data['email'],
      email2: data['email_secondary'],
      phone: data['phone'],
      mobile: data['mobile'],
      date: data['date_register'],
    }, process.env.jwt_secret, {
      expiresIn: 12000 // expires in 24 hours
    });
    resolve(myToken);
  });
}

exports.GetTokenById = (idUSer) => {
  return new Promise((resolve, reject) => {
    this.GetUserById(idUSer).then((user) => {
      this.DoToken(user).then((token) => {
        resolve(token);
      }, (error) => {
        reject(error);
      })
    }, (error) => {
      reject(error);
    });

  });
}


exports.GetUserById = (idUser) => {
  return new Promise((resolve, reject) => {
    mysql.select({
      table: 't_dat_user',
      conditions: {
        'id_user': idUser
      },
      limit: 1,
      show_query: false
    }, async (err, result) => {
      if (err) reject('Error al Iniciar sesion , intenta mas tarde ');
      if (result.length > 0) {
        resolve(result[0]);
      } else {
        reject('Usuario no encontrado');
      }
    });
  });
}
