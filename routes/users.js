import express from "express";

import createUser from "../controllers/users.js";
import getUsers from "../controllers/users.js";
import getUser from "../controllers/users.js";
import deleteUser from "../controllers/users.js";
import updateUser from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

//get user by id
router.get("/:id", getUser);

//delete user by id
router.delete("/:id", deleteUser);

//update user by id
router.patch("/:id", updateUser);

export default router;
