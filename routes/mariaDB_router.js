const itemController = require('../controllers/item_controller');
const itemRouter = require('koa-router')({
    prefix: '/item' // crops table functions path
});

itemRouter.get('/get/:item_id', itemController.getItemByID);

itemRouter.put('/update/:item_id/:item_name', itemController.updateItemNameByID);

itemRouter.post('/create/:item_name', itemController.createItem);

itemRouter.delete('/delete/:item_id', itemController.deleteItemByID);

module.exports = itemRouter;
