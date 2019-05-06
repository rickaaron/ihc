const knex = require('../heplers/database');
const bcrypt = require('bcrypt');





exports.add_patient = (data) => {
  return knex('t_dat_patients').insert(data).then((new_id_patient) => {
    console.log(new_id_patient);
    return new_id_patient[0];
  })
}


exports.get_patient = (f_id_user, id_patient) => {

  return knex.select('*').from('t_dat_patients').where({
    f_id_user,
    id_patient,
  }).limit(1).then((row) => {
    console.log(row[0]);
    return row[0];
  })
}












///////////////////////////////////////////////////////////////OTROS

exports.Login = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    mysql.select({
      table: 't_dat_user',
      conditions: {
        email: email
      },
      limit: 1,
      show_query: true
    }, async (err, result) => {
      if (err) reject(err);
      if (result) {
        if (result.length > 0) {
          // console.log(result);
          if (await this.checkUser(password, result[0]['password'])) {
            resolve({
              status: true,
              message: 'Sesion iniciada correctamente',
              token: await this.token(result[0]),
            });
          } else {
            resolve({
              status: false,
              message: 'Correo y/o contraseña incorrectos.'
            });
          }
        } else {
          resolve({
            status: false,
            message: 'El correo no esta registrado.'
          });
        }
      } else {
        resolve({
          status: false,
          message: 'El correo no esta registrado.'
        });
      }
    });
  });
}

exports.checkUser = async (password, passwordHash) => {
  const match = await bcrypt.compare(password, passwordHash);
  console.log(match);
  return match;

}

exports.GetUser = (email) => {

  return new Promise(async (resolve, reject) => {

    mysql.select({
      table: 't_dat_user',
      conditions: {
        email: email,
        // is_active: 1,
      },
      limit: 1,
      show_query: false
    }, (err, result) => {
      console.log(result);
      if (err) reject('Error al verificar el Email, intenta mas tarde');
      if (result.length > 0) {
        resolve(result[0]);
      } else {
        reject('El usuario no esta registrado');
      }
    });

  });
}

exports.CheckEmail = (email) => {

  return new Promise(async (resolve, reject) => {

    mysql.select({
      table: 't_dat_user',
      conditions: {
        email: email
      },
      limit: 1,
      show_query: false
    }, (err, result) => {
      if (err) reject('Error al verificar el Email, intenta mas tarde');
      // console.log('User', result);
      // if(  result == null  ) throw "Error en la base de datos - intenta mas tarde";
      if (result.length > 0) {
        reject('El usuario ya esta registrado ');
      } else {
        resolve(true);
      }
    });

  });
}

exports.SaveNewUser = (name, lastName, email, password) => {
  return new Promise((resolve, reject) => {
    mysql.insert({
      table: 't_dat_user',
      details: {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        date_register: new Date(),
      },
      show_query: true
    }, (err, result, inserted_id) => {
      if (err) {
        console.log(err);
        reject('Error al guardar , intenta mas tarde');
      }
      // console.log('ID user', inserted_id);
      resolve(inserted_id);
    });
  });
}

// Login
exports.GetUserById = async (idUser) => {
  return new Promise(async (resolve, reject) => {
    mysql.select({
      table: 't_dat_user',
      conditions: {
        'id_user': idUser
      },
      limit: 1,
      show_query: false
    }, async (err, result) => {
      if (err) reject('Error al Iniciar sesion , , intenta mas tarde ');
      if (result.length > 0) {
        resolve(result[0]);
      } else {
        reject('Usuario no encontrado');
      }
    });
  });
}
exports.GetUserPass = async (idUser) => {
  return new Promise(async (resolve, reject) => {
    mysql.select({
      table: 't_dat_user',
      fields: ['password'],
      conditions: {
        'id_user': idUser
      },
      limit: 1,
      show_query: false
    }, async (err, result) => {
      if (err) reject('Error al verificar la contraseña , intenta mas tarde ');
      if (result.length > 0) {
        resolve(result[0]['password']);
      } else {
        reject('Usuario no encontrado');
      }
    });
  });
}
//Nickanme
exports.GetNickname = (nickname) => {
  return new Promise((resolve, reject) => {
    mysql.select({
      table: 't_dat_user',
      conditions: {
        nickname,
      },
      limit: 1,
      show_query: false
    }, (err, result) => {
      // console.log(result);
      if (err) reject('Error al verificar el Nickanme, intenta mas tarde');
      if (result.length > 0) {
        reject('El nickname no disponible');
      } else {
        resolve(true);
      }
    });

  });
}
exports.PutNickname = (idUser, nickname) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user',
      details: {
        'nickname': nickname,
      },
      conditions: {
        'id_user': idUser,
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar nickname, intenta mas tarde ');
      // console.log('Cuentas activadas : ', nrows)
      if (nrows == 1) {
        resolve(true);
      } else {
        reject(' Error al actualizar nickname, usuario no encontrado ');
      }
    });

  });
}
// ------------------------UPDATE

// Generals
exports.BeSeller = (idUser) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user',
      details: {
        'is_seller': 1,
      },
      conditions: {
        'id_user': idUser,
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al convertir en vendedor, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject('Sin cambios');
      }
    });

  });
}
exports.PutGenerals = (idUser, generals) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user',
      details: generals,
      conditions: {
        'id_user': idUser,
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar generales, intenta mas tarde ');
      // console.log('Cuentas activadas : ', nrows)
      if (nrows == 1) {
        resolve(true);
      } else {
        reject('Sin cambios');
        // resolve(true);
      }
    });

  });
}
exports.UpdateStudie = (studie) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_studies',
      details: studie,
      conditions: {
        'id_studie': studie['id_studie'],
      },
      limit: 1,
      show_query: true,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar estudio, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject(' No hubo cambios ');
      }
    });

  });
}

exports.UpdateLanguage = (language) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_languages',
      details: language,
      conditions: {
        'id_language': language['id_language'],
      },
      limit: 1,
      show_query: true,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar lenguaje, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject(' No hubo cambios ');
      }
    });

  });
}


exports.UpdateCertificate = (certificate) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_certificates',
      details: certificate,
      conditions: {
        'f_id_user': certificate['f_id_user'],
        'id_certificate': certificate['id_certificate'],
      },
      limit: 1,
      show_query: true,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar certificado, intenta mas tarde ');
      console.log(err);
      if (nrows == 1) {
        resolve(true);
      } else {
        reject(' No hubo cambios ');
      }
    });

  });
}




// ---------------GET

// Home
exports.GetHome = (idUser) => {
  return new Promise((resolve, reject) => {
    mysql.select({
      table: 'v_cat_user_details',
      fields: ['address'],
      conditions: {
        'id_user': idUser,
      },
      limit: 1,
      show_query: false
    }, (err, result) => {
      // console.log(result);
      if (err) reject('Error al verificar la direccion, intenta mas tarde');
      if (result.length > 0) {
        resolve(result[0]['address']);
      } else {
        reject(' Aun no tiene dirección ');
      }
    });

  });
}
exports.GetHomeFiscal = (idUser) => {

  return new Promise((resolve, reject) => {

    mysql.select({
      table: 'v_cat_user_details',
      fields: ['f_address', 'rfc', 'business_name'],
      conditions: {
        'id_user': idUser,
      },
      limit: 1,
      show_query: false
    }, (err, result) => {
      // console.log(result);
      if (err) reject('Error al verificar la dirección fiscal, intenta mas tarde');
      if (result.length > 0) {
        resolve(result[0]);
      } else {
        reject(' Aun no tiene dirección fiscal ');
      }
    });

  });
}
