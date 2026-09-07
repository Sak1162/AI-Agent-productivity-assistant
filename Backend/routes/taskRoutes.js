import express from "express";

import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

/* =========================
   GET ALL TASKS
========================= */

router.get("/", getAllTasks);

/* =========================
   GET TASK BY ID
========================= */

router.get("/:id", getTaskById);

/* =========================
   CREATE TASK
========================= */

router.post("/", createTask);

/* =========================
   UPDATE TASK
========================= */

router.put("/:id", updateTask);

/* =========================
   DELETE TASK
========================= */

router.delete("/:id", deleteTask);

export default router;