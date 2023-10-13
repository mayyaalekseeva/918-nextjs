import { Category, Item } from '@prisma/client'

interface ReturnType {
  getAllCategories: () => Category[]
  getItems: () => Item[]
}

export default function useMenu() {
  const getAllCategories = async (id?: string | number) => {
    const categories = await fetch('/api/category', {
      method: 'GET',
      body: JSON.stringify({ id: Number(id) }),
    })

    return categories
  }

  const getItems = async () => {
    const res = await fetch('/api/item/', {
      method: 'GET',
    })
    const data = JSON.parse(JSON.stringify(await res.json()))

    return data
  }

  return {
    getAllCategories,
    getItems,
  }
}
