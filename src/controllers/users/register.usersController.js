const { Users } = require("../../models");
const service = async (req, res) => {
  try {
    const payload = req.body;
    const requestDB = await Users.create(payload);
    return res.json({
      msg: "User berhasil diregister",
      data: requestDB,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "User gagal diregister",
    });
  }
};
module.exports = { service };
