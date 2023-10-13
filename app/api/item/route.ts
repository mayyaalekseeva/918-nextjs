import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const data = await prisma.item.findMany()
  console.log(data)
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const res = await prisma.item.create({ data: body })

    return NextResponse.json(res)
  } catch (e) {
    return NextResponse.json(e)
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const res = await prisma.item.update({
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
    await prisma.item.delete({
      where: {
        id: body.id,
      },
    })
    return NextResponse.json('success')
  } catch (e) {
    return NextResponse.json(e)
  }
}
