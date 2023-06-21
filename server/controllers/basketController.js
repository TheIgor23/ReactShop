const {Basket, BasketDevice, Device} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController{
    async addBasketDevice(req, res, next){
        try {
            console.log(req.body);
            let {basketId, deviceId} = req.body;
            let basketDevice = await BasketDevice.create({basketId, deviceId});
            return res.json(basketDevice);
        } catch (error) {
            return next(ApiError.badRequest(error.message))
        }        
    }

    async deleteBasketDevice(req, res, next){
        try {
            let {basketId, deviceId} = req.body;
            await BasketDevice.destroy(
                {where:
                    {
                        basketId, 
                        deviceId
                    }
                });
            return res.status(200);
        } catch (error) {
            return next(ApiError.badRequest(error.message))
        }  
    }

    async getBasketDevices(req, res, next){
        try {
            let {basketId} = req.query;
            let basketDevicesId = await BasketDevice.findAll({
                where: {basketId}
            }).then((result) => result.map((r) => r.deviceId));
       
            let diveces = await Device.findAndCountAll({where: {id:basketDevicesId}})
    
            return res.json(diveces);
        } catch (error) {
            return next(ApiError.badRequest(error.message))
        }

    }
}

module.exports = new BasketController;