const { Classes } = require("../../models");
// delete data classes

const service = async (req, res) => {
  try {
    const kelas = await Classes.destroy({
      where: { id: req.body.id },
    });
    return res.json({
      message: "Class deleted successfully",
      data: kelas,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
