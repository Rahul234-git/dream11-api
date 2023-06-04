const express = require('express');
const dataHandel = require('../Controller/control');

const router = express.Router();

router.get('/getTeamAData',dataHandel.getTeamAData);

router.get('/getMatchDetails',dataHandel.getMatchDetails);
router.post('/matchDetailsById',dataHandel.matchDetailsById);



module.exports = router;
