const UserService = require("../services/userService");
 
exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        console.log(users);
        res.json({ data: users, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};
 
exports.createUser = async (req, res) => {
    try {
      const user = await UserService.createUser(req.body);
      res.json({ data: user, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.getUserById = async (req, res) => {
    try {

        
      const user = await UserService.getUserById(req.params.id);

      res.json({ data: user, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.updateUser = async (req, res) => {
    try {
      const user = await UserService.updateUser(req.params.Pseudo, req.body);
      res.json({ data: user.Pseudo, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.deleteUser = async (req, res) => {
    try {
      const user = await UserService.deleteUser(req.params.Pseudo);
      res.json({ data: user, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };