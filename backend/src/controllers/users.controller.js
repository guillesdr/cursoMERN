const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({message: 'GET Request'});
usersCtrl.createUsers = (req, res) => res.json({ message: "POST Request" });

usersCtrl.getUser = (req, res) => res.json({ titulo: "Usuario 1" });
usersCtrl.updateUsers = (req, res) => res.json({ message: "Usuario Actualizado" });
usersCtrl.deleteUsers = (req, res) => res.json({ message: "Usuario Eliminado" });

module.exports = usersCtrl;