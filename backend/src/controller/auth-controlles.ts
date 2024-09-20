import express, { Request, Response } from "express";
import User from "../models/user.model";

// MONGOOSE
// const app = express();

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "hooson" });
    }
    // passaa hashlay. Modelaa import hiij oruulne
    const createdUser = await User.create({
      name,
      email,
      password,
      phoneNumber: "",
    });
    res.status(200).json({ message: "amjilttai uuslee", user: createdUser });
  } catch (error) {
    message: "amjilttai";
    console.log("aldaa", error);
  }
};

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "Login" });
};
