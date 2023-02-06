import { Request, Response, NextFunction } from "express";
import { prisma } from "../database";

const languageRoleController = {

    async store (req: Request, res: Response, next: NextFunction) {
        
    },

    async findAll (req: Request, res: Response, next: NextFunction) {
        try {
            const list = await prisma.language_role.findMany({
                include: {
                    movie_languages: false
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
            const listById = await prisma.language_role.findUnique({
                where: {
                    role_id: Number(id),
                },
                include: {
                    movie_languages: true
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

        if( !await prisma.language_role.count({ where: { role_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.language_role.update({
            where: {
                role_id: Number(id)
            },
            data: {
                movie_languages: name
            }
        } as any)

        return res.json({message: 'Updated'})
        } catch (error: any) {
            return res.json({ error: error.message}) 
        }
    },

    async deleteById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

        if( !await prisma.language_role.count({ where: { role_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.language_role.delete({ where: { role_id: Number(id) } })
        
        return res.json({message: 'Deleted'})
        } catch (error: any) {
            return res.json({ error: error.message}) 
        }
    },
}

export default languageRoleController;