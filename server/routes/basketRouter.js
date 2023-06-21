const Router = require('express')
const BasketController = require('../controllers/basketController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/',authMiddleware,BasketController.addBasketDevice)
router.get('/', BasketController.getBasketDevices)

module.exports = router;
