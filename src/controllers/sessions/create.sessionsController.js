const { Sessions } = require("../../models");

const service = async (req, res) => {
  try {
    const kode_sesi = await generateCode();
    const payload = {
      ...req.body,
      kode_sesi: kode_sesi,
    };
    const session = await Sessions.create(payload);
    return res.json({
      message: "Session created successfully",
      data: session,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

module.exports = { service };

const generateCode = async () => {
  const kode_sesi = Math.floor(Math.random() * 1000000);
  const sesi = await Sessions.findOne({ where: { kode_sesi } });
  if (sesi) {
    return generateCode();
  }
  return kode_sesi;
};
