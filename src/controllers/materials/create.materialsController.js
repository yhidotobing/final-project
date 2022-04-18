const { body } = require("express-validator");
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

const validationSession_id = [
  body("session_id").notEmpty().withMessage("session_id harus di isi"),
];

module.exports = { service, validationSession_id };
