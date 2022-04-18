const { Sessions } = require("../../models");
// read data users
const service = async (req, res) => {
  try {
    const session = await Sessions.findAll();
    return res.json({
      message: "Sessions read successfully",
      data: session,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
