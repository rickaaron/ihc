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

exports.new_user = ( data ) => {
  return knex('t_dat_users').insert(data );
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



exports.get_patient = (uuid) => {
  return knex.select().from('t_dat_patients').where({uuid}).limit(1);
}
exports.get_doctor = (id_user) => {
  return knex.select('name', 'lastname_1', 'lastname_2').from('t_dat_users').where({id_user}).limit(1);
}



exports.get_quotes = (f_id_patient) => {
  return knex.select().from('t_dat_quotes').where({f_id_patient , status: 'active'});
}

exports.get_treatments = (id_patient) => {
  return knex.select().from('v_cat_tratments').where({id_patient , status: 'active'});
}