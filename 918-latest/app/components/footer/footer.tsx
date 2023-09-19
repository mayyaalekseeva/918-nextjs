'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="h-64 bg-zinc-100 flex items-center justify-center">
      <div className="flex justify-center gap-24 text-2xl items-center">
        <div className="flex flex-col gap-4">
          <span>Нижний Новгород, Рождественская, 9</span>

          <span>+7 (986) 769-00-99</span>
        </div>

        <div className="flex flex-col gap-4 ">
          <span>Часы работы</span>

          <span>Пн - Вс с 8.00 до 22.00</span>
        </div>

        <div className="flex gap-3">
          <a href="https://vk.com/bistro918" target="_blank">
            <Image src="/vk.svg" alt="vk" width="50" height="50" />
          </a>
          <a href="https://instagram.com/9.18bistro" target="_blank">
            <Image src="/instagram.svg" alt="insta" width="50" height="50" />
          </a>
        </div>
      </div>
    </footer>
  )
}
