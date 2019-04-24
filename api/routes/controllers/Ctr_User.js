const Token = require('../heplers/token.js');
var validate = require('../heplers/validate.js');
const Mdl_User = require('../models/Mdl_User')


const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// var nodemailer = require('nodemailer');
var fs = require('fs');
var formidable = require('formidable');
var path = require('path');
var uuid = require('uuid');
const sharp = require('sharp');

sharp.cache(false);
//Uploads
// const pathImages = path.join(__dirname, '../../uploads/img/lyf');
const Thumbspath = path.join(__dirname, '../../uploads/img/thumbs');
const Temporalpath = path.join(__dirname, '../../uploads/temp');
const Userpath = path.join(__dirname, '../../uploads/users');

exports.TemporalTokenSingin = (idUser, email) => {
  let dateToken = new Date();
  console.log('Doing token ...', dateToken);
  let token = {
    f_id_user: idUser,
    date_creation: dateToken,
    type: 'activation',
    token: uuid.v1(),
  }
  dateToken.setMonth(dateToken.getMonth() + 1);
  token.date_limit = dateToken;
  // token.token = await jwt.sign(token, JWT_Secret, {
  //   expiresIn: (60 * 60 * 24 * 30) // expires in 30 days
  // });
  // console.log(token.token.length);
  Mdl_Login.SaveTokenSingin(token).then((success) => {
    // Send Email
    var mailOptions = {
      from: 'info@niurons.com.mx',
      to: email,
      subject: 'Bienvenido a Niurons !! ',
      html: '<h1>Bienvenido a Niurons</h1><p> Visita el link para activar tu cuenta:</p> ' + ` <p> <a href=" ${  process.env.host + 'Activacion/' + token.token }   "> ${ token.token } </a></p>  `
    }
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });




  }, (error) => {



  })

}

exports.CheckToken = (req, res) => {
  console.log('Checking token ...');
  // console.log(req.body);
  const constraints = {
    token: {
      presence: {
        message: "Falta el Token"
      },
      length: {
        minimum: 10,
        maximum: 300,
        tooShort: "Token: Error",
        tooLong: 'Token: Error'
      }
    },
  };
  validate.async(req.body, constraints).then((success) => {

    // console.log('Token Valido:', success)
    Mdl_Login.GetToken(req.body.token).then(async (info) => {
      Mdl_Login.ActivateUser(info['f_id_user']).then((success) => {
        Mdl_Login.GetUserById(info['f_id_user']).then((user) => {
          Token.DoToken(user).then((newToken) => {
            res.json({
              status: true,
              message: 'Todo salio bien',
              token: newToken,
            })
          }, (error) => {
            res.json({
              status: false,
              type: 'error_login',
              message: error,
            })
          })
        }, (error) => {
          res.json({
            status: false,
            type: 'error_login',
            message: error,
          })
        })

        Mdl_Login.DeleteToken(req.body.token);
      }, (error) => {
        res.json({
          status: false,
          type: 'error_activate',
          message: error,
        })
      })

    }, (errors) => {
      res.json({
        status: false,
        type: 'error_token',
        message: errors,
      })
    })

  }, (errors) => {
    // console.error(errors);
    res.json({
      status: false,
      type: 'error_data',
      message: errors,
    })
  });
}
// --------------------------Image Profile
exports.SaveImage = (idUser, image) => {
  return new Promise(async (resolve, reject) => {
    //Create foldres
    if (!fs.existsSync(Temporalpath)) {
      fs.mkdirSync(Temporalpath);
    }
    if (!fs.existsSync(Userpath)) {
      fs.mkdirSync(Userpath);
    }
    let pathUser = Userpath + `/user-${idUser}`
    if (!fs.existsSync(pathUser)) {
      fs.mkdirSync(pathUser);
    }
    await Mdl_User.GetUserById(idUser).then((user) => {


      let nameImage = 'user-' + idUser + '-' + uuid.v1() + '.png';
      console.log(image);
      sharp(image).resize(1000, 1000).max().toFile(pathUser + `/${nameImage}`).then((newImage) => {
        // console.log('Image 1000 X 1000:', newImage)
        sharp(image).resize(200, 200).max().toFile(Thumbspath + `/${nameImage}`).then((thumb) => {

          Mdl_User.ChangeImagenProfile(idUser, nameImage).then((success) => {
            resolve(true)
          }, (error) => {
            fs.unlinkSync(pathUser + `/${nameImage}`);
            fs.unlinkSync(Thumbspath + `/${nameImage}`);
            reject(error)
          });

          fs.unlinkSync(image);

        }, (errorResize) => {
          reject(errorResize)
        });

      }, (errorResize) => {
        fs.unlinkSync(pathUser + `/${nameImage} `);
        reject(errorResize)
      });

      if (user['img_profile'] != 'default-user.png') {
        fs.unlinkSync(pathUser + `/${user['img_profile']}`);
        fs.unlinkSync(Thumbspath + `/${user['img_profile']}`);
      }
    }, (error) => {
      reject(error)
    })


  });


}
exports.ChangeImageProfile = async (req, res) => {
  console.log('ChangeImageProfile ...');
  // let imgList = [];
  let image = '';
  const form = new formidable.IncomingForm();
  form.maxFieldsSize = 1024 * 5000;
  form.encoding = 'utf-8';
  form.uploadDir = Temporalpath;
  form.keepExtensions = true;
  form.maxFields = 1;
  form.multiples = false;
  // form.keepExtensions = false;
  // form.type = 'png' ;

  form.on('file', async (field, file) => {
    image = file.path;
    console.log('Uploaded ' + file.path);
    // imgsTemp.push();
  });
  form.on('end', async () => {
    //Redimension images
    if (image == '') {
      res.json({
        status: false,
        type: 'error_data',
        message: 'errors',
      })
    } else {

      // MoveTempImageProfile

      this.SaveImage(req.user.id, image).then((success) => {
        Mdl_User.GetUserById(req.user.id).then((user) => {
          Token.DoToken(user).then((newToken) => {
            res.json({
              status: true,
              message: 'Todo salio bien',
              token: newToken,
            })
          }, (error) => {
            res.json({
              status: false,
              type: 'error_login',
              message: 'Imagen guardada, reinicia sesion ',
            })
          })

        }, (error) => {
          res.json({
            status: false,
            type: 'error_login',
            message: 'Imagen guardada, reinicia sesion',
          });

        });

      }, (error) => {
        console.error(error);
        res.json({
          status: false,
          type: 'error_saveimage',
          message: error,
        })
      })

    }

  });

  form.parse(req);


}

// ----------------------About
exports.GetAbout = (req, res) => {
  console.log('Get About ...');
  Mdl_User.GetAbout(req.user.id).then(async (about) => {
    res.json({
      status: true,
      type: 'ok',
      about,
    })
  }, (errors) => {
    res.json({
      status: false,
      type: 'error_about',
      message: errors,
    })
  })
}

exports.UpdateAbout = (req, res) => {
  console.log('Update About ...');
  // console.log(req.body);
  const constraints = {
    description: {
      presence: {
        message: "Falta la descripción"
      },
      length: {
        minimum: 20,
        maximum: 300,
        message: "Descripción: Mínimo 30 caracteres máximo 300."
      }
    },
    skills: {
      presence: {
        message: "Faltan las habilidades"
      },
      length: {
        minimum: 3,
        maximum: 10,
        message: "Habilidades: Mínimo 3 ,máximo 10."
      }
    },
  };

  validate.async(req.body, constraints).then((success) => {
    let About = {
      'f_id_user': req.user.id,
      'laboral_description': success['description'],
      'skills': success['skills'].toString(),
    }
    // console.log('Save About:', About);

    Mdl_User.UpdateAbout(About).then((idAbout) => {
      res.json({
        status: true,
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_about',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

exports.UpdateSocial = (req, res) => {
  console.log('Update Social ...', req.params.social);
  // console.log(req.body);
  const constraints = {
    nickname: {
      presence: {
        message: "Falta el nickname"
      },
      length: {
        minimum: 2,
        maximum: 30,
        message: "Nickname: Mínimo 2 caracteres máximo 30."
      }
    },

  };

  validate.async(req.body, constraints).then((success) => {
    let social = {
      'f_id_user': req.user.id,
    }
    social[req.params.social] = success['nickname'];

    Mdl_User.UpdateSocial(social).then((success) => {
      res.json({
        status: true,
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_about',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

exports.DeleteSocial = (req, res) => {
  // console.log('Delete Social ...', req.query); 
  const constraints = {
    social: {
      presence: {
        message: "Falta la red social"
      },
    },
  };

  validate.async(req.query, constraints).then((success) => {

    let social = {
      'f_id_user': req.user.id,
    }
    social[success.social] = null;
    Mdl_User.DeleteSocial(social).then((success) => {

      res.json({
        status: true,
        message: 'Red Social eliminada.',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_social',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

// -------------------------------HOME
exports.GetHome = (req, res) => {
  console.log('Get Home ...');
  Mdl_User.GetHome(req.user.id).then(async (address) => {
    res.json({
      status: true,
      type: 'ok',
      address,
    })
  }, (errors) => {
    res.json({
      status: false,
      type: 'error_home',
      message: errors,
    })
  })
}

exports.UpdateHome = (req, res) => {
  console.log('Update Home ...', req.body);

  const constraints = {
    country: {
      presence: {
        message: "Falta el pais"
      },
      length: {
        minimum: 3,
        maximum: 50,
        message: "Pais: Mínimo 3 caracteres máximo 50."
      }
    },
    state: {
      presence: {
        message: "Falta el estado"
      },
      length: {
        minimum: 2,
        maximum: 50,
        message: "Estado: Mínimo 2 caracteres máximo 50."
      }
    },
    town: {
      presence: {
        message: "Falta el municipio "
      },
      length: {
        minimum: 2,
        maximum: 50,
        message: "Municipio: Mínimo 2 caracteres máximo 50."
      }
    },
    settlement: {
      presence: {
        message: "Falta la colonia"
      },
      length: {
        minimum: 5,
        maximum: 50,
        message: "Colonia: Mínimo 5 numeros máximo 50 "
      }
    },
    street: {
      presence: {
        message: "Falta la calle"
      },
      length: {
        minimum: 5,
        maximum: 50,
        message: "Calle: Mínimo 5 numeros máximo 50 "
      }
    },
    number: {
      presence: {
        message: "Falta el numero de casa"
      },
      length: {
        minimum: 1,
        maximum: 10,
        message: "Numero: Mínimo 1 numeros máximo 10 "
      }

    },
    cp: {
      presence: {
        message: "Falta el codigo postal"
      },
      numericality: {
        greaterThanOrEqualTo: 1,
        lessThanOrEqualTo: 9999999,
        notLessThanOrEqualTo: "CP: Máximo 9999999 ",
        notGreaterThanOrEqualTo: "CP: Mínimo 1 ",

      },
    },

  };

  validate.async(req.body, constraints).then((success) => {
    console.log(success);
    let home = {
      'f_id_user': req.user.id,
      address: success.street + ' #' + success.number + ',' +
        success.settlement + ',' + success.town + ',' + success.state + ',' + success.country + ',CP: ' + success.cp,
    }

    Mdl_User.UpdateHome(home).then((success) => {
      res.json({
        status: true,
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_home',
        message: error,
      })
    })
  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

exports.DeleteHome = (req, res) => {
  // console.log('Delete Social ...', req.query); 
  const constraints = {
    social: {
      presence: {
        message: "Falta la red social"
      },
    },
  };

  validate.async(req.query, constraints).then((success) => {

    let social = {
      'f_id_user': req.user.id,
    }
    social[success.social] = null;
    Mdl_User.DeleteSocial(social).then((success) => {

      res.json({
        status: true,
        message: 'Red Social eliminada.',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_social',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}
// -------------------------------HOME FISCAL
exports.GetHomeFiscal = (req, res) => {
  console.log('Get Home ...');
  Mdl_User.GetHomeFiscal(req.user.id).then(async (info) => {
    res.json({
      status: true,
      type: 'ok',
      f_address: info['f_address'],
      business_name: info['business_name'],
      rfc: info['rfc'],

    })
  }, (errors) => {
    res.json({
      status: false,
      type: 'error_f_address',
      message: errors,
    })
  })
}

exports.UpdateHomeFiscal = (req, res) => {
  console.log('Update Home Fiscal ...', req.body);

  const constraints = {
    country: {
      presence: {
        message: "Falta el pais"
      },
      length: {
        minimum: 3,
        maximum: 50,
        message: "Pais: Mínimo 3 caracteres máximo 50."
      }
    },
    state: {
      presence: {
        message: "Falta el estado"
      },
      length: {
        minimum: 2,
        maximum: 50,
        message: "Estado: Mínimo 2 caracteres máximo 50."
      }
    },
    town: {
      presence: {
        message: "Falta el municipio "
      },
      length: {
        minimum: 2,
        maximum: 50,
        message: "Municipio: Mínimo 2 caracteres máximo 50."
      }
    },
    settlement: {
      presence: {
        message: "Falta la colonia"
      },
      length: {
        minimum: 5,
        maximum: 50,
        message: "Colonia: Mínimo 5 numeros máximo 50 "
      }
    },
    street: {
      presence: {
        message: "Falta la calle"
      },
      length: {
        minimum: 5,
        maximum: 50,
        message: "Calle: Mínimo 5 numeros máximo 50 "
      }
    },
    number: {
      presence: {
        message: "Falta el numero de casa"
      },
      length: {
        minimum: 1,
        maximum: 10,
        message: "Numero: Mínimo 1 numeros máximo 10 "
      }

    },
    cp: {
      presence: {
        message: "Falta el codigo postal"
      },
      numericality: {
        greaterThanOrEqualTo: 1,
        lessThanOrEqualTo: 9999999,
        notLessThanOrEqualTo: "CP: Máximo 9999999 ",
        notGreaterThanOrEqualTo: "CP: Mínimo 1 ",

      },
    },

  };

  validate.async(req.body, constraints).then((success) => {
    console.log(success);
    let home = {
      'f_id_user': req.user.id,
      address: success.street + ' #' + success.number + ',' +
        success.settlement + ',' + success.town + ',' + success.state + ',' + success.country + ',CP: ' + success.cp,
    }

    Mdl_User.UpdateHomeFiscal(home).then((success) => {
      res.json({
        status: true,
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_home',
        message: error,
      })
    })
  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

exports.DeleteHomeFiscal = (req, res) => {
  // console.log('Delete Social ...', req.query); 
  const constraints = {
    social: {
      presence: {
        message: "Falta la red social"
      },
    },
  };

  validate.async(req.query, constraints).then((success) => {

    let social = {
      'f_id_user': req.user.id,
    }
    social[success.social] = null;
    Mdl_User.DeleteSocial(social).then((success) => {

      res.json({
        status: true,
        message: 'Red Social eliminada.',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_social',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}
exports.UpdateRFC = (req, res) => {
  console.log('Save RFC ...');
  const constraints = {
    rfc: {
      presence: {
        message: "Falta el rfc "
      },
      length: {
        minimum: 2,
        maximum: 30,
        message: "Mínimo 2 caracteres máximo 30."
      }
    }
  };

  validate.async(req.body, constraints).then((success) => {

    let rfc = {
      'f_id_user': req.user.id,
      'rfc': success['rfc'],
    }
    // console.log('Save Language:', language);

    Mdl_User.UpdateRFC(rfc).then((success) => {
      res.json({
        status: true,
        message: 'RFC Cambiado con exito',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_rfc',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

exports.DeleteRFC = (req, res) => {

  let rfc = {
    'f_id_user': req.user.id,
    'rfc': null,
  }
  Mdl_User.UpdateRFC(rfc).then((success) => {
    res.json({
      status: true,
      message: 'RFC eliminado.',
    })
  }, (error) => {
    res.json({
      status: false,
      type: 'error_RFC',
      message: error,
    })
  })

}
exports.UpdateBusinessName = (req, res) => {
  console.log('Update Business Name ...');
  const constraints = {
    business_name: {
      presence: {
        message: "Falta la razon social "
      },
      length: {
        minimum: 2,
        maximum: 30,
        message: "Mínimo 2 caracteres máximo 50."
      }
    }
  };
  validate.async(req.body, constraints).then((success) => {
    let business_name = {
      'f_id_user': req.user.id,
      'business_name': success['business_name'],
    }
    Mdl_User.UpdateBusinessName(business_name).then((success) => {
      res.json({
        status: true,
        message: 'La razon social cambió con exito',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_business_name',
        message: error,
      })
    })
  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}
exports.DeleteBusinessName = (req, res) => {

  let business_name = {
    'f_id_user': req.user.id,
    'business_name': null,
  }
  Mdl_User.UpdateBusinessName(business_name).then((success) => {
    res.json({
      status: true,
      message: 'Razon social eliminado.',
    })
  }, (error) => {
    res.json({
      status: false,
      type: 'error_business_name',
      message: error,
    })
  })

}
// ----------------------------------Password
exports.UpdatePassword = (req, res) => {
  console.log('Update Questions ...', req.body);
  const constraints = {
    pass: {
      presence: {
        message: "Falta la nueva contraseña "
      },
      length: {
        minimum: 8,
        maximum: 50,
        message: "Contraseña: Mínimo 8 caracteres máximo 50."
      }
    },
    pass_repeat: {
      presence: {
        message: "Falta la confirmación de la nueva contraseña "
      },
      length: {
        minimum: 8,
        maximum: 50,
        message: "Confirmación contraseña: Mínimo 8 caracteres máximo 50."
      }
    },
    last_pass: {
      presence: {
        message: "Falta tu contraseña anterior "
      },
      length: {
        minimum: 8,
        maximum: 50,
        message: "Contraseña anterior: Mínimo 8 caracteres máximo 50."
      }
    },

  };

  validate.async(req.body, constraints).then((data) => {

    Mdl_User.GetUserPass(req.user.id).then((password) => {
      console.log(password, data);
      bcrypt.compare(data['last_pass'], password).then((hash, qw) => {
        // console.log( hash,qw ); 
        if (hash) {
          // const new_password = bcrypt.hashSync(data.pass, 10);
          bcrypt.hash(data.pass, 10).then(function (new_password) {
            Mdl_User.UpdatePassword(req.user.id, new_password).then((success) => {
              res.json({
                status: true,
                message: 'Contraseña cambiada correctamente',
              });
            }, (error) => {
              res.json({
                status: false,
                type: 'error_password',
                message: error,
              })
            })
          });

        } else {
          res.json({
            status: false,
            type: 'error_password',
            message: 'La contraseña no coincide',
          });
        }
      });

    }, (error) => {
      res.json({
        status: false,
        type: 'error_password',
        message: error,
      })
    })


  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}



// ----------------------------------- Questions
exports.GetQuestions = (req, res) => {
  console.log('Get Questions ...');
  Mdl_User.GetQuestions(req.user.id).then(async (questions) => {
    res.json({
      status: true,
      type: 'ok',
      questions: questions,
    })
  }, (errors) => {
    res.json({
      status: false,
      type: 'error_questions',
      message: errors,
    })
  })
}

exports.UpdateQuestions = (req, res) => {
  console.log('Update Questions ...');
  const constraints = {
    first_question: {
      presence: {
        message: "Falta la primera pregunta"
      },
      length: {
        minimum: 5,
        maximum: 50,
        message: "Primera pregunta: Mínimo 5 caracteres máximo 50."
      }
    },
    first_answer: {
      presence: {
        message: "Falta la primera respuesta"
      },
      length: {
        minimum: 5,
        maximum: 50,
        message: "Primera respuesta: Mínimo 5 caracteres máximo 50."
      }
    },
    second_question: {
      presence: {
        message: "Falta la segunda pregunta"
      },
      length: {
        minimum: 5,
        maximum: 50,
        message: "Segunda pregunta: Mínimo 5 caracteres máximo 50."
      }
    },
    second_answer: {
      presence: {
        message: "Falta la segunda respuesta"
      },
      length: {
        minimum: 5,
        maximum: 50,
        message: "Segunda respuesta: Mínimo 5 caracteres máximo 50."
      }
    },
  };
  validate.async(req.body, constraints).then((success) => {
    req.body['f_id_user'] = req.user.id;
    Mdl_User.UpdateQuestions(req.body).then((success) => {
      res.json({
        status: true,
        message: 'Preguntas de seguridad actualizadas con exito',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_questions',
        message: error,
      })
    })
  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

// --------------------------------Studies
exports.GetStudies = (req, res) => {
  console.log('Checking Studies ...');
  Mdl_User.Studies(req.user.id).then(async (studies) => {
    res.json({
      status: true,
      type: 'ok',
      studies,
    })
  }, (errors) => {
    res.json({
      status: false,
      type: 'error_studies',
      message: errors,
    })
  })
}

exports.SaveStudie = (req, res) => {
  console.log('Save Studie ...');
  // console.log(req.body);
  const constraints = {
    'id_country': {
      presence: {
        message: "Falta el pais"
      },
    },
    career: {
      presence: {
        message: "Falta la carrera"
      },
      length: {
        minimum: 3,
        maximum: 20,
        message: "Carrera: Mínimo 3 caracteres máximo 20."
      }
    },
    institution: {
      presence: {
        message: "Falta la institución"
      },
      length: {
        minimum: 3,
        maximum: 20,
        message: "Institución: Mínimo 3 caracteres máximo 20."
      }
    },
    document: {
      presence: {
        message: "Falta la cedula"
      },
      length: {
        minimum: 5,
        maximum: 30,
        message: "Dedula: Mínimo 5 numeros máximo 30 "
      }
    },
    'date_egress': {
      presence: {
        message: "Falta la fecha de egreso"
      },
      datetime: {
        dateOnly: false,
        latest: new Date(Date.now()),
        message: 'Selecciona una fecha cuerente'
      }
    }
  };

  validate.async(req.body, constraints).then((success) => {
    let studie = {
      'f_id_user': req.user.id,
      'f_id_country': success['id_country'],
      institution: success.institution,
      career: success.career,
      document: success.document,
      'date_egress': new Date(success['date_egress']),
    }
    console.log('Save Studie:', studie);

    Mdl_User.SaveStudie(studie).then((idStudie) => {
      res.json({
        status: true,
        id: idStudie,
        // type: 'error_generals',
        // message: 'todo bien',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_generals',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}
exports.UpdateStudie = (req, res) => {
  console.log('Update Studie ...');
  // console.log(req.body);
  const constraints = {
    id: {
      presence: {
        message: "Falta el id del estudio"
      },
    },
    'id_country': {
      presence: {
        message: "Falta el pais"
      },
    },
    career: {
      presence: {
        message: "Falta la carrera"
      },
      length: {
        minimum: 3,
        maximum: 20,
        message: "Carrera: Mínimo 3 caracteres máximo 20."
      }
    },
    institution: {
      presence: {
        message: "Falta la institución"
      },
      length: {
        minimum: 3,
        maximum: 20,
        message: "Institución: Mínimo 3 caracteres máximo 20."
      }
    },
    document: {
      presence: {
        message: "Falta la cedula"
      },
      length: {
        minimum: 5,
        maximum: 30,
        message: "Dedula: Mínimo 5 numeros máximo 30 "
      }
    },
    'date_egress': {
      presence: {
        message: "Falta la fecha de egreso"
      },
      datetime: {
        dateOnly: false,
        latest: new Date(Date.now()),
        message: 'Selecciona una fecha cuerente'
      }
    }
  };
  validate.async(req.body, constraints).then((success) => {
    // console.log('Update Generals:', success)
    let studie = {
      'id_studie': success.id,
      'f_id_user': req.user.id,
      'f_id_country': success['id_country'],
      institution: success.institution,
      career: success.career,
      document: success.document,
      'date_egress': new Date(success['date_egress']),
    }

    Mdl_User.UpdateStudie(studie).then((success) => {
      res.json({
        status: true,
        message: 'Edición del estudio con exito',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_generals',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}
exports.DeleteStudie = (req, res) => {
  console.log('Delete Studie ...');
  console.log(req.query);
  const constraints = {
    id: {
      presence: {
        message: "Falta el id del estudio"
      },
    },
  };

  validate.async(req.query, constraints).then((success) => {

    let studie = {
      'f_id_user': req.user.id,
      'id_studie': req.query.id,

    }
    Mdl_User.DeleteStudie(studie).then((success) => {

      res.json({
        status: true,
        message: 'Estudio eliminado.',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_studie',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

// ------------------------------Languages
exports.SaveLanguage = (req, res) => {
  console.log('Save Language ...');
  // console.log(req.body);
  const constraints = {
    'id_language': {
      presence: {
        message: "Falta el idioma"
      },
    },
    'id_reading': {
      presence: {
        message: "Falta el nivel de lectura"
      },
    },
    'id_writing': {
      presence: {
        message: "Falta el nivel de escritura"
      },
    },
    'id_conversational': {
      presence: {
        message: "Falta el nivel de conversación"
      },
    },
  };

  validate.async(req.body, constraints).then((success) => {

    let language = {
      'f_id_user': req.user.id,
      'f_id_language': success['id_language'],
      'f_id_reading': success['id_reading'],
      'f_id_writing': success['id_writing'],
      'f_id_conversational': success['id_conversational'],
    }
    console.log('Save Language:', language);

    Mdl_User.SaveLanguage(language).then((idLanguage) => {
      res.json({
        status: true,
        id: idLanguage,
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_language',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}
exports.GetLanguages = (req, res) => {
  console.log('Get Languages ...');
  Mdl_User.GetLanguages(req.user.id).then(async (languages) => {
    res.json({
      status: true,
      type: 'ok',
      languages,
    })
  }, (errors) => {
    res.json({
      status: false,
      type: 'error_languages',
      message: errors,
    })
  })
}
exports.UpdateLanguage = (req, res) => {
  console.log('Update Language ...');
  // console.log(req.body);
  const constraints = {
    'id': {
      presence: {
        message: "Falta el id del idioma"
      },
    },
    'id_language': {
      presence: {
        message: "Falta el idioma"
      },
    },
    'id_reading': {
      presence: {
        message: "Falta el nivel de lectura"
      },
    },
    'id_writing': {
      presence: {
        message: "Falta el nivel de escritura"
      },
    },
    'id_conversational': {
      presence: {
        message: "Falta el nivel de conversación"
      },
    },
  };
  validate.async(req.body, constraints).then((success) => {
    // console.log('Update Generals:', success)
    let language = {
      'f_id_user': req.user.id,
      'id_language': success['id'],
      'f_id_language': success['id_language'],
      'f_id_reading': success['id_reading'],
      'f_id_writing': success['id_writing'],
      'f_id_conversational': success['id_conversational'],
    }

    Mdl_User.UpdateLanguage(language).then((success) => {
      res.json({
        status: true,
        message: 'Edición del idioma con exito',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_language',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}
exports.DeleteLanguage = (req, res) => {
  console.log('Delete Language ...');
  console.log(req.query);
  const constraints = {
    id: {
      presence: {
        message: "Falta el id del lenguaje"
      },
    },
  };

  validate.async(req.query, constraints).then((success) => {

    let studie = {
      'f_id_user': req.user.id,
      'id_language': req.query.id,

    }
    Mdl_User.DeleteLanguage(studie).then((success) => {

      res.json({
        status: true,
        message: 'Idioma eliminado.',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_language',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}




// ------------------------------Certificate
exports.GetCertificates = (req, res) => {
  console.log('Get Certificates ...');
  Mdl_User.GetCertificates(req.user.id).then(async (certificates) => {
    res.json({
      status: true,
      type: 'ok',
      certificates,
    })
  }, (errors) => {
    res.json({
      status: false,
      type: 'error_certificates',
      message: errors,
    })
  })
}
exports.ChangeImageCertificate = async (req, res) => {
  console.log('Change Image Certificate ...');
  let certificate = {};
  let form = new formidable.IncomingForm();
  // form.maxFieldsSize = 5 * 1024 * 1024;
  form.maxFieldsSize = 5029396;
  form.encoding = 'utf-8';
  form.uploadDir = Temporalpath;
  form.keepExtensions = true;
  form.maxFields = 1;
  form.multiples = false;
  form.on('field', function (name, value) {
    // console.log(name, value);
    certificate[name] = value;
  });

  form.on('file', async (field, file) => {
    certificate.img = file.path;
    certificate.size = file.size;
    // 8 029 396
    if (file.size < 5000000) {
      console.log('Uploaded ' + JSON.stringify(file));
    } else {
      console.log('Imagen demasiado pesada')
    }

  });
  form.on('error', function (error) {
    console.log('Error Upload file :', error)
  });

  form.on('end', async () => {
    const constraints = {
      id: {
        presence: {
          message: "Falta el id del certificado"
        },
      },
      img: {
        presence: {
          message: "Falta la imagen"
        },
      },
      size: {
        numericality: {
          lessThanOrEqualTo: 5000000,
          notLessThanOrEqualTo: ' La imagen es demasiado grande '
        }
      }
    };
    validate.async(certificate, constraints).then((success) => {
      console.log('Certificado:', success);

      Mdl_User.GetCertificate(req.user.id, certificate.id).then((certInfo) => {

        // console.log('Certificado:', certInfo);
        Files.UpdateCertificate(req.user.id, certificate.img).then((newImage) => {

          Mdl_User.UpdateImageCertificate(req.user.id, certificate.id, newImage).then((success) => {
            res.json({
              status: true,
              message: ' Imagen del certificado actualizado.',
              image: newImage,
            })
          }, (error) => {
            res.json({
              status: false,
              type: 'error_certificate_database',
              message: error,
            })
          })

          Files.DeleteCertificate(req.user.id, certInfo.img);


        }, (error) => {
          res.json({
            status: false,
            type: 'error_certificate_images',
            message: error,
          })
        })

      }, (error) => {
        res.json({
          status: false,
          type: 'error_certificate',
          message: error,
        })
      })


    }, (error) => {
      res.json({
        status: false,
        type: 'error_data',
        message: error,
      })
      Files.DeleteTemp(certificate.img);
    });



  });

  form.parse(req);



}
exports.DeleteCertificate = (req, res) => {
  console.log('Delete Certificate ...');
  console.log(req.query);
  const constraints = {
    id: {
      presence: {
        message: "Falta el id del certificado"
      },
    },
  };

  validate.async(req.query, constraints).then((success) => {

    let certificate = {
      'f_id_user': req.user.id,
      'id_certificate': req.query.id,
    }

    Mdl_User.GetCertificate(req.user.id, req.query.id).then((cert) => {
      console.log('Certificado:', cert);
      Files.DeleteCertificate(req.user.id, cert.img).then((success) => {

        Mdl_User.DeleteCertificate(certificate).then((success) => {
          res.json({
            status: true,
            message: ' Certificado eliminado.',
          })
        }, (error) => {
          res.json({
            status: false,
            type: 'error_certificate_database',
            message: error,
          })
        })

      }, (error) => {
        res.json({
          status: false,
          type: 'error_certificate_images',
          message: error,
        })
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_certificate',
        message: error,
      })
    })


  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

exports.SaveCertificate = async (req, res) => {
  console.log('Save Certificate ...');
  // let imgList = [];
  // let image = '';
  let certificate = {};
  const form = new formidable.IncomingForm();
  // form.maxFieldsSize = 5 * 1024 * 1024;
  form.maxFieldsSize = 5029396;
  form.encoding = 'utf-8';
  form.uploadDir = Temporalpath;
  form.keepExtensions = true;
  form.maxFields = 1;
  form.multiples = false;
  form.on('field', function (name, value) {
    // console.log(name, value);
    certificate[name] = value;
  });
  form.on('file', async (field, file) => {

    certificate.img = file.path;
    certificate.size = file.size;

    if (file.size < 5000000) {
      console.log('Uploaded ' + JSON.stringify(file));
    } else {
      console.log('Imagen demasiado pesada')
    }
  });
  form.on('error', function (error) {
    console.log('Error Upload file :', error)
  });

  form.on('end', async () => {
    //Redimension images
    // validate certificate
    const constraints = {
      name: {
        presence: {
          message: "Falta el pais"
        },
      },
      institution: {
        presence: {
          message: "Falta la carrera"
        },
        length: {
          minimum: 3,
          maximum: 20,
          message: "Carrera: Mínimo 3 caracteres máximo 20."
        }
      },
      'date_egress': {
        presence: {
          message: "Falta la fecha de egreso"
        },
        datetime: {
          dateOnly: false,
          latest: new Date(Date.now()),
          message: 'Selecciona una fecha cuerente'
        }
      },
      img: {
        presence: {
          message: "Falta la imagen"
        },
      },
      size: {
        numericality: {
          lessThanOrEqualTo: 5000000,
          notLessThanOrEqualTo: ' La imagen es demasiado grande '
        }
      }
    };

    validate.async(certificate, constraints).then((success) => {
      certificate.date_egress = new Date(certificate.date_egress);
      certificate['f_id_user'] = req.user.id;
      // console.log('Save Certificate:', certificate)
      Files.SaveCertificate(req.user.id, certificate.img).then((image) => {
        certificate.img = image;
        delete certificate.size;

        Mdl_User.SaveCertificate(certificate).then((idCert) => {

          res.json({
            status: true,
            id: idCert,
            image: image,
          })
        }, (error) => {
          Files.DeleteCertificate(image);
          res.json({
            status: false,
            type: 'error_save_certificate',
            message: error,
          })
        });


      }, (error) => {
        res.json({
          status: false,
          type: 'error_move_image',
          message: error,
        })
      })

    }, (error) => {
      Files.DeleteTemp(certificate.img);
      res.json({
        status: false,
        type: 'error_data',
        message: error,
      })
    });
  });

  form.parse(req);


}

exports.UpdateCertificate = (req, res) => {
  console.log('Update Certificate ...');
  const constraints = {
    id: {
      presence: {
        message: "Falta el id del certificado"
      },
    },
    name: {
      presence: {
        message: "Falta el pais"
      },
    },
    institution: {
      presence: {
        message: "Falta la carrera"
      },
      length: {
        minimum: 3,
        maximum: 20,
        message: "Carrera: Mínimo 3 caracteres máximo 20."
      }
    },
    'date_egress': {
      presence: {
        message: "Falta la fecha de egreso"
      },
      datetime: {
        dateOnly: false,
        latest: new Date(Date.now()),
        message: 'Selecciona una fecha cuerente'
      }
    },
  };
  validate.async(req.body, constraints).then((success) => {

    console.log('Update Generals:', success)
    let certificate = {
      'f_id_user': req.user.id,
      'id_certificate': success['id'],
      'name': success['name'],
      'institution': success['institution'],
      'date_egress': new Date(success['date_egress']),
    }
    Mdl_User.UpdateCertificate(certificate).then((success) => {
      res.json({
        status: true,
        message: 'Edición del certificado con exito',
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_certificate',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}

// ------------------------------Generals
exports.ChangeNickname = (req, res) => {
  console.log('ChangeNickname ...');
  // console.log(req.body);
  const constraints = {
    nickname: {
      presence: {
        message: "Escribe un Nickname valido"
      },
      length: {
        minimum: 5,
        maximum: 15,
        message: " Mínimo 5 imagen máximo 15 "
      }
    }
  };
  validate.async(req.body, constraints).then((success) => {
    console.log('Nickname Valido:', success)
    Mdl_User.GetNickname(req.body.nickname).then((success) => {

      Mdl_User.PutNickname(req.user.id, req.body.nickname).then((success) => {

        Token.GetTokenById(req.user.id).then((newToken) => {

          res.json({
            status: true,
            message: 'Nickname cambiado con exito.',
            token: newToken,
          })

        }, (error) => {
          res.json({
            status: false,
            type: 'error_getNewToken',
            message: 'Nickname cambiado, reinicia sesion ',
          })
        })

      }, (error) => {
        res.json({
          status: false,
          type: 'error_nickname',
          message: error,
        })
      });

    }, (error) => {
      res.json({
        status: false,
        type: 'error_nickname',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}
exports.UpdateGenerals = (req, res) => {
  console.log('Update Generals ...');
  // console.log(req.body);
  const constraints = {
    name: {
      presence: {
        message: "Escribe un nombre valido"
      },
      length: {
        minimum: 3,
        maximum: 15,
        message: "Nombre: Mínimo 3 caracteres máximo 15 "
      }
    },
    lastname: {
      presence: {
        message: "Escribe un apellido valido"
      },
      length: {
        minimum: 3,
        maximum: 15,
        message: "Apellido: Mínimo 3 caracteres máximo 15 "
      }
    },
    phone: {
      presence: {
        message: "Escribe un telefono valido"
      },
      length: {
        minimum: 8,
        maximum: 10,
        message: "Telefono: Mínimo 8 numeros máximo 10 "
      }
    },
    mobile: {
      presence: {
        message: "Escribe un celular valido"
      },
      length: {
        minimum: 8,
        maximum: 10,
        message: "Celular: Mínimo 8 numeros máximo 10 "
      }
    }
  };

  validate.async(req.body, constraints).then((success) => {
    // console.log('Update Generals:', success)

    Mdl_User.PutGenerals(req.user.id, success).then((success) => {

      Token.GetTokenById(req.user.id).then((newToken) => {

        res.json({
          status: true,
          message: 'Generales cambiados con exito.',
          token: newToken,
        })

      }, (error) => {
        res.json({
          status: false,
          type: 'error_getNewToken',
          message: 'Nickname cambiado, reinicia sesion ',
        })
      })
    }, (error) => {
      res.json({
        status: false,
        type: 'error_generals',
        message: error,
      })
    })

  }, (error) => {
    res.json({
      status: false,
      type: 'error_data',
      message: error,
    })
  });
}
// ------------------------------Seller

exports.BeSeller = (req, res) => {
  console.log('Be Seller ...', req.body);

  if (!req.user.seller) {

    if (req.body.terms == true) {

      Mdl_User.BeSeller(req.user.id).then((success) => {

        Token.GetTokenById(req.user.id).then((newToken) => {
          res.json({
            status: true,
            message: 'Ahora eres vendedor.',
            token: newToken,
          })

        }, (error) => {
          res.json({
            status: false,
            type: 'error_be_seller',
            message: 'Ya eres vendedor , reinicia sesion ',
          })
        })
      }, (error) => {
        res.json({
          status: false,
          type: 'error_be_seller',
          message: error,
        })
      })
    } else {
      res.json({
        status: false,
        type: 'error_data',
        message: ['Acepta los terminos y condiciones'],
      })
    }
  } else {
    res.json({
      status: false,
      type: 'error_data',
      message: ['Tu ya eres vendedor'],
    })
  }



}
