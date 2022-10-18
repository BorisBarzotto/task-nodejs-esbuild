import Task from "../models/task.js";

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSaved = await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    console.log(task);
    res.render("edit", { task: task });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

export const toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.done = !task.done;
  await task.save();

  res.redirect("/");
};
