// 中英文语言包（i18n 第一阶段：导航栏 + 首页 Hero）
// 后续其他页面/板块按相同结构往里加 key 即可

export const translations = {
  zh: {
    nav: {
      home: '首页',
      products: '产品中心',
      colors: '屋面配色',
      cases: '工程案例',
      support: '技术支持',
      about: '关于我们',
      contact: '联系我们',
    },
    cta: {
      quote: '获取报价',
    },
    hero: {
      label: '彩石金属瓦 · 金属屋面系统',
      titleLine1: '让建筑屋面',
      titleLine2: '拥有更长久的质感',
      subtitle:
        '专注彩石金属瓦与金属屋面系统，为住宅、别墅、商业建筑和工程项目提供美观、耐候、轻质、高强的屋面解决方案。',
      explore: '探索产品',
      quote: '获取报价',
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      colors: 'Roof Colors',
      cases: 'Projects',
      support: 'Support',
      about: 'About Us',
      contact: 'Contact',
    },
    cta: {
      quote: 'Get a Quote',
    },
    hero: {
      label: 'Stone-Coated Metal Roof Tiles · Metal Roofing System',
      titleLine1: 'Roofing built',
      titleLine2: 'to last a lifetime',
      subtitle:
        'Specialized in stone-coated metal roof tiles and metal roofing systems — delivering beautiful, weather-resistant, lightweight and high-strength roofing solutions for homes, villas, commercial buildings and engineering projects.',
      explore: 'Explore Products',
      quote: 'Get a Quote',
    },
  },
} as const

export type Lang = keyof typeof translations
export type Dict = (typeof translations)['zh']
