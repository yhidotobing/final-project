const { Materials } = require("../../models");

const service = async (req, res) => {
  try {
    const payload = req.body;
    const materials = await Materials.create(payload);
    return res.json({
      message: "Material created successfully",
      data: materials,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

module.exports = { service };
