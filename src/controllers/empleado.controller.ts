import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';
const prisma = new PrismaClient()

export const getEmpleado = async (req: Request, res: Response) => {
    try {
        console.log("codigo:", req.params.codigo)
        const empleado = await prisma.empleado.findUnique({where: {codigo: Number(req.params.codigo)}})
        if(!empleado) return res.send("empleado not found")
        res.send(empleado)
        
    } catch (error) {
        console.log(error);
    }
};

export const createEmpleado = async (req: Request, res: Response) => {
    try {
        console.log("empleado:", req.body)
        const empleado = await prisma.empleado.create({data: req.body});
        if(!empleado) return res.send("empleado hasn't created")
        res.send(empleado)
        
    } catch (error) {
        console.log(error);
    }
};

export const updateEmpleado = async (req: Request, res: Response) => {
    try {
        console.log("codigo:", req.params.codigo, "empleado:", req.body)
        const empleado = await prisma.empleado.update({
            where:{codigo: Number(req.params.codigo)}, 
            data: req.body
        });
        if(!empleado) return res.send("empleado hasn't found")
        res.send(empleado)
        
    } catch (error) {
        console.log(error);
    }
};

export const deleteEmpleado = async (req: Request, res: Response) => {
    try {
        console.log("codigo:", req.params.codigo)
        const empleado = await prisma.empleado.delete({
            where:{codigo: Number(req.params.codigo)}
        });
        if(!empleado) return res.send("empleado hasn't found")
        res.send({message: "empleado has been deleted", empleado })
        
    } catch (error) {
        console.log(error);
    }
};
