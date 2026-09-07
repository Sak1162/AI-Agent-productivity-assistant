import { tasks } from "../data/tasks.js";

/* =========================
   GET ALL TASKS
========================= */

export const getAllTasksService = async () => {
  return tasks;
};

/* =========================
   GET TASK BY ID
========================= */

export const getTaskByIdService = async (id) => {
  const taskId = Number(id);

  return tasks.find((task) => task.id === taskId) || null;
};

/* =========================
   CREATE TASK
========================= */

export const createTaskService = async (taskData) => {
  const newTask = {
    id:
      tasks.length > 0
        ? Math.max(...tasks.map((task) => task.id)) + 1
        : 1,

    title: taskData.title,
    description: taskData.description || "",
    category: taskData.category || "General",
    priority: taskData.priority || "Medium",
    dueDate: taskData.dueDate || null,
    startTime: taskData.startTime || null,
    endTime: taskData.endTime || null,
    status: taskData.status || "Pending",

    estimatedDuration:
      Number(taskData.estimatedDuration) || 60,

    aiPrioritize:
      taskData.aiPrioritize !== undefined
        ? Boolean(taskData.aiPrioritize)
        : true,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  return newTask;
};

/* =========================
   UPDATE TASK
========================= */

export const updateTaskService = async (
  id,
  updateData
) => {
  const taskId = Number(id);

  const taskIndex = tasks.findIndex(
    (task) => task.id === taskId
  );

  if (taskIndex === -1) {
    return null;
  }

  const existingTask = tasks[taskIndex];

  const updatedTask = {
    ...existingTask,
    ...updateData,

    id: existingTask.id,

    estimatedDuration:
      updateData.estimatedDuration !== undefined
        ? Number(updateData.estimatedDuration)
        : existingTask.estimatedDuration,

    updatedAt: new Date().toISOString(),
  };

  tasks[taskIndex] = updatedTask;

  return updatedTask;
};

/* =========================
   DELETE TASK
========================= */

export const deleteTaskService = async (id) => {
  const taskId = Number(id);

  const taskIndex = tasks.findIndex(
    (task) => task.id === taskId
  );

  if (taskIndex === -1) {
    return null;
  }

  const deletedTask = tasks.splice(
    taskIndex,
    1
  )[0];

  return deletedTask;
};