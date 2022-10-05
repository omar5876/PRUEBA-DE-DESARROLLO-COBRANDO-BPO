"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
app_1.app.use('/', routes_1.default);
app_1.app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});
