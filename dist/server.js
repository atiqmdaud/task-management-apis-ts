"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Connect to MongoDB
(0, db_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use("/api", taskRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("Waiting DB connection...");
});
