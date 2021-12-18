const userCtrl = {};

const User = require('../models/user');

userCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users)
}
userCtrl.createUser = async(req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User Created')
}
userCtrl.deleteUser = async(req, res) => {
    await User.findOneAndDelete(req.params.id);
    res.json('User Deleted')
}
module.exports = userCtrl;