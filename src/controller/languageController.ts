import { Request, Response, NextFunction } from "express";
import { prisma } from "../database";

const languageController = {
    async store (req: Request, res: Response, next: NextFunction) {
        
    },

    async findAll (req: Request, res: Response, next: NextFunction) {
        try {
            const list = await prisma.language.findMany({
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
            const listById = await prisma.language.findUnique({
                where: {
                    language_id: Number(id),
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
            const { code, name } = req.body

        if( !await prisma.language.count({ where: { language_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.language.update({
            where: {
                language_id: Number(id)
            },
            data: {
                language_code: code,
                language_name: name
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

        if( !await prisma.language.count({ where: { language_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.language.delete({ where: { language_id: Number(id) } })
        
        return res.json({message: 'Deleted'})
        } catch (error: any) {
            return res.json({ error: error.message}) 
        }
    },
}

export default languageController;