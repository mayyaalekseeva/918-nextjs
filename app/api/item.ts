import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await prisma.item.findMany()

  if (req.method === 'GET') {
    res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const result = await prisma.item.create({ data: req.body })
    res.status(200).json(result)
  }
}
