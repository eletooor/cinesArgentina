const user = require('../models/users.models');

const userCtrl ={};

userCtrl.getUsers= async (req, res) => {
       const users = await user.find(); 
       res.json(users);
    }

userCtrl.getUser= async (req, res) => {
    const users = await user.findById(req.params.id);
    res.json(users);
}

userCtrl.createUser= async (req, res) =>{
    const users = new user(req.body);
    await users.save();
    res.json({
        status: "User saved"
    });
}

userCtrl.editUser= async (req, res) =>{

    const users={
        name: req.body.name,
        password: req.body.password
    };
    await user.findByIdAndUpdate(req.params.id, {$set: users}, {new: true});
    res.json({
        status: "User update"
    });
}

userCtrl.deleteUser= async (req, res) =>{
    await user.findByIdAndRemove(req.params.id);
    res.json({
        status: "User deleted"
    })
}



module.exports= userCtrl;