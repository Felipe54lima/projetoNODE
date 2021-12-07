const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middleewares/TaskValidation')
const MacaddressValidation = require('../middleewares/MacaddressValidation')


router.post('/', TaskValidation, TaskController.create);

router.put('/:id', TaskValidation, TaskController.update);

router.get('/filter/all', MacaddressValidation, TaskController.all)

router.get('/:id', TaskController.show)

router.delete('/:id', TaskController.delete)

router.put('/:id/:done', TaskController.done)

module.exports = router;