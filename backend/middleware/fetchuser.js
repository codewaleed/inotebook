var jwt = require("jsonwebtoken");
const JWT_SECRET = "Harryisagoodb$oy";

const fetchuser = (req, res, next) => {
  //get user from jwttoken and add id to reqbody
  const token = req.header("auth-token");
  console.log(token);
  if (!token) {
    res.status(401).send({ error: "access denied1" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "access denied2" });
  }
};

module.exports = fetchuser;
