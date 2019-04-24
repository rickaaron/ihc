const knex = require('../heplers/database');
// const bcrypt = require('bcrypt');

exports.check_email = (email) => {
  return knex.select().from('t_dat_users').where('email', email).limit(1).then((rows) => {
    if (rows.length > 0) {
      return true;
    } else {
      return false;
    }
  })
}

exports.new_user = ({
  name,
  email,
  password
}) => {
  return knex('t_dat_users').insert({
    name,
    email,
    password
  }).then((rows) => {
    console.log(rows);
    return rows;
    if (rows.length > 0) {
      return true;
    } else {
      return false;
    }
  })

}



exports.get_user_id = (id) => {
  return knex.select().from('t_dat_users').where('id_user', id).limit(1).then((rows) => {
    return rows[0];
  })
}

exports.login = (email, password) => {
  return knex.select().from('t_dat_users').where('email', email).andWhere('password', password).limit(1).then((rows) => {
    return rows;
  })
}


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
exports.GetQuestions = (idUser) => {

  return new Promise((resolve, reject) => {

    mysql.select({
      table: 'v_cat_user_details',
      fields: ['first_answer', 'first_question', 'second_answer', 'second_question'],

      conditions: {
        'id_user': idUser,
      },
      limit: 1,
      show_query: false
    }, (err, result) => {
      // console.log(result);
      if (err) reject('Error al traer las preguntas, intenta mas tarde');
      if (result.length > 0) {
        resolve(result[0]);
      } else {
        reject(' Aun no tiene preguntas ');
      }
    });

  });
}
exports.GetAbout = (idUser) => {
  return new Promise((resolve, reject) => {
    mysql.select({
      table: 'v_cat_user_details',
      fields: ['id', 'id_user', 'description', 'skills', 'facebook', 'google', 'linkedin', 'twitter'],
      // twitter  
      conditions: {
        'id_user': idUser,
      },
      limit: 1,
      show_query: true
    }, (err, result) => {
      console.log(result);
      if (err) reject('Error al verificar la descripción , intenta mas tarde');
      resolve(result[0]);

    });

  });
}

exports.Studies = (idUser) => {
  return new Promise((resolve, reject) => {
    mysql.select({
      table: 'v_cat_user_studies',
      conditions: {
        'id_user': idUser,
      },
      // limit: 1,
      show_query: false
    }, (err, result) => {
      // console.log(result);
      if (err) reject('Error al verificar los estudios , intenta mas tarde');
      resolve(result);

    });

  });
}

exports.GetCertificates = (idUser) => {
  return new Promise((resolve, reject) => {
    mysql.select({
      table: 'v_cat_user_certificates',
      conditions: {
        'id_user': idUser,
      },
      // limit: 1,
      show_query: false
    }, (err, result) => {
      if (err) reject('Error al verificar los certificados , intenta mas tarde');
      resolve(result);

    });

  });
}
exports.GetLanguages = (idUser) => {
  return new Promise((resolve, reject) => {
    mysql.select({
      table: 'v_dat_user_languages',
      conditions: {
        'id_user': idUser,
      },
      // limit: 1,
      show_query: false
    }, (err, result) => {
      if (err) reject('Error al verificar los lenguajes , intenta mas tarde');
      resolve(result);

    });

  });
}
/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`
 SQL SECURITY DEFINER VIEW `v_idiomas` AS select `t_dat_idiomas`.`id_idioma_usuario` AS `id`,`t_dat_idiomas`.`f_id_usuario` AS `id_usuario`,
 `t_dat_idiomas`.`f_id_idioma` AS `id_idioma`,`t_cat_idiomas`.`Idioma` AS `Idioma`,
 (select `t_cat_niveles`.`Nivel` from `t_cat_niveles` where (`t_dat_idiomas`.`Lectura` = `t_cat_niveles`.`id_nivel`)) AS `Lectura`,
 (select `t_cat_niveles`.`Nivel` from `t_cat_niveles` where (`t_dat_idiomas`.`Escritura` = `t_cat_niveles`.`id_nivel`)) AS `Escritura`,
 (select `t_cat_niveles`.`Nivel` from `t_cat_niveles` where (`t_dat_idiomas`.`Conversasional` = `t_cat_niveles`.`id_nivel`)) AS `Conversasional` 
 from (`t_dat_idiomas` left join `t_cat_idiomas` on((`t_dat_idiomas`.`f_id_idioma` = `t_cat_idiomas`.`id_idioma`))) 
 order by `t_dat_idiomas`.`id_idioma_usuario` */


exports.GetCertificate = (idUser, idCert) => {
  return new Promise((resolve, reject) => {
    mysql.select({
      table: 'v_cat_user_certificates',
      conditions: {
        'id': idCert,
        'id_user': idUser,
      },
      // limit: 1,
      show_query: false
    }, (err, result) => {
      if (err) reject('Error al verificar los certificados , intenta mas tarde');
      if (result.length > 0) {

        resolve(result[0]);
      } else {
        reject('El certificado ya no existe')
      }

    });

  });
}
// ---------------Save
exports.UpdateAbout = (about) => {
  return new Promise((resolve, reject) => {
    mysql.update({

      table: 't_dat_user_details',
      details: about,
      conditions: {
        'f_id_user': about['f_id_user'],
      },
      limit: 1,
      show_query: true,

    }, (error, result, nrows) => {
      if (error) {
        console.log(error);

        reject(' Error al actualizar la descripción, intenta mas tarde ');
      }
      if (nrows == 1) {
        resolve(true);
      } else {
        reject('Error al actualizar la descripción, usuario no encontrado ');
      }

    });
  });
}

exports.UpdatePassword = (id_user, new_pass) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user',
      details: {
        'password': new_pass,
      },
      conditions: {
        'id_user': id_user,
      },
      limit: 1,
      show_query: false,

    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar la contraseña, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject('Error al actualizar la contraseña, usuario no encontrado ');
      }

    });
  });
}
exports.UpdateQuestions = (question) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_questions',
      details: question,
      conditions: {
        'f_id_user': question['f_id_user'],
      },
      limit: 1,
      show_query: false,

    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar las preguntas, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject('Error al actualizar las preguntas, usuario no encontrado ');
      }

    });
  });
}
exports.UpdateSocial = (facebook) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_social_media',
      details: facebook,
      conditions: {
        'f_id_user': facebook['f_id_user'],
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar facebook, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject('Error al actualizar facebook, usuario no encontrado ');
      }

    });
  });
}
exports.UpdateHome = (home) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_details',
      details: home,
      conditions: {
        'f_id_user': home['f_id_user'],
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar domicilio , intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject('Error al actualizar domicilio, usuario no encontrado ');
      }

    });
  });
}

exports.UpdateHomeFiscal = (home) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_fiscal',
      details: home,
      conditions: {
        'f_id_user': home['f_id_user'],
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar domicilio fiscal , intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject('Error al actualizar domicilio fiscal, usuario no encontrado ');
      }

    });
  });
}
exports.UpdateRFC = (RFC) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_fiscal',
      details: RFC,
      conditions: {
        'f_id_user': RFC['f_id_user'],
      },
      limit: 1,
      show_query: true,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar el RFC, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject(' No hubo cambios en el RFC');
      }
    });

  });
}
exports.UpdateBusinessName = (businessName) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_fiscal',
      details: businessName,
      conditions: {
        'f_id_user': businessName['f_id_user'],
      },
      limit: 1,
      show_query: true,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar la razon social, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject(' No hubo cambios en la razon social');
      }
    });

  });
}

exports.SaveStudie = (studie) => {
  return new Promise((resolve, reject) => {
    mysql.insert({
      table: 't_dat_user_studies',
      details: studie,
      // show_query: true
    }, (err, result, inserted_id) => {
      if (err) {
        console.log(err);
        reject('Error al guardar token');
      }
      console.log('ID Studie:', inserted_id);
      resolve(inserted_id);
    });
  });
}

exports.SaveLanguage = (language) => {
  return new Promise((resolve, reject) => {
    mysql.insert({
      table: 't_dat_user_languages',
      details: language,
      // show_query: true
    }, (err, result, inserted_id) => {
      if (err) {
        console.log(err);
        reject('Error al guardar lenguaje');
      }
      console.log('id lenguaje:', inserted_id);
      resolve(inserted_id);
    });
  });
}

exports.SaveCertificate = (certificate) => {
  return new Promise((resolve, reject) => {
    mysql.insert({
      table: 't_dat_user_certificates',
      details: certificate,
      // show_query: true
    }, (err, result, inserted_id) => {
      if (err) {
        console.log(err);
        reject('Error al guardar certificacion');
      }
      console.log('id certificacion:', inserted_id);
      resolve(inserted_id);
    });
  });
}

// TOKEN
exports.SaveTokenSingin = (token) => {
  return new Promise((resolve, reject) => {
    mysql.insert({
      table: 't_dat_token',
      details: token,
      show_query: true
    }, (err, result, inserted_id) => {
      if (err) {
        console.log(err);
        reject('Error al guardar token');
      }
      console.log('ID TOKEN ', inserted_id);
      resolve(inserted_id);
    });
  });
}

exports.GetToken = (token) => {
  return new Promise((resolve, reject) => {
    mysql.select({
      table: 't_dat_token',
      conditions: {
        token,
      },
      limit: 1,
      show_query: false
    }, (err, result) => {
      // console.log(result);
      if (err) reject('Error al verificar el Token, intenta mas tarde');
      if (result.length > 0) {
        resolve(result[0]);
      } else {
        reject('El token no existe');
      }
    });

  });
}

exports.ActivateUser = (idUser) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user',
      details: {
        'is_active': '1',
      },
      conditions: {
        'id_user': idUser,
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al Activar la cuenta, intenta mas tarde ');
      // console.log('Cuentas activadas : ', nrows)
      if (nrows == 1) {
        resolve(true);
      } else {
        reject(' Error al Activar la cuenta, usuario no encontrado ');
      }
    });

  });

}

exports.UpdateImageCertificate = (idUser, idCert, image) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_certificates',
      details: {
        'img': image,
      },
      conditions: {
        'id_certificate': idCert,
        'f_id_user': idUser,
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar la imagen del certificado, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject('Error al actualizar la imagen del certificado, usuario no encontrado ');
      }
    });

  });

}
exports.ChangeImagenProfile = (idUser, imgName) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user',
      details: {
        'img_profile': imgName,
      },
      conditions: {
        'id_user': idUser,
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al actualizar la imagen de perfil, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject(' Error al actualizar la imagen de perfil, usuario no encontrado ');
      }
    });

  });

}

// --------------------DELETE
exports.DeleteSocial = (social) => {
  return new Promise((resolve, reject) => {
    mysql.update({
      table: 't_dat_user_social_media',
      details: social,
      conditions: {
        'f_id_user': social['f_id_user'],
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      if (err) reject(' Error al eliminar la red social, intenta mas tarde ');
      if (nrows == 1) {
        resolve(true);
      } else {
        reject(' Error al eliminar la red social, usuario no encontrado ');
      }
    });

  });
}


exports.DeleteStudie = (studie) => {
  return new Promise((resolve, reject) => {
    mysql.delete({
      table: 't_dat_user_studies',
      conditions: studie,
      limit: 1,
      show_query: true,
    }, (err, result, nrows) => {
      // console.log(result);
      if (err) reject('Error al eliminar el estudio, intenta mas tarde');
      if (nrows > 0) {
        resolve(true);
      } else {
        reject('El estudio ya no existe');
      }
    });

  });
}
exports.DeleteCertificate = (certificate) => {
  return new Promise((resolve, reject) => {
    mysql.delete({
      table: 't_dat_user_certificates',
      conditions: certificate,
      limit: 1,
      show_query: true,
    }, (err, result, nrows) => {
      // console.log(result);
      if (err) reject('Error al eliminar el certificado, intenta mas tarde');
      if (nrows > 0) {
        resolve(true);
      } else {
        reject('El certificado ya no existe');
      }
    });

  });
}

exports.DeleteLanguage = (language) => {
  return new Promise((resolve, reject) => {
    mysql.delete({
      table: 't_dat_user_languages',
      conditions: language,
      limit: 1,
      show_query: true,
    }, (err, result, nrows) => {
      // console.log(result);
      if (err) reject('Error al eliminar el idioma, intenta mas tarde');
      if (nrows > 0) {
        resolve(true);
      } else {
        reject('El idioma ya no existe');
      }
    });

  });
}

exports.DeleteToken = (token) => {
  return new Promise((resolve, reject) => {
    mysql.delete({
      table: 't_dat_token',
      conditions: {
        token: token,
      },
      limit: 1,
      show_query: false,
    }, (err, result, nrows) => {
      // console.log(result);
      if (err) reject('Error al eliminar el Token, intenta mas tarde');
      if (nrows > 0) {
        resolve(true);
      } else {
        reject('El token no se a eliminado');
      }
    });

  });
}
