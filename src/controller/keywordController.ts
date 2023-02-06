import { Request, Response, NextFunction } from "express";
import { prisma } from "../database";

const keywordController = {

    async store (req: Request, res: Response, next: NextFunction) {
        
    },

    async findAll (req: Request, res: Response, next: NextFunction) {
        try {
            const list = await prisma.keyword.findMany({
                include: {
                    movie_keywords: false
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
            const listById = await prisma.keyword.findUnique({
                where: {
                    keyword_id: Number(id),
                },
                include: {
                    movie_keywords: true
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

        if( !await prisma.keyword.count({ where: { keyword_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.keyword.update({
            where: {
                keyword_id: Number(id)
            },
            data: {
                keyword_name: name
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

        if( !await prisma.keyword.count({ where: { keyword_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.keyword.delete({ where: { keyword_id: Number(id) } })
        
        return res.json({message: 'Deleted'})
        } catch (error: any) {
            return res.json({ error: error.message}) 
        }
    },
}

export default keywordController;