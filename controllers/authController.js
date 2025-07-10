const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(401)
      .json({ message: "Invalid credentials - user not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res
      .status(401)
      .json({ message: "Invalid credentials - wrong password" });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, "secret", {
    expiresIn: "1d",
  });
  res.json({ token });
};
