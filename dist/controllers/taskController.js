"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksByStatus = exports.deleteTask = exports.updateTask = exports.getTasks = exports.createTask = void 0;
const task_1 = __importDefault(require("../models/task"));
// import { ITask } from "../types/task";
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = new task_1.default(req.body);
        yield task.save();
        res.status(201).json(task);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            // console.error("Unknown error:", error);
            // res.status(500).send("Server error");
            res.status(500).send(`Unknown error: ${error}`);
        }
    }
});
exports.createTask = createTask;
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_1.default.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            // console.error("Unknown error:", error);
            // res.status(500).send("Server error");
            res.status(500).send(`Unknown error: ${error}`);
        }
    }
});
exports.getTasks = getTasks;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(task);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            // console.error("Unknown error:", error);
            // res.status(500).send("Server error");
            res.status(500).send(`Unknown error: ${error}`);
        }
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield task_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Task deleted" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            // console.error("Unknown error:", error);
            // res.status(500).send("Server error");
            res.status(500).send(`Unknown error: ${error}`);
        }
    }
});
exports.deleteTask = deleteTask;
const getTasksByStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_1.default.aggregate([
            { $match: { status: req.params.status } },
            { $group: { _id: "$status", count: { $sum: 1 } } },
        ]);
        res.status(200).json(tasks);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            // console.error("Unknown error:", error);
            // res.status(500).send("Server error");
            res.status(500).send(`Unknown error: ${error}`);
        }
    }
});
exports.getTasksByStatus = getTasksByStatus;
