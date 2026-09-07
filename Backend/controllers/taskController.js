import {
  getAllTasksService,
  getTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from "../services/taskService.js";

/* =========================
   GET ALL TASKS
========================= */

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasksService();

    return res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (error) {
    console.error("Get All Tasks Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
    });
  }
};

/* =========================
   GET TASK BY ID
========================= */

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await getTaskByIdService(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task fetched successfully",
      task,
    });
  } catch (error) {
    console.error("Get Task By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch task",
    });
  }
};

/* =========================
   CREATE TASK
========================= */

export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      priority,
      dueDate,
      startTime,
      endTime,
      status,
      estimatedDuration,
      aiPrioritize,
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Task title is required",
      });
    }

    const newTask = await createTaskService({
      title: title.trim(),
      description,
      category,
      priority,
      dueDate,
      startTime,
      endTime,
      status,
      estimatedDuration,
      aiPrioritize,
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error("Create Task Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create task",
    });
  }
};

/* =========================
   UPDATE TASK
========================= */

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await updateTaskService(
      id,
      req.body
    );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Update Task Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update task",
    });
  }
};

/* =========================
   DELETE TASK
========================= */

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await deleteTaskService(id);

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      task: deletedTask,
    });
  } catch (error) {
    console.error("Delete Task Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete task",
    });
  }
};