const { Classes } = require("../../models");
// read data classes
const service = async (req, res) => {
  try {
    const kelas = await Classes.findAll();
    return res.json({
      message: "Class read successfully",
      data: kelas,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
