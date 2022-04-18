const { Materials } = require("../../models");
// delete data users
const service = async (req, res) => {
  try {
    const material = await Materials.destroy({
      where: { id: req.body.id },
    });
    return res.json({
      message: "material deleted successfully",
      data: material,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
