const express = require('express');
const router = express.Router();

const Ctr_User = require('./controllers/Ctr_User'); 

// router.get('/Lyfs', Ctr_Lyfs.Lyfs);


// router.get('/Lyfs/Dashboard', Ctr_Lyfs.LyfsDashbord);
 
router.get('/info', Ctr_User.GET_USER_INFO ); 
router.put('/info', Ctr_User.UPDATE_USER_INFO ); 

router.get('/special', Ctr_User.GET_USER_SPECIAL ); 
router.post('/special', Ctr_User.POST_USER_SPECIAL ); 
router.delete('/special', Ctr_User.DELETE_SPECIAL ); 






router.post('/add-patient', Ctr_User.POST_ADD_PATIENT );
router.get('/get-patient', Ctr_User.GET_PATIENT ); 
router.get('/get-patients', Ctr_User.GET_PATIENTS ); 



router.delete('/patients', Ctr_User.DELETE_PATIENT ); 
router.delete('/patients-perm', Ctr_User.DELETE_PATIENT_PERM ); 

router.post('/quote', Ctr_User.POST_QUOTE );

router.get('/quote', Ctr_User.GET_QUOTE ); 
router.get('/quotes', Ctr_User.GET_QUOTES ); 
router.delete('/quote', Ctr_User.DELTE_QUOTE ); 


router.get('/treatment', Ctr_User.GET_TREATMENT ); 

router.get('/treatments', Ctr_User.GET_TREATMENTS ); 
router.post('/treatment', Ctr_User.POST_TREATMENT );
router.delete('/treatment', Ctr_User.DELTE_TREATMENT ); 


// router.put('/Home-Fiscal', Ctr_User.UpdateHomeFiscal); 

// router.delete('/BusinessName', Ctr_User.DeleteBusinessName);

module.exports = router;
