import { Request, Response, NextFunction } from "express";
import { prisma } from "../database";

const countryController = {
    async store (req: Request, res: Response, next: NextFunction) {
        
    },

    async findAll (req: Request, res: Response, next: NextFunction) {
        try {
            const list = await prisma.country.findMany({
                include: {
                    production_country: false
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
            const listById = await prisma.country.findUnique({
                where: {
                    country_id: Number(id),
                },
                include: {
                    production_country: true
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

        if( !await prisma.country.count({ where: { country_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.country.update({
            where: {
                country_id: Number(id)
            },
            data: {
                country_iso_code: code,
                country_name: name
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

        if( !await prisma.country.count({ where: { country_id: Number(id) } }) ) 
            return res.json({message: 'No results found'})

        await prisma.country.delete({ where: { country_id: Number(id) } })
        
        return res.json({message: 'Deleted'})
        } catch (error: any) {
            return res.json({ error: error.message}) 
        }
    },
}

export default countryController;