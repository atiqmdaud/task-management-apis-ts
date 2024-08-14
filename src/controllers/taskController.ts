import { Request, Response } from "express";
import Task, { ITask } from "../models/task";
// import { ITask } from "../types/task";

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task: ITask = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      // console.error("Unknown error:", error);
      // res.status(500).send("Server error");
      res.status(500).send(`Unknown error: ${error}`);
    }
  }
};

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks: ITask[] = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      // console.error("Unknown error:", error);
      // res.status(500).send("Server error");
      res.status(500).send(`Unknown error: ${error}`);
    }
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task: ITask | null = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(task);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      // console.error("Unknown error:", error);
      // res.status(500).send("Server error");
      res.status(500).send(`Unknown error: ${error}`);
    }
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      // console.error("Unknown error:", error);
      // res.status(500).send("Server error");
      res.status(500).send(`Unknown error: ${error}`);
    }
  }
};

export const getTasksByStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tasks = await Task.aggregate([
      { $match: { status: req.params.status } },
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);
    res.status(200).json(tasks);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      // console.error("Unknown error:", error);
      // res.status(500).send("Server error");
      res.status(500).send(`Unknown error: ${error}`);
    }
  }
};
