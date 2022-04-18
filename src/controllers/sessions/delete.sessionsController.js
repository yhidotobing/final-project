const { Sessions } = require("../../models");
// delete data users
const service = async (req, res) => {
  try {
    const session = await Sessions.destroy({
      where: { id: req.body.id },
    });
    return res.json({
      message: "Sessions deleted successfully",
      data: session,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
