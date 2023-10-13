'use client'

import useMenu from 'app/hooks'
import MenuItem from './menuItem'

export default function Menu() {
  const { getItems } = useMenu()
  const items = getItems()
  console.log({ items })

  return (
    <div className="">
      {/* {items.map(item => 
        <MenuItem key={item.id} item={item}>
        )} */}
    </div>
  )
}
