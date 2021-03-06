// imports and setup
const { resMessages, users } = require("../databases");

const express = require("express");
const newURL = express.Router();

const cookieSession = require("cookie-session");
newURL.use(cookieSession({
  name: "session",
  keys: ["userID"]
}));


// router will manage GET requests directed at /urls/new

// get page for creating new url
newURL.get("/urls/new", (req, res) => {
  const userID = req.session.userID;
  if (!userID) {
    resMessages.loginReminderMessage = "Please login to create a new URL";
    res.redirect("/login");
  } else {
    const templateVars = {
      user: users[userID],
      urlErrorMessage: resMessages.urlErrorMessage
    };
    res.render("urls_new", templateVars);
  }
});


module.exports = newURL;