import { Request, Response, NextFunction } from "express";
import { prisma } from "../database";

const departmentController = {

    async store (req: Request, res: Response, next: NextFunction) {
        
    },

    async findAll (req: Request, res: Response, next: NextFunction) {
        try {
            const list = await prisma.department.findMany({
                include: {
                    movie_crew: false
                }
            } as any);
            
            if(list) return res.json(list);

            return res.json({message: 'No results found'})

        } catch (error: any) {
            return res.json({ error: error.message}) 
        }
    },

    async findById (req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const listById = await prisma.department.findUnique({
                where: {
                    department_id: Number(id),
                },
                include: {
                    movie_crew: true
                }
            } as any);

            if(listById) return res.json(listById);

            return res.json({message: 'No results found'})
        } catch (error: any) {
            return res.json({ error: error.message}) 
        }
    },

    async updateById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const { name } = req.body

        if( !await prisma.department.count({ where: { department_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.department.update({
            where: {
                department_id: Number(id)
            },
            data: {
                department_name: name
            }
        })

        return res.json({message: 'Updated'})
        } catch (error: any) {
            return res.json({ error: error.message}) 
        }
    },

    async deleteById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

        if( !await prisma.department.count({ where: { department_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.department.delete({ where: { department_id: Number(id) } })
        
        return res.json({message: 'Deleted'})
        } catch (error: any) {
            return res.json({ error: error.message}) 
        }
    },
}

export default departmentController;