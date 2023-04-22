// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AllGames, GamesData } from '../data/gamesData'

export default function getAllGames(
  req: NextApiRequest,
  res: NextApiResponse<GamesData>
) {

  // if (req.method === "GET") {
    res.status(200).json(AllGames)
  // }
  
}
