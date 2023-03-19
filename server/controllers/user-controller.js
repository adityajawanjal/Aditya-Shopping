const User = require("../models/user-model");

exports.registerUser = async (req,res) =>{
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(`The error in registerUser is : ${err}`);
    }
}