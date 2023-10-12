'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="flex flex-col gap-14">
      <div className="flex gap-14 justify-center">
        <div className="w-[50%] flex flex-col">
          <Image
            src="/svg/logo-black.svg"
            width={300}
            height={300}
            alt="logo"
          />

          <div className="flex flex-col gap-4 text-lg text-justify">
            <span>
              Бистро 9/18 — это про завтраки, спешалти кофе и уникальную
              авторскую винную карту. Ешьте завтраки целый день, балуйте себя
              фруктовым белым с утра, а к вечеру — сочной воронкой. Наблюдайте
              завораживающий процесс приготовления своих любимых блюд и напитков
              на открытой кухне и баре, узнавайте у персонала много нового о
              тонкостях приготовления блюд и терруарных особенностях продуктов,
              с которыми мы работаем.
            </span>

            <span>
              Мы разместились в историческом здании 1917 года — когда-то
              полицейский участок, затем — жилые квартиры. Мы постарались
              сохранить исторический облик фасада, потолка и стен, так что
              теперь вы можете насладиться антуражностью и оригинальностью
              интерьера.
            </span>
          </div>
        </div>

        <div>
          <Image
            src="/jpg/food.jpg"
            alt="food"
            quality={75}
            width={400}
            height={420}
            style={{
              width: 'auto',
              height: '100%',
            }}
          />
        </div>
      </div>

      <div>
        <Image
          src="/jpg/interior.jpg"
          alt="interior"
          quality={75}
          width={400}
          height={420}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      <div className="flex gap-14 justify-center">
        <div>
          <Image
            src="/jpg/food2.jpg"
            alt="food2"
            quality={75}
            width={400}
            height={420}
            style={{
              width: 'auto',
              height: '100%',
            }}
          />
        </div>

        <div className="w-[50%] flex items-center">
          <div className="flex flex-col gap-4 text-lg justify-center text-justify">
            <span>
              Радуем вас полным обновлением блюд каждый сезон. В меню мы
              сочетаем понятные и простые ингредиенты с необычными редкими
              находками, сохраняем баланс интересных вкусовых сочетаний и разных
              текстур, чтобы создать яркое гастрономическое впечатление. Мы не
              боимся экспериментировать и удивлять гостей. Кстати, некоторые
              завтраки уже стали легендарными!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
