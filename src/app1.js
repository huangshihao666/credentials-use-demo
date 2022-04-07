const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  res.cookie("user", "jay", { maxAge: 2000000, httpOnly: true });
  res.json({ code: 0, message: "登录成功" });
});

app.get("/user", (req, res) => {
  const user = req.headers.cookie.split("=")[1];
  res.json({ code: 0, user });
});

app.use("/static", express.static("public"));

app.listen("8000", () => {
  console.log("app1 running at port 8000");
});
