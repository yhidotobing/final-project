const { Materials } = require("../../models");
// read data users
const service = async (req, res) => {
  try {
    const material = await Materials.findAll();
    return res.json({
      message: "Materials read successfully",
      data: material,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
