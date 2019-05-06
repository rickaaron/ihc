const express = require('express');
const router = express.Router();

const Ctr_User = require('./controllers/Ctr_User'); 

// router.get('/Lyfs', Ctr_Lyfs.Lyfs);


// router.get('/Lyfs/Dashboard', Ctr_Lyfs.LyfsDashbord);


router.post('/add-patient', Ctr_User.POST_ADD_PATIENT );

router.get('/get-patient', Ctr_User.GET_PATIENT );


// router.put('/Home-Fiscal', Ctr_User.UpdateHomeFiscal); 

// router.delete('/BusinessName', Ctr_User.DeleteBusinessName);

module.exports = router;
