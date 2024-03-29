'use client'

import { config } from 'config'
import Link from 'next/link'

export default function ContactsInfo() {
  return (
    <div className="container flex flex-col p-24 w-fit">
      <h4 className="text-3xl mb-6 font-semibold">
        Будем рады встрече с вами!
      </h4>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <span className="font-medium text-2xl">Адрес:</span>
          <span className="text-2xl">Рождественская, 9, Нижний Новгород</span>
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-2xl"> Часы работы:</span>
          <span className="text-2xl">Пн - Вс с 8.00 до 22.00</span>
        </div>

        <div className="flex flex-col mb-10">
          <span className="font-medium text-2xl">Телефон:</span>
          <span className="text-2xl">+7 (986) 769-00-99</span>
        </div>
      </div>

      <button className="border-2 rounded-md border-zinc-200 hover:bg-zinc-200 p-2 w-48 h-16 text-xl">
        <a href={config.social.findUs}>Как добраться</a>
      </button>
    </div>
  )
}
