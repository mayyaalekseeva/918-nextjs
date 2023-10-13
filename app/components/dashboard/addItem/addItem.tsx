import useMenu from 'app/hooks'
import AddItemForm from './addItemForm'

export default async function Navigation() {
  const { getItems } = useMenu()
  const items = getItems()
  console.log({ items })

  return (
    <div className="w-full">
      <h2 className="text-2xl mb-8 font-bold">Добавить блюдо</h2>
      <AddItemForm />
    </div>
  )
}
