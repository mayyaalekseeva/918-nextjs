import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const data = await prisma.user.findMany()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const res = await prisma.user.create({ data: body })
    return NextResponse.json(res)
  } catch (e) {
    return NextResponse.json(e)
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const res = await prisma.user.update({
      where: {
        id: body.id,
      },
      data: {
        ...body.data,
      },
    })
    return NextResponse.json(res)
  } catch (e) {
    return NextResponse.json(e)
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json()
    await prisma.user.delete({
      where: {
        id: body.id,
      },
    })
    return NextResponse.json('success')
  } catch (e) {
    return NextResponse.json(e)
  }
}
