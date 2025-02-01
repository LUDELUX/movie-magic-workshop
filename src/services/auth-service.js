import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = '$zs$32$s.QWJavtRYvmKfjtgo/eRuVtGl.B2H71Gm1Vq5X9HFYl8qxVG4a9.';

export default {
    register(userData){
        return User.create(userData)
    },
    async login(email,password){
        const user = await User.findOne({email});
        if (!user) {
            throw new Error('Invalid email or password!');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            throw new Error('Invalid email or password!');
        }

        const payLoad = {
            id: user.id,
            email:user.email, 
        }
        const token = jwt.sign(payLoad,SECRET, {expiresIn: '2h'});


        return token;
    }
}