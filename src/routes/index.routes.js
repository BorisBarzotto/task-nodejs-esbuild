import { Router } from "express";

import {
  renderTasks,
  createTask,
  renderEdit,
  updateTask,
  deleteTask,
  toggleTask,
} from "../controller/task.controller.js";

const router = Router();

router.get("/", renderTasks);

router.get("/about", (req, res) => {
  res.render("about");
});

router.post("/task/add", createTask);

router.get("/task/:id/toggleDone", toggleTask);

router.get("/task/:id/edit", renderEdit);

router.post("/task/:id/edit", updateTask);

router.get("/task/:id/delete", deleteTask);

export default router;
