import express from "express"
import {createSignIn, createUser, transfer} from "../Controllers/user.js";

const router = express.Router()


router.post("/signup", createUser);
router.post("/signin", createSignIn);
router.post("/transferAmount", transfer);

export default router;