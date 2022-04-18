const { Users } = require("../../models");
const { compareSync } = require("bcrypt");
const service = async (req, res) => {
  try {
    // find by email
    const user = await Users.findOne({
      where: { email: req.body.email },
    });
    if (!user) {
      return res.status(401).json({
        message: "email tidak terdaftar",
      });
    }
    // compare password
    const isPasswordValid = compareSync(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "password salah",
      });
    }
    // success
    return res.status(200).json({
      message: "login berhasil",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.toString(),
    });
  }
};
module.exports = { service };
