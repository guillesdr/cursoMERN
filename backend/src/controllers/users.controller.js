const usersCtrl = {};

const UserModel = require("../models/User");

usersCtrl.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
  };
  
  usersCtrl.createUsers = async (req, res) => {
      const { username } = req.body;
      const newUser = new UserModel({
          username:  username
      })
  
      await newUser.save();
      console.log(newUser);
      res.json({ message: "Usuario Creado" });
  }
  
  usersCtrl.getUser = async (req, res) => {
      const userId = req.params.id;
      const user = await UserModel.findById(userId)
      res.json(user);
  }
  usersCtrl.updateUsers = async (req, res) => {
      const { username } = req.body;
      await UserModel.findByIdAndUpdate(req.params.id, {
            username
      })
      res.json({ message: "Usuario Actualizado" });
  }
  
  usersCtrl.deleteUsers = async (req, res) =>  
  {
      const user = await UserModel.findByIdAndDelete(userId)
      res.json({ message: "Usuario Eliminado" });
  }

module.exports = usersCtrl;