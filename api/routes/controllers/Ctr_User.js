const Token = require('../heplers/token');
// var validate = require('../heplers/validate');
const Mdl_User = require('../models/Mdl_User')


var uuid = require('uuid');
var nanoid = require('nanoid')




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



// DATOS DEL USUARIO
exports.GET_USER_INFO = (req, res) => {
  Mdl_User.get_user_info(req.user.id).then(quote => {
    res.status(200).json(quote[0]);
  })
}

exports.UPDATE_USER_INFO = (req, res) => {
  Mdl_User.put_user_info(req.user.id , req.body  ).then( status => {
    res.status(200).json(status[0]);
  })
}



exports.POST_USER_SPECIAL = (req, res) => {
  Mdl_User.post_user_special(req.user.id,req.body.name ).then( id_special => {
    res.status(200).json(id_special[0]  );
  })
}

exports.GET_USER_SPECIAL = (req, res) => {
  Mdl_User.get_user_special(req.user.id).then(specials => {
    // console.log( 'speciales:' , specials )
    res.status(200).json(specials);
  })
}

exports.DELETE_SPECIAL = (req, res) => { 
  Mdl_User.delete_user_special(req.user.id, req.query.id).then(status => {
    res.status(200).json(status);
  })
}



exports.POST_QUOTE = (req, res) => {
  req.body['f_id_user'] = req.user.id;

  Mdl_User.post_quote(req.body).then(id_quote => {

    if (id_quote) {

      res.status(200).json({
        id_quote: id_quote[0],
      });

    } else {
      res.status(400).json({
        errors: [
          'Error en el registro'
        ]
      });
    }
  })

}
exports.GET_QUOTE = (req, res) => {
  Mdl_User.get_quote(req.user.id, req.query.id_quote).then(quote => {
    res.status(200).json(quote[0]);
  })
}
exports.GET_QUOTES = (req, res) => {
  Mdl_User.get_quotes(req.user.id, req.query.type).then(quotes => {
    res.status(200).json(quotes);
  })
}

exports.DELTE_QUOTE = (req, res) => {
  Mdl_User.delete_quote(req.user.id, req.query.id, req.query.reason ).then(status => {
    res.status(200).json(status);
  })
}



exports.POST_TREATMENT = (req, res) => {

  req.body['f_id_user'] = req.user.id;

  Mdl_User.post_treatment(req.body).then(new_id_treatment => {
    res.status(200).json(new_id_treatment);
  })

}
exports.GET_TREATMENT = (req, res) => {
  Mdl_User.get_treatment(req.user.id, req.query.id_treatment ).then( treatment => {
    res.status(200).json(treatment[0]);
  })
}

exports.GET_TREATMENTS = (req, res) => {
  Mdl_User.get_treatments(req.user.id, req.query.type).then(treatments => {
    res.status(200).json(treatments);
  })
}

exports.DELTE_TREATMENT = (req, res) => {
  Mdl_User.delete_treatment(req.user.id, req.query.id, req.query.reason).then(status => {
    res.status(200).json(status);
  })
}





exports.POST_SINGIN = (req, res) => {
  Mdl_Public.check_email(req.body.email).then(is_registred => {

    if (!is_registred) {

      Mdl_Public.new_user(req.body).then(id_new_user => {

        Mdl_Public.get_user_id(id_new_user).then(user => {
          // console.log( user )
          Token.do_token(user).then(new_token => {

            res.status(200).json({
              token: new_token
            });

          });

        });

      });

    } else {
      res.status(400).json({
        errors: [
          'El usuario ya esta registrado'
        ]
      });
    }
  })
}

exports.GET_PATIENT = (req, res) => {
  // req.body['f_id_user'] = req.user.id;
  Mdl_User.get_patient(req.user.id, req.query.id_patient).then(patient => {

    if (patient) {

      res.status(200).json(patient[0]);

    } else {
      res.status(400).json({
        errors: [
          'Paciente no encontrado '
        ]
      });
    }
  })
}
exports.POST_ADD_PATIENT = (req, res) => {
  req.body['f_id_user'] = req.user.id;
  req.body['uuid'] = nanoid(10);
   
  Mdl_User.add_patient(req.body).then(new_id => {

    if (new_id) {

      res.status(200).json({
        id_patient: new_id
      });

    } else {
      res.status(400).json({
        errors: [
          'Error en el registro'
        ]
      });
    }
  })

}
exports.UPDATE_PATIENT = (req, res) => {
  req.body['f_id_user'] = req.user.id;

  Mdl_User.update_patient(req.body).then(update => {
    if (update) {
      res.status(200).json( update );
    } else {
      res.status(400).json({
        errors: [
          'Error al actualizar '
        ]
      });
    }
  })

}

exports.GET_PATIENTS = (req, res) => {
  // req.body['f_id_user'] = req.user.id;
  Mdl_User.get_patients(req.user.id, req.query.type).then(patients => {
    res.status(200).json(patients);
  })
}

exports.DELETE_PATIENT = (req, res) => {
  // req.body['f_id_user'] = req.user.id;
  Mdl_User.delete_patient(req.user.id, req.query.id).then(status => {
    res.status(200).json(status);
  })
}
exports.DELETE_PATIENT_PERM = (req, res) => {
  // req.body['f_id_user'] = req.user.id;
  Mdl_User.delete_patient_perm(req.user.id, req.query.id).then(status => {
    res.status(200).json(status);
  })
}



exports.GET_PATIENT_TREATMENTS = (req, res) => {
  Mdl_User.get_patient_treatments( req.query.id_patient ).then(treatments => {
    res.status(200).json(treatments);
  })
}

