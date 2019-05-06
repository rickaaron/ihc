const Token = require('../heplers/token');
var validate = require('../heplers/validate');
const Mdl_User = require('../models/Mdl_User')

const bcrypt = require('bcrypt');


var path = require('path');
var uuid = require('uuid');




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

exports.POST_ADD_PATIENT = (req, res) => {
  req.body['f_id_user'] = req.user.id;
  Mdl_User.add_patient(req.body).then( new_id => {

    if ( new_id ) {

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

exports.GET_PATIENT = (req, res) => {
  // req.body['f_id_user'] = req.user.id;
  Mdl_User.get_patient( req.user.id,  req.query.id_patient).then( patient => {

    if ( patient ) {

      res.status(200).json({
        patient
      });

    } else {
      res.status(400).json({
        errors: [
          'Paciente no encontrado '
        ]
      });
    }
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
