const knex = require('../heplers/database');
const bcrypt = require('bcrypt');






exports.get_user_info = (id_user) => {
  return knex.select().from('t_dat_users').where({
    id_user,
  }).limit(1);
}

exports.put_user_info = (id_user, data) => {
  return knex.select().from('t_dat_users').where({
    id_user,
  }).update(data).limit(1);
}

exports.get_user_special = (f_id_user) => {
  return knex.select().from('t_dat_specialties').where({
    f_id_user,
  });
}




exports.post_user_special = (f_id_user, specialtie) => {
  return knex('t_dat_specialties').insert({
    f_id_user,
    specialtie
  });
}



exports.delete_user_special = (f_id_user, id_spe) => {
  return knex('t_dat_specialties').where({
    f_id_user,
    id_spe,
  }).del().limit(1);
}




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
  }).limit(1);
}

exports.get_patients = (id_user, status) => {
  return knex.select('*').from('t_dat_patients').where({
    f_id_user: id_user,
    status,
  });
}

exports.delete_patient_perm = (f_id_user, id_patient) => {
  return knex('t_dat_patients').where({
    f_id_user,
    id_patient,
  }).del().limit(1);
}


exports.delete_patient = (f_id_user, id_patient) => {
  return knex('t_dat_patients').where({
    f_id_user,
    id_patient,
  }).update({
    status: 'deleted',
  }).limit(1);
}


exports.post_quote = (data) => {
  // console.log( data  );
  return knex('t_dat_quotes').insert(data);
}

exports.get_quote = (f_id_user, id_quote) => {
  return knex.select().from('t_dat_quotes').where({
    f_id_user,
    id_quote,
  }).limit(1);
}
exports.get_quotes = (id_user, status) => {
  return knex.select().from('v_cat_quotes').where({
    id_user,
    status,
  });
}
exports.delete_quote = (f_id_user, id_quote, reason) => {
  return knex('t_dat_quotes').where({
    f_id_user,
    id_quote,
  }).update({
    status: 'deleted',
    reason
  }).limit(1);
}


exports.get_treatments = (id_user, status) => {
  return knex.select().from('v_cat_tratments').where({
    id_user,
    status,
  });
}


exports.get_treatment = (id_user, id_treatment) => {
  return knex.select().from('v_cat_tratments').where({
    id_user,
    id_treatment,
  }).limit(1);
}



exports.post_treatment = (data) => {
  // console.log( data  );
  return knex('t_dat_treatments').insert(data);
}
exports.delete_treatment = (f_id_user, id_treatment, reason) => {
  return knex('t_dat_treatments').where({
    f_id_user,
    id_treatment,
  }).update({
    status: 'deleted',
    reason
  }).limit(1);
}
