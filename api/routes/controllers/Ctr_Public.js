// var validate = require('../heplers/validate.js');
const Token = require('../heplers/token.js');
const Mdl_Public = require('../models/Mdl_Public')


// const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');
// // var nodemailer = require('nodemailer');
// var fs = require('fs');
// var formidable = require('formidable');
// var path = require('path');
// var uuid = require('uuid');
// const sharp = require('sharp');

// sharp.cache(false);
//Uploads
// const pathImages = path.join(__dirname, '../../uploads/img/lyf');
// const Thumbspath = path.join(__dirname, '../../uploads/img/thumbs');
// const Temporalpath = path.join(__dirname, '../../uploads/temp');
// const Userpath = path.join(__dirname, '../../uploads/users');

exports.GET_HOME = (req, res) => {
  res.json(' HOla desde la api');
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


exports.POST_LOGIN = (req, res) => {
  Mdl_Public.check_email(req.body.email).then(is_registred => {

    if (is_registred) {

      Mdl_Public.login(req.body.email, req.body.password).then(user => {
        // console.log( user )

        if (user.length > 0) {
          Token.do_token(user[0]).then(new_token => {
            res.status(200).json({
              token: new_token
            });
          });
        } else {
          res.status(400).json({
            errors: [
              'Email o contra equivocados '
            ]
          });
        }
      });


    } else {
      res.status(400).json({
        errors: [
          'Email o contra equivocados'
        ]
      });
    }
  })
}


exports.GET_PATIENT = (req, res) => {

  Mdl_Public.get_patient(req.query.uuid ).then(patient => {
    res.status(200).json(patient[0]);
  });
}
exports.GET_DOCTOR = (req, res) => {

  Mdl_Public.get_doctor(req.query.id_doctor ).then(patient => {
    res.status(200).json(patient[0]);
  });
}


exports.GET_QUOTES = (req, res) => {

  Mdl_Public.get_quotes(req.query.id_patient ).then( quotes => {
    res.status(200).json(quotes);
  });
}
exports.GET_TREATMENTS = (req, res) => {

  Mdl_Public.get_treatments(req.query.id_patient ).then( quotes => {
    res.status(200).json(quotes);
  });
}
