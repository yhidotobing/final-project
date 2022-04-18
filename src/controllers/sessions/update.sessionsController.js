const { Sessions } = require("../../models");

const service = async (req, res) => {
  try {
    const payload = req.body;
    const session = await Sessions.update(payload, {
      where: { id: req.body.id },
    });
    return res.json({
      message: "Session updated successfully",
      data: session,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
