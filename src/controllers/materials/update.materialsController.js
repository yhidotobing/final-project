const { Materials } = require("../../models");

const service = async (req, res) => {
  try {
    const payload = req.body;
    const material = await Materials.update(payload, {
      where: { id: req.body.id },
    });
    return res.json({
      message: "Material updated successfully",
      data: material,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
