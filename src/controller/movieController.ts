import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database'

const movieController = {
  async store(req: Request, res: Response, next: NextFunction) {},

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
        const list = JSON.stringify(
            await prisma.movie.findMany({
                include: {
                  movie_cast: false,
                  movie_company: false,
                  movie_crew: false,
                  movie_genres: false,
                  movie_keywords: false,
                  movie_languages: false,
                  production_country: false,
                },
              } as any),
            (revenue, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
          )
      const newList = JSON.parse(list)
      
      if (newList) return res.json(newList)

      return res.json({ message: 'No results found' })
    } catch (error: any) {
        console.error(error)
      return res.json({ error: error.message })
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const list = JSON.stringify(
        await prisma.movie.findUnique({
            where: {
                movie_id: Number(id),
              },
            include: {
                movie_cast: true,
                movie_company: true,
                movie_crew: true,
                movie_genres: true,
                movie_keywords: true,
                movie_languages: true,
                production_country: true,
            },
          } as any),
        (revenue, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
      )
  const newList = JSON.parse(list)

      if (newList) return res.json(newList)

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

export default movieController
