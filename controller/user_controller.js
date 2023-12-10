const { User } = require('../models/')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

class UserController  {

    static async getAll (req,res,next){
        try{
            const users = await User.findAll()
            res.status(200).json(users)
        }catch (error) {
            next(error)
        }
    }

    static async register(req,res,next){
        try{
            const { email, name, password } = req.body;

            // hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            // create a new user in the database
            const newUser = await User.create({
                email,
                name,
                password: hashedPassword,
            })
            res.status(200).json(newUser)
        }catch(error){
            next(error)
        }
    }

    static async login (req, res, next){
       try{
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email }})
        if (!user){
            throw { name: 'invalid credential'}
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            throw {name: 'Invalid credential'}
        }

        const token = jwt.sign(
            {
                id : user.id,
                email: user.email
            },
            'secret',
            {
                expiresIn: '1d',
            }
        )
        res.status(200).json({ token })
       }catch(error){
        next(error)
       }
    }
}

module.exports = UserController