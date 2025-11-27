// REGISTER
const handleRegister = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  return res.status(201).json({ message: "User registered successfully" });
};


// LOGIN
const handleLogin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  return res.status(200).json({ message: "Login successful" });
};


// FORGOT PASSWORD
const handleForgotPassword = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  return res.status(200).json({ message: "Password reset link sent to email" });
};


// EXPORT ALL
module.exports = { 
  handleRegister,
  handleLogin,
  handleForgotPassword
};
