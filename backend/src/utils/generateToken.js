const jwt = require("jsonwebtoken");

const generateToken = (_id, res) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "2h" });

  res.cookie("token", token, {
    expires: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
};

module.exports = generateToken;
