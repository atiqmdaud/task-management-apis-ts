"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/taskRoutes.ts
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
router.post("/tasks", taskController_1.createTask);
router.get("/tasks", taskController_1.getTasks);
router.put("/tasks/:id", taskController_1.updateTask);
router.delete("/tasks/:id", taskController_1.deleteTask);
router.get("/tasks/status/:status", taskController_1.getTasksByStatus);
exports.default = router;
