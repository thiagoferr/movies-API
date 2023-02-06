import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database'

const productionCompanyController = {
  async store(req: Request, res: Response, next: NextFunction) {},

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
    
        const list = await prisma.production_company.findMany()

        if(list) return res.json(list)
      return res.json({ message: 'No results found' })
      
    } catch (error: any) {
        console.error(error)
      return res.json({ error: error.message })
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const list = await prisma.production_company.findUnique({
            where: {
                company_id: Number(id) 
            }
          } as any)
      
      if (list) return res.json(list)

      return res.json({ message: 'No results found' })
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  },

  async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      
      const {
        title,
        budget,
        homepage,
        overview,
        popularity,
        release_date,
        revenue,
        runtime,
        movie_status,
        tagline,
        vote_average,
        vote_count,
      } = req.body

      if (!(await prisma.movie.count({ where: { movie_id: Number(id) } })))
        return res.json({ message: 'No results found' })

      await prisma.movie.update({
        where: {
          movie_id: Number(id),
        },
        data: {
          title,
          budget,
          homepage,
          overview,
          popularity,
          release_date,
          revenue,
          runtime,
          movie_status,
          tagline,
          vote_average,
          vote_count,
        },
      } as any)

      return res.json({ message: 'Updated' })
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  },

  async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      if (!(await prisma.movie.count({ where: { movie_id: Number(id) } })))
        return res.json({ message: 'No results found' })

      await prisma.movie.delete({ where: { movie_id: Number(id) } })

      return res.json({ message: 'Deleted' })
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  },
}

export default productionCompanyController
