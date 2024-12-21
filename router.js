
const express = require('express');
const router = express.Router();
const Controller = require('./controller');
router.post('/insertData', Controller.insertData);
router.get('/getData', Controller.getData);
router.delete('/deleteData', Controller.deleteData);
router.delete('/deleteOne/:key', Controller.deleteOne);
router.put('/updateData', Controller.updateData);
router.post('/saveStr', Controller.saveStr);
router.post('/saveMail', Controller.saveMail);
router.post('/matrix', Controller.matrix);
router.post('/matrixMax', Controller.matrixMax);
router.post('/sumOfMatrix', Controller.sumOfMatrix);
router.post('/multiplyMatrix', Controller.multiplyMatrix);

module.exports = router;