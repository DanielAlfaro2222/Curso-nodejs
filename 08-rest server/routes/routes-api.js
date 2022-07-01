const { Router } = require('express');
const { controllerApiDelete, controllerApiPOST, controllerApiPUT, controllerApiGET } = require('../controllers/controllers');
const router = Router();

router.get('/', controllerApiGET);

router.post('/', controllerApiPOST);

router.put('/:id', controllerApiPUT);

router.delete('/', controllerApiDelete);

module.exports = router;