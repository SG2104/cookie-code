const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// handles login requests from the frontend
app.post("/login", (req, res) => {
  //extracts username submitted by the user
  const { username } = req.body;

  //checks if the username is admin
  const isAdmin = username.toLowerCase() === "admin";

  //object to be stored as the cookie
  const auth = {
    username,
    admin: isAdmin,
};

  //sends the cookie to the browser in the response (Network > login > Headers > Response Headers > Set-Cookie)
  //browser receives the cookie and stores in the Cookies under name auth (Application)
  res.cookie("auth", JSON.stringify(auth), {
    httpOnly: false, //allows the frontend JS to access the cookie
  });

  const hint = isAdmin
    ? "You're in — but nothing useful shows up just yet."
    : "You're logged in, but you're not admin. Try changing that.";

  //sends a JSON response 
  res.json({
    message: "Login Successful!",
    hint,
  });
});

app.get("/admin", (req, res) => {
  try {
    const auth = JSON.parse(req.cookies.auth || "{}");

    //Default response for non-admins
    const response = {
      user: auth.username,
      admin: auth.admin,
      hint: "Try harder. This endpoint only speaks to admins.",
    };

    //if user is admin, 
    if (auth.admin === true) {
      //set HTTP header
      res.set("X-Clue", "Right access, Wrong place. Try the image.");
      //response body
      response.message = "Welcome, admin.";
      response.hint = "Look closely at the response headers — there’s something only admins can see. It might lead you to the real clue.";
    }

    //send JSON response
    res.json(response);
  } catch {
    res.status(400).json({ error: "Broken cookie detected." });
  }
});

app.get("/image", (req, res) => {
  const imagePath = path.join(__dirname, "public", "cyber.jpg");
  if (fs.existsSync(imagePath)) {
    res.setHeader("Content-Type", "image/jpg");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="cyber.jpg"'
    );
    res.sendFile(imagePath);
  } else {
    res.status(404).send("Flag image not found");
  }
});

app.listen(4000, () => {
  console.log("Backend running at http://localhost:4000");
});
