// 工程案例数据 — 多语（{zh,en,ru}）。替换真实案例图片时修改 image / coverImage 字段
// 图片路径：/images/cases/<slug>.jpg。渲染时用 pick(field, lang) 取当前语言文案

import type { LangText, LangList } from '@/lib/i18n/translations'

export interface Case {
  slug: string
  name: LangText
  location: LangText
  type: LangText        // 建筑类型
  typeSlug: string      // 用于筛选
  product: LangText     // 使用产品
  area: LangText        // 项目面积
  color: LangText       // 颜色方案
  highlights: LangList  // 项目亮点
  image: string         // 替换为真实案例图
  coverImage: string    // 列表封面图
  year: string
}

export const caseCategories: { slug: string; name: LangText }[] = [
  { slug: 'all',         name: { zh: '全部项目', en: 'All Projects', ru: 'Все проекты' } },
  { slug: 'villa',       name: { zh: '别墅', en: 'Villa', ru: 'Вилла' } },
  { slug: 'residential', name: { zh: '住宅', en: 'Residential', ru: 'Жильё' } },
  { slug: 'commercial',  name: { zh: '商业建筑', en: 'Commercial', ru: 'Коммерция' } },
  { slug: 'public',      name: { zh: '公共建筑', en: 'Public', ru: 'Общественные' } },
  { slug: 'renovation',  name: { zh: '旧房翻新', en: 'Renovation', ru: 'Реновация' } },
  { slug: 'overseas',    name: { zh: '海外项目', en: 'Overseas', ru: 'Зарубежные' } },
]

export const cases: Case[] = [
  {
    slug: 'villa-foshan',
    name: { zh: '某高端别墅群屋面项目', en: 'Premium Villa Cluster Roofing Project', ru: 'Кровельный проект премиального посёлка вилл' },
    location: { zh: '广东·佛山', en: 'Foshan, Guangdong', ru: 'Фошань, Гуандун' },
    type: { zh: '别墅', en: 'Villa', ru: 'Вилла' },
    typeSlug: 'villa',
    product: { zh: '彩虹罗马型彩石金属瓦', en: 'Rainbow Roman Stone-Coated Tile', ru: 'Металлочерепица Rainbow Roman' },
    area: { zh: '约 2,400 ㎡', en: 'approx. 2,400 ㎡', ru: 'ок. 2 400 ㎡' },
    color: { zh: '砂岩棕', en: 'Sandstone Brown', ru: 'Песчано-коричневый' },
    highlights: {
      zh: ['欧式别墅廓形，罗马瓦型与建筑风格高度匹配', '整体颜色统一，砂岩棕色系配合米色外墙协调', '轻质基材，未对原有建筑结构造成额外负荷', '项目工期紧凑，模块化安装高效完成'],
      en: ['European villa form — the Roman profile closely matches the style', 'Unified color: sandstone brown harmonizes with beige walls', 'Light substrate added no extra load to the existing structure', 'Tight schedule completed efficiently with modular installation'],
      ru: ['Форма европейской виллы — римский профиль точно совпадает со стилем', 'Единый цвет: песчано-коричневый гармонирует с бежевыми стенами', 'Лёгкая основа не добавила нагрузки существующей конструкции', 'Сжатые сроки выполнены эффективно благодаря модульному монтажу'],
    },
    image: '/images/cases/villa-foshan.jpg',
    coverImage: '/images/cases/villa-foshan-cover.jpg',
    year: '2023',
  },
  {
    slug: 'commercial-hangzhou',
    name: { zh: '某商业综合体屋面翻新', en: 'Commercial Complex Roof Renovation', ru: 'Реновация кровли торгового комплекса' },
    location: { zh: '浙江·杭州', en: 'Hangzhou, Zhejiang', ru: 'Ханчжоу, Чжэцзян' },
    type: { zh: '商业建筑', en: 'Commercial', ru: 'Коммерция' },
    typeSlug: 'commercial',
    product: { zh: '米兰彩石金属瓦（加长定制款）', en: 'Milan Stone-Coated Tile (Extended Custom)', ru: 'Металлочерепица Milan (удлинённая под заказ)' },
    area: { zh: '约 8,600 ㎡', en: 'approx. 8,600 ㎡', ru: 'ок. 8 600 ㎡' },
    color: { zh: '岩石灰', en: 'Stone Gray', ru: 'Каменно-серый' },
    highlights: {
      zh: ['大面积商业屋面，采用加长款减少搭接，提升施工效率', '岩石灰色系与现代玻璃幕墙建筑协调统一', '配件系统完整，节点防水处理到位', '替换原混凝土瓦，屋面减重效果显著'],
      en: ['Large commercial roof — extended tiles reduced overlaps and boosted efficiency', 'Stone gray harmonizes with the modern glass-curtain facade', 'Complete accessory system with thorough detail waterproofing', 'Replaced concrete tiles for a significant roof weight reduction'],
      ru: ['Большая коммерческая кровля — удлинённая черепица снизила нахлёсты и ускорила монтаж', 'Каменно-серый гармонирует с современным стеклянным фасадом', 'Полный набор доборов с тщательной гидроизоляцией узлов', 'Замена бетонной черепицы заметно снизила вес кровли'],
    },
    image: '/images/cases/commercial-hangzhou.jpg',
    coverImage: '/images/cases/commercial-hangzhou-cover.jpg',
    year: '2023',
  },
  {
    slug: 'overseas-malaysia',
    name: { zh: '马来西亚住宅屋面项目', en: 'Malaysia Residential Roofing Project', ru: 'Кровельный проект жилья в Малайзии' },
    location: { zh: '马来西亚·吉隆坡', en: 'Kuala Lumpur, Malaysia', ru: 'Куала-Лумпур, Малайзия' },
    type: { zh: '住宅', en: 'Residential', ru: 'Жильё' },
    typeSlug: 'overseas',
    product: { zh: '丽波圆弧型彩石金属瓦', en: 'Libo Arc Stone-Coated Tile', ru: 'Металлочерепица Libo (дуга)' },
    area: { zh: '约 5,200 ㎡', en: 'approx. 5,200 ㎡', ru: 'ок. 5 200 ㎡' },
    color: { zh: '陶土红', en: 'Terracotta Red', ru: 'Терракотовый' },
    highlights: {
      zh: ['热带气候环境，耐候防腐性能满足当地使用需求', '圆弧型瓦与东南亚建筑风格协调', '陶土红色系兼顾传统与现代审美', '整批出口，配件齐全，安装顺利完成'],
      en: ['Tropical climate — weather and corrosion resistance met local needs', 'The arc profile harmonizes with Southeast Asian architecture', 'Terracotta red balances traditional and modern aesthetics', 'Bulk export with complete accessories, smoothly installed'],
      ru: ['Тропический климат — погодо- и коррозиестойкость отвечают местным условиям', 'Дугообразный профиль гармонирует с архитектурой Юго-Восточной Азии', 'Терракотовый сочетает традиционную и современную эстетику', 'Экспорт партией с полным набором доборов, монтаж прошёл гладко'],
    },
    image: '/images/cases/overseas-malaysia.jpg',
    coverImage: '/images/cases/overseas-malaysia-cover.jpg',
    year: '2022',
  },
  {
    slug: 'renovation-chengdu',
    name: { zh: '成都某老旧住宅区屋面改造', en: 'Chengdu Aging Residential Roof Retrofit', ru: 'Реконструкция кровли старого жилого квартала в Чэнду' },
    location: { zh: '四川·成都', en: 'Chengdu, Sichuan', ru: 'Чэнду, Сычуань' },
    type: { zh: '旧房翻新', en: 'Renovation', ru: 'Реновация' },
    typeSlug: 'renovation',
    product: { zh: '彩石金属瓦常规款', en: 'Standard Stone-Coated Tile', ru: 'Стандартная композитная металлочерепица' },
    area: { zh: '约 3,800 ㎡', en: 'approx. 3,800 ㎡', ru: 'ок. 3 800 ㎡' },
    color: { zh: '墨石黑', en: 'Ink Black', ru: 'Чернильно-чёрный' },
    highlights: {
      zh: ['旧房翻新项目，轻质金属瓦无需加固原有屋面结构', '统一改造效果，整体视觉焕然一新', '墨石黑色系为老旧社区带来现代感', '工期短，居民干扰小，顺利完工'],
      en: ['Renovation: light metal tiles needed no reinforcement of the existing roof', 'A unified retrofit gave the whole a fresh new look', 'Ink black brought a modern feel to the aging community', 'Short schedule with minimal disruption to residents'],
      ru: ['Реновация: лёгкая металлочерепица не потребовала усиления существующей кровли', 'Единая реконструкция придала всему свежий новый вид', 'Чернильно-чёрный добавил современности старому кварталу', 'Короткие сроки с минимальными неудобствами для жителей'],
    },
    image: '/images/cases/renovation-chengdu.jpg',
    coverImage: '/images/cases/renovation-chengdu-cover.jpg',
    year: '2023',
  },
  {
    slug: 'public-school',
    name: { zh: '某学校教学楼屋面工程', en: 'School Teaching Building Roof Project', ru: 'Кровельный проект учебного корпуса школы' },
    location: { zh: '江苏·南京', en: 'Nanjing, Jiangsu', ru: 'Нанкин, Цзянсу' },
    type: { zh: '公共建筑', en: 'Public', ru: 'Общественные' },
    typeSlug: 'public',
    product: { zh: '彩石金属瓦常规款', en: 'Standard Stone-Coated Tile', ru: 'Стандартная композитная металлочерепица' },
    area: { zh: '约 4,100 ㎡', en: 'approx. 4,100 ㎡', ru: 'ок. 4 100 ㎡' },
    color: { zh: '砖红', en: 'Brick Red', ru: 'Кирпично-красный' },
    highlights: {
      zh: ['教育建筑场景，安全性与美观性兼顾', '砖红色系融入校园环境，与红砖外墙协调', '标准规格产品，施工便捷，质量可控', '项目按期完工，验收合格'],
      en: ['Educational setting balancing safety and aesthetics', 'Brick red blends into the campus, matching the red-brick walls', 'Standard product — easy installation, controllable quality', 'Completed on schedule and passed acceptance'],
      ru: ['Образовательный объект, баланс безопасности и эстетики', 'Кирпично-красный вписывается в кампус, сочетаясь с кирпичными стенами', 'Стандартный продукт — простой монтаж, контролируемое качество', 'Завершено в срок и принято в эксплуатацию'],
    },
    image: '/images/cases/public-school.jpg',
    coverImage: '/images/cases/public-school-cover.jpg',
    year: '2022',
  },
  {
    slug: 'tourism-yunnan',
    name: { zh: '云南某文旅民宿群', en: 'Yunnan Tourism Homestay Cluster', ru: 'Кластер туристических гостевых домов в Юньнани' },
    location: { zh: '云南·大理', en: 'Dali, Yunnan', ru: 'Дали, Юньнань' },
    type: { zh: '别墅', en: 'Villa', ru: 'Вилла' },
    typeSlug: 'villa',
    product: { zh: '丽波圆弧型彩石金属瓦', en: 'Libo Arc Stone-Coated Tile', ru: 'Металлочерепица Libo (дуга)' },
    area: { zh: '约 1,600 ㎡', en: 'approx. 1,600 ㎡', ru: 'ок. 1 600 ㎡' },
    color: { zh: '森林绿', en: 'Forest Green', ru: 'Лесной зелёный' },
    highlights: {
      zh: ['文旅民宿场景，圆弧型瓦与自然环境融合自然', '森林绿色系呼应苍山洱海的自然背景', '多栋建筑统一规格，材料管理便捷', '业主反馈屋面效果符合预期设计'],
      en: ['Tourism homestay: the arc profile blends naturally with the setting', 'Forest green echoes the Cangshan-Erhai natural backdrop', 'Unified specs across buildings simplified material management', 'The owner confirmed the roof met the intended design'],
      ru: ['Туристический гостевой дом: дугообразный профиль естественно сливается с окружением', 'Лесной зелёный перекликается с природным фоном гор Цаншань и озера Эрхай', 'Единые размеры по всем зданиям упростили управление материалами', 'Заказчик подтвердил, что кровля соответствует задуманному дизайну'],
    },
    image: '/images/cases/tourism-yunnan.jpg',
    coverImage: '/images/cases/tourism-yunnan-cover.jpg',
    year: '2024',
  },
]
