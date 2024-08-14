// routes/taskRoutes.ts
import { Router } from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTasksByStatus,
} from "../controllers/taskController";

const router: Router = Router();

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks/status/:status", getTasksByStatus);

export default router;
