const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models');

const generateJwt = (id, email, role, basketId) => {
    return jwt.sign(
        {id, email, role, basketId}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {

    async registration(req, res, next){
        const {email, password, role} = req.body;
        if(!email || !password){
            console.log(email + " " + password);
            return next(ApiError.badRequest('incorrect email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest('user has already created'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role, basket.id);

        return res.json({token});
    }

    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        
        if(!user){
            return next(ApiError.badRequest('User not found'))
        }
        const basket = await Basket.findOne({where: {userId: user.id}})
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.badRequest('incorrect password'))
        }
        const token = generateJwt(user.id, user.email, user.role, basket.id)
        return res.json({token})
    }

    async check(req, res, next){
       const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.basketId)
       return res.json({token})
    }

}

module.exports = new UserController