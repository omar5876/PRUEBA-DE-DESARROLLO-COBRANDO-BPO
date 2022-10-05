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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmpleado = exports.updateEmpleado = exports.createEmpleado = exports.getEmpleado = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("codigo:", req.params.codigo);
        const empleado = yield prisma.empleado.findUnique({ where: { codigo: Number(req.params.codigo) } });
        if (!empleado)
            return res.send("empleado not found");
        res.send(empleado);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getEmpleado = getEmpleado;
const createEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("empleado:", req.body);
        const empleado = yield prisma.empleado.create({ data: req.body });
        if (!empleado)
            return res.send("empleado hasn't created");
        res.send(empleado);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createEmpleado = createEmpleado;
const updateEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("codigo:", req.params.codigo, "empleado:", req.body);
        const empleado = yield prisma.empleado.update({
            where: { codigo: Number(req.params.codigo) },
            data: req.body
        });
        if (!empleado)
            return res.send("empleado hasn't found");
        res.send(empleado);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateEmpleado = updateEmpleado;
const deleteEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("codigo:", req.params.codigo);
        const empleado = yield prisma.empleado.delete({
            where: { codigo: Number(req.params.codigo) }
        });
        if (!empleado)
            return res.send("empleado hasn't found");
        res.send({ message: "empleado has been deleted", empleado });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteEmpleado = deleteEmpleado;
