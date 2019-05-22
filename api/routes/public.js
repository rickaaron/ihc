const express = require('express');
const router = express.Router();

const Ctr_Public = require('./controllers/Ctr_Public'); 


router.get('/home', Ctr_Public.GET_HOME);



router.post('/signin', Ctr_Public.POST_SINGIN);
router.post('/login', Ctr_Public.POST_LOGIN);


router.get('/patient', Ctr_Public.GET_PATIENT);
router.get('/doctor', Ctr_Public.GET_DOCTOR);
router.get('/quotes', Ctr_Public.GET_QUOTES);
router.get('/treatments', Ctr_Public.GET_TREATMENTS);



// router.get('/Lyfs/Dashboard', Ctr_Lyfs.LyfsDashbord);


// router.post('/Certificate', Ctr_User.SaveCertificate);


// router.put('/Home-Fiscal', Ctr_User.UpdateHomeFiscal); 

// router.delete('/BusinessName', Ctr_User.DeleteBusinessName);

module.exports = router;
