// imports and setup
const express = require("express");
const logout = express.Router();

const methodOverride = require("method-override");
logout.use(methodOverride("_method"));

const cookieSession = require("cookie-session");
logout.use(cookieSession({
  name: "session",
  keys: ["userID"]
}));


// router will manage DELETE requests directed at /logout

// 'logout' and clear the userID session cookie
logout.delete("/logout", (req, res) => {
  req.session = null;
  res.redirect("/urls");
});


module.exports = logout;