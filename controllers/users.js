const User = require("../models/user");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

async function login(req, res) {
  try {
    // 1) Find the user in the db by email
    const user = await User.findOne({ email: req.body.email });
    // 1.1) If the user does not exist we respond with a 401
    if (!user) return res.status(400).json({ err: "bad credentials" });
    // 2) If the user is found we then compare the password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        // 3) If the psw matches, we create a token and then send to the clinet
        const token = createJWT(user);
        res.json({ token });
      } else {
        // 3.1) If the psw does not match we respond with a 401
        return res.status(401).json({ err: 'bad credentials' })
      }
    });
  } catch (error) {
    res.status(500).json({ err: 'this request cannot be completed at this time' })
  }
}

async function signup(req, res) {
  try {
    const user = await User.create(req.body);
    // create token by passing in user document to createJWT
    // then we res.json({ token }) instead
    // remove password document before createJWT --> done in user model
    const token = createJWT(user);

    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}
