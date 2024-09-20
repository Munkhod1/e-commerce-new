// auth-route.ts

import { Router } from "express";
import { login, signup } from "../controller/auth-controlles";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
