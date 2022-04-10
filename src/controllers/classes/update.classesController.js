const { Classes } = require("../../models");
// update data classes
const service = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const kelas = await Classes.update(payload, {
      where: { id: req.body.id },
    });
    return res.json({
      message: "Class updated successfully",
      data: kelas,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { service };
