const express = require('express');
const router = express.Router();

const Ctr_Public = require('./controllers/Ctr_Public'); 


router.get('/home', Ctr_Public.GET_HOME);

// router.get('/Lyfs/Dashboard', Ctr_Lyfs.LyfsDashbord);


// router.post('/Certificate', Ctr_User.SaveCertificate);


// router.put('/Home-Fiscal', Ctr_User.UpdateHomeFiscal); 

// router.delete('/BusinessName', Ctr_User.DeleteBusinessName);

module.exports = router;
