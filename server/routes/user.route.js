import express from "express";
import bcryt from "bcrypt";
import mongoose from "mongoose";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();
const router = express.Router();

mongoose.connect("mongodb://localhost:27017/authentification");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: " User already existed" });
  }
  const hashPassword = await bcryt.hash(password, 10);

  const newUser = new User({
    email,
    password: hashPassword,
    username,
  });

  await newUser.save();
  return res.json({ status: true, message: "record registred" });
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const validPassword = await bcryt.compare(password, user.password);

  if (!user) {
    return res.json({ message: " user is not registered !" });
  }
  if (!validPassword) {
    return res.json({ message: "password is incorrect !" });
  }
  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 36000 });
  return res.json({ status: true, message: "Login successfully" });
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: " user is not registered !" });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.KEY, {
        expiresIn: "15m",
      });
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "DaniloWaffis",
          pass: "cpys obcw cvwb zdcl",
        },
      });
      let mailOptions = {
        from: "danilowaffis@gmail.com",
        to: email,
        subject: "Sending Email using Node.js",
        text: `http://localhost:5173/reset-password/${token}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);

          return res.json({ messge: "error sending message" });
        } else {
          console.log("Email send : " + info.response);
          return res.json({ status: true, message: "email send" });
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    const hashPassword = await bcryt.hash(password, 10);
    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.json({ status: true, message: "Updated password" });
  } catch (error) {
    console.log(error);
    return res.json("Invalid token !");
  }
});

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "no token" });
    }
    const decoded = jwt.verify(token, process.env.KEY);
    next();
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
router.get("/verify", verifyUser, async (req, res) => {
  return res.json({ status: true, message: "authorized" });
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});
export { router as userRouter };
