const { Classes } = require("../../models");
// create data classes
const service = async (req, res) => {
  try {
    const kode_kelas = await generateCode();
    const payload = {
      ...req.body,
      kode_kelas: kode_kelas,
    };
    // random 6 digit code

    const kelas = await Classes.create(payload);
    return res.json({
      message: "Class created successfully",
      data: kelas,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const generateCode = async () => {
  const kode_kelas = Math.floor(Math.random() * 1000000);
  const kelas = await Classes.findOne({ where: { kode_kelas } });
  if (kelas) {
    return generateCode();
  }
  return kode_kelas;
};

module.exports = { service };
