const { Classes } = require("../../models");
// create data classes
const service = async (req, res) => {
  try {
    const payload = req.body;
    const kelas = await Classes.create(payload);
    return res.json({
      message: "Class created successfully",
      data: kelas,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
