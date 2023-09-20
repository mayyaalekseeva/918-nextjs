export const config = {
  title: 'Plaiceholder × Next.js',
  domain: 'https://plaiceholder.co',
  social: {
    insta: 'https://github.com/joe-bell/plaiceholder/tree/main/examples/next',
    vk: 'https://twitter.com/joebell_',
    findUs:
      'https://yandex.ru/maps/47/nizhny-novgorod/?from=mapframe&ll=43.992852%2C56.322804&mode=routes&rtext=56.315411%2C43.993213~56.330085%2C43.997669&rtt=auto&ruri=~&z=15.24',
  },
  examples: {
    variants: {
      single: { title: 'Single' },
      multiple: { title: 'Multiple' },
    },
  },
  pages: {
    main: {
      title: 'Главная',
      url: '/',
    },
    menu: {
      title: 'Меню',
      url: '/menu',
    },
    contacts: {
      title: 'Контакты',
      url: '/contacts',
    },
  },
} as const
