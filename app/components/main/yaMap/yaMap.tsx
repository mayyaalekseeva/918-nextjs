'use client'

export default function YaMap() {
  return (
    <div className="relative overflow-hidden">
      <a
        href="https://yandex.ru/maps/org/bistro_9_18/46641775327/?utm_medium=mapframe&utm_source=maps"
        className="absolute top-0 text-xs"
      >
        Бистро 9/18
      </a>
      <a
        href="https://yandex.ru/maps/47/nizhny-novgorod/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps"
        className="absolute top-3.5 text-xs"
      >
        Кафе в Нижнем Новгороде
      </a>
      <a
        href="https://yandex.ru/maps/47/nizhny-novgorod/category/coffee_shop/35193114937/?utm_medium=mapframe&utm_source=maps"
        className="absolute top-7 text-xs"
      >
        Кофейня в Нижнем Новгороде
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=43.997735%2C56.330067&mode=search&oid=46641775327&ol=biz&z=18.46"
        width="1008"
        height="720"
        allowFullScreen
        className="relative"
      ></iframe>
    </div>
  )
}
