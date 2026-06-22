// 产品数据 — 多语（{zh,en,ru}）。替换真实产品图片时修改 image / heroImage 字段
// 图片路径约定：/images/products/<slug>.jpg（放在 public/images/products/ 目录下）
// 渲染时用 pick(field, lang) 取当前语言文案

import type { LangText, LangList } from '@/lib/i18n/translations'

export interface ProductSpec {
  label: LangText
  value: LangText
}

export interface Product {
  slug: string
  name: LangText
  category: LangText
  categorySlug: string
  tagline: LangText
  description: LangText
  features: LangList
  specs: ProductSpec[]
  colors: LangList
  applications: LangList
  image: string          // 替换为真实产品图路径
  heroImage: string      // 详情页大图
  badge?: LangText       // 可选徽章文字
}

// 产品分类 — image 为分类网格图，路径约定 /images/categories/<slug>.jpg
export const productCategories: { slug: string; name: LangText; desc: LangText; image: string }[] = [
  {
    slug: 'standard',
    name: { zh: '彩石金属瓦常规款', en: 'Standard Stone-Coated Tile', ru: 'Стандартная металлочерепица' },
    desc: { zh: '标准规格，适用于住宅、别墅、商业建筑等多种屋面场景', en: 'Standard specs for homes, villas, commercial buildings and more', ru: 'Стандартные размеры для домов, вилл, коммерческих зданий и не только' },
    image: '/images/categories/standard.jpg',
  },
  {
    slug: 'extended',
    name: { zh: '彩石金属瓦加长定制款', en: 'Extended Custom Tile', ru: 'Удлинённая черепица под заказ' },
    desc: { zh: '加长型设计，减少搭接，提升施工效率，适合大面积屋面', en: 'Extended design reduces overlaps and boosts efficiency on large roofs', ru: 'Удлинённая форма снижает число нахлёстов и ускоряет монтаж на больших кровлях' },
    image: '/images/categories/extended.jpg',
  },
  {
    slug: 'accessories',
    name: { zh: '彩石金属瓦配件', en: 'Tile Accessories', ru: 'Доборные элементы' },
    desc: { zh: '屋脊瓦、檐口板、山墙板、泛水板等完整配件系统', en: 'A complete system: ridge tiles, eave boards, gable boards, flashing', ru: 'Полная система: коньковая черепица, карнизные и ветровые планки, планки примыкания' },
    image: '/images/categories/accessories.jpg',
  },
  {
    slug: 'color-plans',
    name: { zh: '屋面配色方案', en: 'Roof Color Schemes', ru: 'Цветовые решения кровли' },
    desc: { zh: '匹配不同建筑风格的色彩搭配方案', en: 'Color combinations matched to different architectural styles', ru: 'Цветовые сочетания под разные архитектурные стили' },
    image: '/images/categories/color-plans.jpg',
  },
  {
    slug: 'libo',
    name: { zh: '丽波圆弧型彩石金属瓦', en: 'Libo Arc Profile', ru: 'Профиль Libo (дуга)' },
    desc: { zh: '圆弧波纹造型，柔和线条，强调屋面层次与立体感', en: 'Arc-wave profile with soft lines, emphasizing depth and dimension', ru: 'Дугообразно-волновой профиль с мягкими линиями подчёркивает глубину и объём' },
    image: '/images/categories/libo.jpg',
  },
  {
    slug: 'milan',
    name: { zh: '米兰彩石金属瓦', en: 'Milan Profile', ru: 'Профиль Milan' },
    desc: { zh: '简洁现代瓦型，适合别墅、民宿、文旅建筑、高端住宅', en: 'A clean modern profile for villas, homestays, tourism and premium homes', ru: 'Лаконичный современный профиль для вилл, гостевых домов, туризма и премиального жилья' },
    image: '/images/categories/milan.jpg',
  },
  {
    slug: 'rainbow',
    name: { zh: '彩虹罗马型金属瓦', en: 'Rainbow Roman Profile', ru: 'Профиль Rainbow Roman' },
    desc: { zh: '经典罗马瓦造型，立体起伏，强调传统屋面美感与装饰性', en: 'Classic Roman profile with relief, emphasizing traditional roof beauty', ru: 'Классический римский профиль с рельефом подчёркивает традиционную красоту кровли' },
    image: '/images/categories/rainbow.jpg',
  },
  {
    slug: 'custom',
    name: { zh: '更多定制瓦型', en: 'More Custom Profiles', ru: 'Другие профили под заказ' },
    desc: { zh: '波浪型、方格型、鱼鳞型等多种造型，支持定制开发', en: 'Wave, grid, fish-scale and more profiles — custom development available', ru: 'Волна, клетка, «рыбья чешуя» и другие профили — доступна разработка под заказ' },
    image: '/images/categories/custom.jpg',
  },
]

export const products: Product[] = [
  {
    slug: 'classic-roman',
    name: { zh: '彩虹罗马型彩石金属瓦', en: 'Rainbow Roman Stone-Coated Tile', ru: 'Металлочерепица Rainbow Roman' },
    category: { zh: '彩虹罗马型金属瓦', en: 'Rainbow Roman Profile', ru: 'Профиль Rainbow Roman' },
    categorySlug: 'rainbow',
    tagline: { zh: '经典罗马造型，赋予屋面立体层次与建筑装饰感', en: 'Classic Roman form, giving the roof depth and architectural detail', ru: 'Классическая римская форма придаёт кровле объём и архитектурную выразительность' },
    description: {
      zh: '彩虹罗马型采用传统罗马瓦廓形，配合高温烧结彩砂表层，呈现出自然石材质感与金属材料性能的完美结合。适用于欧式住宅、别墅庄园及各类追求建筑装饰效果的屋面项目。',
      en: 'The Rainbow Roman profile adopts a traditional Roman tile form with a high-temperature sintered stone-chip surface, combining natural stone texture with metal performance. Ideal for European homes, villa estates and projects seeking decorative roof effects.',
      ru: 'Профиль Rainbow Roman использует традиционную римскую форму черепицы с поверхностью из спечённой каменной крошки, сочетая фактуру натурального камня с характеристиками металла. Идеален для европейских домов, вилл-усадеб и проектов, где важен декоративный эффект кровли.',
    },
    features: {
      zh: ['立体罗马廓形，提升屋面层次感', '高温烧结彩砂，质感自然耐候', '镀铝锌钢板基材，轻质高强', '配件系统完整，安装便捷高效', '多种颜色可选，支持定制'],
      en: ['Three-dimensional Roman profile adds roof depth', 'High-temp sintered stone chips — natural, weatherproof texture', 'Aluminum-zinc steel substrate — light and strong', 'Complete accessory system for fast installation', 'Multiple colors available, customization supported'],
      ru: ['Объёмный римский профиль добавляет кровле глубину', 'Спечённая каменная крошка — натуральная, погодостойкая фактура', 'Стальная основа с алюмоцинком — лёгкая и прочная', 'Полный набор доборов для быстрого монтажа', 'Множество цветов, доступна настройка'],
    },
    specs: [
      { label: { zh: '产品类型', en: 'Product Type', ru: 'Тип продукта' }, value: { zh: '彩石金属瓦', en: 'Stone-Coated Metal Tile', ru: 'Композитная металлочерепица' } },
      { label: { zh: '产品尺寸', en: 'Dimensions', ru: 'Размеры' }, value: { zh: '1340mm × 420mm（参考值）', en: '1340mm × 420mm (reference)', ru: '1340 мм × 420 мм (справочно)' } },
      { label: { zh: '常规厚度', en: 'Standard Thickness', ru: 'Стандартная толщина' }, value: { zh: '0.4mm', en: '0.4mm', ru: '0,4 мм' } },
      { label: { zh: '单片重量', en: 'Weight per Tile', ru: 'Вес плитки' }, value: { zh: '约 2.8kg', en: 'approx. 2.8kg', ru: 'ок. 2,8 кг' } },
      { label: { zh: '每平方用量', en: 'Coverage', ru: 'Расход' }, value: { zh: '约 2.08 片/㎡', en: 'approx. 2.08 tiles/㎡', ru: 'ок. 2,08 шт./㎡' } },
      { label: { zh: '基材', en: 'Substrate', ru: 'Основа' }, value: { zh: '镀铝锌钢板', en: 'Aluminum-Zinc Steel', ru: 'Сталь с алюмоцинком' } },
      { label: { zh: '表面材料', en: 'Surface Material', ru: 'Материал поверхности' }, value: { zh: '高温烧结天然彩砂', en: 'High-Temp Sintered Natural Stone Chips', ru: 'Натуральная каменная крошка высокотемпературного спекания' } },
      { label: { zh: '适用坡度', en: 'Suitable Slope', ru: 'Подходящий уклон' }, value: { zh: '根据项目屋面结构确定', en: 'Determined by project roof structure', ru: 'Определяется конструкцией кровли проекта' } },
      { label: { zh: '适用场景', en: 'Applications', ru: 'Применение' }, value: { zh: '住宅、别墅、商业建筑、公共建筑', en: 'Homes, villas, commercial and public buildings', ru: 'Дома, виллы, коммерческие и общественные здания' } },
      { label: { zh: '颜色', en: 'Color', ru: 'Цвет' }, value: { zh: '支持定制', en: 'Customizable', ru: 'Под заказ' } },
      { label: { zh: '配套系统', en: 'System', ru: 'Система' }, value: { zh: '主瓦、脊瓦、檐口板、山墙板、端盖、泛水板、固定件', en: 'Main tiles, ridge tiles, eave/gable boards, end caps, flashing, fixings', ru: 'Основная черепица, конёк, карнизные/ветровые планки, торцевые заглушки, планки примыкания, крепёж' } },
    ],
    colors: {
      zh: ['岩石灰', '砂岩棕', '陶土红', '墨石黑', '森林绿'],
      en: ['Stone Gray', 'Sandstone Brown', 'Terracotta Red', 'Ink Black', 'Forest Green'],
      ru: ['Каменно-серый', 'Песчано-коричневый', 'Терракотовый', 'Чернильно-чёрный', 'Лесной зелёный'],
    },
    applications: {
      zh: ['欧式住宅', '别墅庄园', '商业建筑', '旧房翻新'],
      en: ['European Homes', 'Villa Estates', 'Commercial Buildings', 'Renovations'],
      ru: ['Европейские дома', 'Виллы-усадьбы', 'Коммерческие здания', 'Реновация'],
    },
    image: '/images/products/classic-roman.jpg',
    heroImage: '/images/products/classic-roman-hero.jpg',
    badge: { zh: '经典款', en: 'Classic', ru: 'Классика' },
  },
  {
    slug: 'libo-arc',
    name: { zh: '丽波圆弧型彩石金属瓦', en: 'Libo Arc Stone-Coated Tile', ru: 'Металлочерепица Libo (дуга)' },
    category: { zh: '丽波圆弧型彩石金属瓦', en: 'Libo Arc Profile', ru: 'Профиль Libo (дуга)' },
    categorySlug: 'libo',
    tagline: { zh: '圆弧柔美，赋予屋面温润流动的线条感', en: 'Soft arcs give the roof a warm, flowing line', ru: 'Мягкая дуга придаёт кровле тёплую плавную линию' },
    description: {
      zh: '丽波圆弧型以柔和的圆弧波纹为设计语言，突破传统瓦片的硬朗感，为建筑屋面带来温润、流动的视觉体验。尤其适合民宿、文旅、乡村住宅等追求柔和建筑美感的场景。',
      en: 'The Libo Arc profile uses gentle arc waves as its design language, breaking from the hard lines of traditional tiles to bring a warm, flowing look. Especially suited to homestays, tourism and rural homes seeking soft architectural beauty.',
      ru: 'Профиль Libo использует мягкие дугообразные волны как язык дизайна, уходя от жёстких линий традиционной черепицы к тёплому плавному виду. Особенно подходит для гостевых домов, туризма и сельских домов, где важна мягкая архитектурная красота.',
    },
    features: {
      zh: ['圆弧波纹廓形，线条柔和自然', '彩砂覆层均匀，色彩饱满稳定', '金属基材，轻质不增加屋面负荷', '适合新建与翻新项目', '配件齐全，安装简便'],
      en: ['Arc-wave profile with soft, natural lines', 'Even stone-chip coating, full and stable color', 'Metal substrate — light, no added roof load', 'Suitable for new builds and renovations', 'Complete accessories, easy installation'],
      ru: ['Дугообразно-волновой профиль с мягкими, естественными линиями', 'Ровное покрытие крошкой, насыщенный и стабильный цвет', 'Металлическая основа — лёгкая, без дополнительной нагрузки на кровлю', 'Подходит для нового строительства и реновации', 'Полный набор доборов, простой монтаж'],
    },
    specs: [
      { label: { zh: '产品类型', en: 'Product Type', ru: 'Тип продукта' }, value: { zh: '彩石金属瓦', en: 'Stone-Coated Metal Tile', ru: 'Композитная металлочерепица' } },
      { label: { zh: '产品尺寸', en: 'Dimensions', ru: 'Размеры' }, value: { zh: '1340mm × 420mm（参考值）', en: '1340mm × 420mm (reference)', ru: '1340 мм × 420 мм (справочно)' } },
      { label: { zh: '常规厚度', en: 'Standard Thickness', ru: 'Стандартная толщина' }, value: { zh: '0.4mm', en: '0.4mm', ru: '0,4 мм' } },
      { label: { zh: '单片重量', en: 'Weight per Tile', ru: 'Вес плитки' }, value: { zh: '约 2.8kg', en: 'approx. 2.8kg', ru: 'ок. 2,8 кг' } },
      { label: { zh: '每平方用量', en: 'Coverage', ru: 'Расход' }, value: { zh: '约 2.08 片/㎡', en: 'approx. 2.08 tiles/㎡', ru: 'ок. 2,08 шт./㎡' } },
      { label: { zh: '基材', en: 'Substrate', ru: 'Основа' }, value: { zh: '镀铝锌钢板', en: 'Aluminum-Zinc Steel', ru: 'Сталь с алюмоцинком' } },
      { label: { zh: '表面材料', en: 'Surface Material', ru: 'Материал поверхности' }, value: { zh: '高温烧结天然彩砂', en: 'High-Temp Sintered Natural Stone Chips', ru: 'Натуральная каменная крошка высокотемпературного спекания' } },
      { label: { zh: '适用场景', en: 'Applications', ru: 'Применение' }, value: { zh: '民宿、文旅建筑、乡村住宅、别墅', en: 'Homestays, tourism buildings, rural homes, villas', ru: 'Гостевые дома, туристические объекты, сельские дома, виллы' } },
      { label: { zh: '颜色', en: 'Color', ru: 'Цвет' }, value: { zh: '支持定制', en: 'Customizable', ru: 'Под заказ' } },
      { label: { zh: '配套系统', en: 'System', ru: 'Система' }, value: { zh: '主瓦、脊瓦、配件全系', en: 'Main tiles, ridge tiles, full accessory range', ru: 'Основная черепица, конёк, полный набор доборов' } },
    ],
    colors: {
      zh: ['岩石灰', '砂岩棕', '砖红', '森林绿', '海岸蓝'],
      en: ['Stone Gray', 'Sandstone Brown', 'Brick Red', 'Forest Green', 'Coastal Blue'],
      ru: ['Каменно-серый', 'Песчано-коричневый', 'Кирпично-красный', 'Лесной зелёный', 'Прибрежный синий'],
    },
    applications: {
      zh: ['民宿客栈', '文旅建筑', '乡村住宅', '别墅屋面'],
      en: ['Homestays & Inns', 'Tourism Buildings', 'Rural Homes', 'Villa Roofs'],
      ru: ['Гостевые дома и отели', 'Туристические объекты', 'Сельские дома', 'Кровля вилл'],
    },
    image: '/images/products/libo-arc.jpg',
    heroImage: '/images/products/libo-arc-hero.jpg',
  },
  {
    slug: 'milan',
    name: { zh: '米兰彩石金属瓦', en: 'Milan Stone-Coated Tile', ru: 'Металлочерепица Milan' },
    category: { zh: '米兰彩石金属瓦', en: 'Milan Profile', ru: 'Профиль Milan' },
    categorySlug: 'milan',
    tagline: { zh: '简洁现代，彰显当代建筑的纯粹美学', en: 'Clean and modern, expressing the pure aesthetic of contemporary architecture', ru: 'Лаконичность и современность — чистая эстетика современной архитектуры' },
    description: {
      zh: '米兰型以简洁利落的线条为核心，摒弃繁复装饰，强调建筑材料本身的质感与秩序感。适合追求现代极简风格的高端住宅、精品别墅及商业办公建筑。',
      en: 'The Milan profile centers on crisp, clean lines, forgoing ornate detail to emphasize the texture and order of the material itself. Ideal for premium homes, boutique villas and commercial offices pursuing a modern minimalist style.',
      ru: 'Профиль Milan построен на чётких, лаконичных линиях, отказываясь от обильного декора в пользу фактуры и порядка самого материала. Идеален для премиального жилья, бутик-вилл и коммерческих офисов в современном минималистичном стиле.',
    },
    features: {
      zh: ['简洁线条廓形，现代建筑美学', '彩砂表面，自然石材质感', '高强度金属基材', '色彩选择多样，匹配多种建筑风格', '安装效率高，配件系统齐全'],
      en: ['Clean-line profile with modern aesthetics', 'Stone-chip surface with natural stone texture', 'High-strength metal substrate', 'Diverse colors to match many styles', 'Efficient installation, complete accessory system'],
      ru: ['Профиль с чистыми линиями и современной эстетикой', 'Поверхность из каменной крошки с фактурой натурального камня', 'Высокопрочная металлическая основа', 'Разнообразие цветов под множество стилей', 'Эффективный монтаж, полный набор доборов'],
    },
    specs: [
      { label: { zh: '产品类型', en: 'Product Type', ru: 'Тип продукта' }, value: { zh: '彩石金属瓦', en: 'Stone-Coated Metal Tile', ru: 'Композитная металлочерепица' } },
      { label: { zh: '产品尺寸', en: 'Dimensions', ru: 'Размеры' }, value: { zh: '1340mm × 420mm（参考值）', en: '1340mm × 420mm (reference)', ru: '1340 мм × 420 мм (справочно)' } },
      { label: { zh: '常规厚度', en: 'Standard Thickness', ru: 'Стандартная толщина' }, value: { zh: '0.4mm', en: '0.4mm', ru: '0,4 мм' } },
      { label: { zh: '单片重量', en: 'Weight per Tile', ru: 'Вес плитки' }, value: { zh: '约 2.8kg', en: 'approx. 2.8kg', ru: 'ок. 2,8 кг' } },
      { label: { zh: '每平方用量', en: 'Coverage', ru: 'Расход' }, value: { zh: '约 2.08 片/㎡', en: 'approx. 2.08 tiles/㎡', ru: 'ок. 2,08 шт./㎡' } },
      { label: { zh: '基材', en: 'Substrate', ru: 'Основа' }, value: { zh: '镀铝锌钢板', en: 'Aluminum-Zinc Steel', ru: 'Сталь с алюмоцинком' } },
      { label: { zh: '表面材料', en: 'Surface Material', ru: 'Материал поверхности' }, value: { zh: '高温烧结天然彩砂', en: 'High-Temp Sintered Natural Stone Chips', ru: 'Натуральная каменная крошка высокотемпературного спекания' } },
      { label: { zh: '适用场景', en: 'Applications', ru: 'Применение' }, value: { zh: '高端住宅、精品别墅、商业建筑', en: 'Premium homes, boutique villas, commercial buildings', ru: 'Премиальное жильё, бутик-виллы, коммерческие здания' } },
      { label: { zh: '颜色', en: 'Color', ru: 'Цвет' }, value: { zh: '支持定制', en: 'Customizable', ru: 'Под заказ' } },
      { label: { zh: '配套系统', en: 'System', ru: 'Система' }, value: { zh: '主瓦、脊瓦、配件全系', en: 'Main tiles, ridge tiles, full accessory range', ru: 'Основная черепица, конёк, полный набор доборов' } },
    ],
    colors: {
      zh: ['墨石黑', '岩石灰', '砂岩棕', '暖白'],
      en: ['Ink Black', 'Stone Gray', 'Sandstone Brown', 'Warm White'],
      ru: ['Чернильно-чёрный', 'Каменно-серый', 'Песчано-коричневый', 'Тёплый белый'],
    },
    applications: {
      zh: ['高端住宅', '精品别墅', '商业办公', '公共建筑'],
      en: ['Premium Homes', 'Boutique Villas', 'Commercial Offices', 'Public Buildings'],
      ru: ['Премиальное жильё', 'Бутик-виллы', 'Коммерческие офисы', 'Общественные здания'],
    },
    image: '/images/products/milan.jpg',
    heroImage: '/images/products/milan-hero.jpg',
    badge: { zh: '热门', en: 'Popular', ru: 'Популярное' },
  },
  {
    slug: 'standard-basic',
    name: { zh: '彩石金属瓦常规款', en: 'Standard Stone-Coated Tile', ru: 'Стандартная композитная металлочерепица' },
    category: { zh: '彩石金属瓦常规款', en: 'Standard Tile', ru: 'Стандартная черепица' },
    categorySlug: 'standard',
    tagline: { zh: '稳定可靠，适用于多种屋面场景的基础产品', en: 'Stable and reliable — a foundation product for many roof scenarios', ru: 'Стабильность и надёжность — базовый продукт для разных типов кровли' },
    description: {
      zh: '常规款彩石金属瓦以成熟工艺与稳定品质为核心，覆盖住宅、别墅、商业建筑等主流屋面应用场景。产品结构经过多轮验证，在耐候、防腐、轻质方面表现稳定。',
      en: 'The standard stone-coated tile is built on mature processes and stable quality, covering mainstream roof applications such as homes, villas and commercial buildings. Its structure has been validated over many rounds, with stable performance in weather resistance, corrosion resistance and light weight.',
      ru: 'Стандартная композитная металлочерепица построена на зрелых технологиях и стабильном качестве, охватывая массовые применения — дома, виллы, коммерческие здания. Её структура проверена множеством циклов, со стабильными характеристиками по погодо-, коррозиестойкости и малому весу.',
    },
    features: {
      zh: ['成熟工艺，产品质量稳定', '标准规格，便于备货与施工', '彩砂表层色彩持久', '金属基材轻质耐用', '适用场景广泛'],
      en: ['Mature process, stable product quality', 'Standard specs for easy stocking and installation', 'Long-lasting stone-chip surface color', 'Light, durable metal substrate', 'Broad range of applications'],
      ru: ['Зрелая технология, стабильное качество продукции', 'Стандартные размеры для удобного складирования и монтажа', 'Долговечный цвет поверхности из каменной крошки', 'Лёгкая и прочная металлическая основа', 'Широкий диапазон применений'],
    },
    specs: [
      { label: { zh: '产品类型', en: 'Product Type', ru: 'Тип продукта' }, value: { zh: '彩石金属瓦', en: 'Stone-Coated Metal Tile', ru: 'Композитная металлочерепица' } },
      { label: { zh: '产品尺寸', en: 'Dimensions', ru: 'Размеры' }, value: { zh: '1340mm × 420mm（参考值）', en: '1340mm × 420mm (reference)', ru: '1340 мм × 420 мм (справочно)' } },
      { label: { zh: '常规厚度', en: 'Standard Thickness', ru: 'Стандартная толщина' }, value: { zh: '0.4mm', en: '0.4mm', ru: '0,4 мм' } },
      { label: { zh: '单片重量', en: 'Weight per Tile', ru: 'Вес плитки' }, value: { zh: '约 2.8kg', en: 'approx. 2.8kg', ru: 'ок. 2,8 кг' } },
      { label: { zh: '每平方用量', en: 'Coverage', ru: 'Расход' }, value: { zh: '约 2.08 片/㎡', en: 'approx. 2.08 tiles/㎡', ru: 'ок. 2,08 шт./㎡' } },
      { label: { zh: '基材', en: 'Substrate', ru: 'Основа' }, value: { zh: '镀铝锌钢板', en: 'Aluminum-Zinc Steel', ru: 'Сталь с алюмоцинком' } },
      { label: { zh: '表面材料', en: 'Surface Material', ru: 'Материал поверхности' }, value: { zh: '高温烧结天然彩砂', en: 'High-Temp Sintered Natural Stone Chips', ru: 'Натуральная каменная крошка высокотемпературного спекания' } },
      { label: { zh: '适用场景', en: 'Applications', ru: 'Применение' }, value: { zh: '住宅、别墅、商业建筑、公共建筑、旧房改造', en: 'Homes, villas, commercial/public buildings, renovations', ru: 'Дома, виллы, коммерческие/общественные здания, реновация' } },
      { label: { zh: '颜色', en: 'Color', ru: 'Цвет' }, value: { zh: '支持定制', en: 'Customizable', ru: 'Под заказ' } },
      { label: { zh: '配套系统', en: 'System', ru: 'Система' }, value: { zh: '主瓦、脊瓦、配件全系', en: 'Main tiles, ridge tiles, full accessory range', ru: 'Основная черепица, конёк, полный набор доборов' } },
    ],
    colors: {
      zh: ['岩石灰', '砂岩棕', '陶土红', '墨石黑', '森林绿', '海岸蓝'],
      en: ['Stone Gray', 'Sandstone Brown', 'Terracotta Red', 'Ink Black', 'Forest Green', 'Coastal Blue'],
      ru: ['Каменно-серый', 'Песчано-коричневый', 'Терракотовый', 'Чернильно-чёрный', 'Лесной зелёный', 'Прибрежный синий'],
    },
    applications: {
      zh: ['住宅屋面', '别墅改造', '商业建筑', '公共建筑', '旧房翻新'],
      en: ['Residential Roofs', 'Villa Retrofits', 'Commercial Buildings', 'Public Buildings', 'Renovations'],
      ru: ['Жилые кровли', 'Реконструкция вилл', 'Коммерческие здания', 'Общественные здания', 'Реновация'],
    },
    image: '/images/products/standard-basic.jpg',
    heroImage: '/images/products/standard-basic-hero.jpg',
  },
  {
    slug: 'extended-custom',
    name: { zh: '彩石金属瓦加长定制款', en: 'Extended Custom Stone-Coated Tile', ru: 'Удлинённая композитная металлочерепица под заказ' },
    category: { zh: '彩石金属瓦加长定制款', en: 'Extended Custom Tile', ru: 'Удлинённая черепица под заказ' },
    categorySlug: 'extended',
    tagline: { zh: '加长设计，减少搭接，提升大面积屋面施工效率', en: 'Extended design reduces overlaps and boosts efficiency on large roofs', ru: 'Удлинённая форма снижает число нахлёстов и ускоряет монтаж больших кровель' },
    description: {
      zh: '加长定制款专为大面积屋面项目设计，通过延长瓦片尺寸减少搭接数量，从而降低渗漏风险并提升整体施工效率。适合大型住宅社区、商业综合体及海外工程项目。',
      en: 'The extended custom tile is designed for large-area roof projects, reducing the number of overlaps by lengthening the tile — lowering leak risk and improving overall installation efficiency. Ideal for large residential communities, commercial complexes and overseas projects.',
      ru: 'Удлинённая черепица под заказ разработана для проектов с большой площадью кровли: удлинение плитки снижает число нахлёстов, уменьшая риск протечек и повышая эффективность монтажа. Идеальна для крупных жилых комплексов, торговых центров и зарубежных проектов.',
    },
    features: {
      zh: ['加长尺寸，减少搭接，降低渗漏风险', '施工效率提升，人工成本优化', '大面积屋面视觉效果更整洁', '基材与表层工艺与常规款一致', '支持定制规格'],
      en: ['Extended size reduces overlaps and leak risk', 'Higher installation efficiency, optimized labor cost', 'Cleaner look on large-area roofs', 'Same substrate and surface process as the standard tile', 'Custom specifications supported'],
      ru: ['Удлинённый размер снижает нахлёсты и риск протечек', 'Выше эффективность монтажа, оптимизация трудозатрат', 'Более аккуратный вид на больших кровлях', 'Та же основа и технология поверхности, что у стандартной', 'Доступны индивидуальные размеры'],
    },
    specs: [
      { label: { zh: '产品类型', en: 'Product Type', ru: 'Тип продукта' }, value: { zh: '彩石金属瓦（加长定制款）', en: 'Stone-Coated Metal Tile (Extended Custom)', ru: 'Композитная металлочерепица (удлинённая под заказ)' } },
      { label: { zh: '产品尺寸', en: 'Dimensions', ru: 'Размеры' }, value: { zh: '定制规格（以项目需求为准）', en: 'Custom (per project requirements)', ru: 'Индивидуально (по требованиям проекта)' } },
      { label: { zh: '常规厚度', en: 'Standard Thickness', ru: 'Стандартная толщина' }, value: { zh: '0.4mm', en: '0.4mm', ru: '0,4 мм' } },
      { label: { zh: '基材', en: 'Substrate', ru: 'Основа' }, value: { zh: '镀铝锌钢板', en: 'Aluminum-Zinc Steel', ru: 'Сталь с алюмоцинком' } },
      { label: { zh: '表面材料', en: 'Surface Material', ru: 'Материал поверхности' }, value: { zh: '高温烧结天然彩砂', en: 'High-Temp Sintered Natural Stone Chips', ru: 'Натуральная каменная крошка высокотемпературного спекания' } },
      { label: { zh: '适用场景', en: 'Applications', ru: 'Применение' }, value: { zh: '大型住宅社区、商业综合体、海外工程', en: 'Large residential communities, commercial complexes, overseas projects', ru: 'Крупные жилые комплексы, торговые центры, зарубежные проекты' } },
      { label: { zh: '颜色', en: 'Color', ru: 'Цвет' }, value: { zh: '支持定制', en: 'Customizable', ru: 'Под заказ' } },
      { label: { zh: '配套系统', en: 'System', ru: 'Система' }, value: { zh: '主瓦、脊瓦、配件全系', en: 'Main tiles, ridge tiles, full accessory range', ru: 'Основная черепица, конёк, полный набор доборов' } },
      { label: { zh: '起订量', en: 'MOQ', ru: 'Мин. заказ' }, value: { zh: '以项目需求为准，请联系咨询', en: 'Per project requirements — please inquire', ru: 'По требованиям проекта — уточняйте у нас' } },
    ],
    colors: {
      zh: ['岩石灰', '砂岩棕', '陶土红', '墨石黑'],
      en: ['Stone Gray', 'Sandstone Brown', 'Terracotta Red', 'Ink Black'],
      ru: ['Каменно-серый', 'Песчано-коричневый', 'Терракотовый', 'Чернильно-чёрный'],
    },
    applications: {
      zh: ['大型住宅社区', '商业综合体', '工业厂房', '海外工程'],
      en: ['Large Residential Communities', 'Commercial Complexes', 'Industrial Plants', 'Overseas Projects'],
      ru: ['Крупные жилые комплексы', 'Торговые центры', 'Промышленные цеха', 'Зарубежные проекты'],
    },
    image: '/images/products/extended-custom.jpg',
    heroImage: '/images/products/extended-custom-hero.jpg',
    badge: { zh: '定制款', en: 'Custom', ru: 'Под заказ' },
  },
  {
    slug: 'accessories',
    name: { zh: '彩石金属瓦配件系统', en: 'Stone-Coated Tile Accessory System', ru: 'Система доборов для металлочерепицы' },
    category: { zh: '彩石金属瓦配件', en: 'Tile Accessories', ru: 'Доборные элементы' },
    categorySlug: 'accessories',
    tagline: { zh: '完整配件体系，支撑屋面系统整体性能', en: 'A complete accessory system supporting overall roof performance', ru: 'Полная система доборов поддерживает характеристики всей кровли' },
    description: {
      zh: '完整的配件系统是彩石金属瓦屋面解决方案的重要组成部分。包括脊瓦、檐口板、山墙板、端盖、泛水板、收边件、固定件等，与主瓦材质一致，保证屋面整体性能与美观性。',
      en: 'A complete accessory system is an essential part of the stone-coated metal tile roofing solution. It includes ridge tiles, eave boards, gable boards, end caps, flashing, trim and fixings — all matching the main tile material to ensure overall performance and appearance.',
      ru: 'Полная система доборов — важная часть кровельного решения из композитной металлочерепицы. В неё входят коньковая черепица, карнизные и ветровые планки, торцевые заглушки, планки примыкания, отделочные планки и крепёж — все из того же материала, что и основная черепица, обеспечивая характеристики и внешний вид кровли.',
    },
    features: {
      zh: ['脊瓦：屋脊处防水封口', '檐口板：檐口收边与排水引导', '山墙板：侧面收边与防水', '泛水板：节点防水处理', '固定件：专用安装扣件', '材质与主瓦一致，耐候防腐'],
      en: ['Ridge tiles: waterproof sealing at the ridge', 'Eave boards: edge trim and drainage guidance', 'Gable boards: side trim and waterproofing', 'Flashing: detail waterproofing', 'Fixings: dedicated installation clips', 'Same material as main tiles — weather- and corrosion-resistant'],
      ru: ['Коньковая черепица: водонепроницаемая герметизация конька', 'Карнизная планка: отделка карниза и отвод воды', 'Ветровая планка: отделка торца и гидроизоляция', 'Планка примыкания: гидроизоляция узлов', 'Крепёж: специальные монтажные клипсы', 'Тот же материал, что у основной черепицы — погодо- и коррозиестойкость'],
    },
    specs: [
      { label: { zh: '产品类型', en: 'Product Type', ru: 'Тип продукта' }, value: { zh: '屋面系统配件', en: 'Roof System Accessories', ru: 'Доборы кровельной системы' } },
      { label: { zh: '主要配件', en: 'Main Accessories', ru: 'Основные доборы' }, value: { zh: '脊瓦、檐口板、山墙板、端盖、泛水板、固定件', en: 'Ridge tiles, eave/gable boards, end caps, flashing, fixings', ru: 'Коньковая черепица, карнизные/ветровые планки, торцевые заглушки, планки примыкания, крепёж' } },
      { label: { zh: '基材', en: 'Substrate', ru: 'Основа' }, value: { zh: '镀铝锌钢板（与主瓦一致）', en: 'Aluminum-Zinc Steel (same as main tiles)', ru: 'Сталь с алюмоцинком (как у основной черепицы)' } },
      { label: { zh: '表面', en: 'Surface', ru: 'Поверхность' }, value: { zh: '彩砂覆层 / 耐候涂层', en: 'Stone-chip coating / weather-resistant coating', ru: 'Покрытие крошкой / погодостойкое покрытие' } },
      { label: { zh: '颜色', en: 'Color', ru: 'Цвет' }, value: { zh: '与主瓦颜色匹配定制', en: 'Custom-matched to the main tile color', ru: 'Подбор под цвет основной черепицы' } },
      { label: { zh: '说明', en: 'Note', ru: 'Примечание' }, value: { zh: '配件规格需与主瓦型号匹配，请联系确认', en: 'Accessory specs must match the main tile model — please confirm with us', ru: 'Размеры доборов должны соответствовать модели черепицы — уточняйте у нас' } },
    ],
    colors: {
      zh: ['与主瓦颜色匹配'],
      en: ['Matched to main tile color'],
      ru: ['Подбор под цвет основной черепицы'],
    },
    applications: {
      zh: ['全系主瓦配套使用'],
      en: ['Used with all main-tile series'],
      ru: ['Используется со всеми сериями основной черепицы'],
    },
    image: '/images/products/accessories.jpg',
    heroImage: '/images/products/accessories-hero.jpg',
  },
]

// 常见问题数据
export const faqs: { q: LangText; a: LangText }[] = [
  {
    q: { zh: '彩石金属瓦适合哪些建筑类型？', en: 'What building types are stone-coated metal tiles suited to?', ru: 'Для каких типов зданий подходит композитная металлочерепица?' },
    a: { zh: '彩石金属瓦适用于住宅、别墅、商业建筑、公共建筑、文旅建筑等多种场景，也适用于旧房翻新与海外工程项目。', en: 'They suit homes, villas, commercial, public and tourism buildings, as well as renovations and overseas projects.', ru: 'Подходит для домов, вилл, коммерческих, общественных и туристических зданий, а также для реновации и зарубежных проектов.' },
  },
  {
    q: { zh: '是否支持颜色定制？', en: 'Do you support color customization?', ru: 'Поддерживается ли настройка цвета?' },
    a: { zh: '支持多种颜色定制，可根据建筑设计风格、墙面颜色和项目环境进行选型建议。请提供项目信息联系我们获取色卡与建议。', en: 'Yes — a range of custom colors is available, with selection advice based on architectural style, wall color and surroundings. Contact us with your project details for a color card and recommendations.', ru: 'Да — доступен ряд индивидуальных цветов с рекомендациями по подбору с учётом стиля, цвета стен и окружения. Свяжитесь с нами с деталями проекта для получения цветовой карты и рекомендаций.' },
  },
  {
    q: { zh: '旧房翻新能否使用彩石金属瓦？', en: 'Can stone-coated metal tiles be used for renovations?', ru: 'Можно ли использовать металлочерепицу при реновации?' },
    a: { zh: '可以。彩石金属瓦轻质特性使其非常适合旧房翻新场景，不会显著增加原有建筑屋面结构负荷。具体施工方案需结合实际屋面结构确认。', en: 'Yes. Their light weight makes them ideal for renovations, without significantly adding to the existing roof structure load. The specific plan should be confirmed against the actual roof structure.', ru: 'Да. Малый вес делает её идеальной для реновации без значительной нагрузки на существующую конструкцию кровли. Конкретная схема согласуется с учётом фактической конструкции.' },
  },
  {
    q: { zh: '产品参数是否可以定制？', en: 'Can product parameters be customized?', ru: 'Можно ли настроить параметры продукта?' },
    a: { zh: '常规产品尺寸为参考规格，特殊规格项目支持定制开发。请联系我们提供项目需求，由技术团队给出具体方案建议。', en: 'Standard sizes are reference specs; special specifications support custom development. Contact us with your requirements and our technical team will advise on a specific solution.', ru: 'Стандартные размеры — справочные; особые размеры доступны под заказ. Свяжитесь с нами с требованиями, и наша техническая команда предложит решение.' },
  },
  {
    q: { zh: '如何获取产品报价？', en: 'How do I get a product quote?', ru: 'Как получить расчёт?' },
    a: { zh: '请通过官网联系表单、电话或微信/WhatsApp 联系我们，提供项目地区、建筑类型、屋面面积及色彩偏好，我们将及时提供报价与选型建议。', en: 'Reach us via the website contact form, phone, or WeChat/WhatsApp with your project region, building type, roof area and color preference, and we will promptly provide a quote and selection advice.', ru: 'Свяжитесь с нами через форму на сайте, по телефону или в WeChat/WhatsApp, указав регион проекта, тип здания, площадь кровли и предпочтения по цвету — мы оперативно предоставим расчёт и рекомендации.' },
  },
  {
    q: { zh: '是否提供安装指导？', en: 'Do you provide installation guidance?', ru: 'Предоставляете ли вы помощь в монтаже?' },
    a: { zh: '提供产品选型建议、安装技术说明与施工指导文件。对于大型工程项目，可根据需要提供技术支持服务，请联系洽谈具体合作方式。', en: 'We provide selection advice, installation documentation and construction guidance. For large projects, technical support services are available — contact us to discuss specifics.', ru: 'Мы предоставляем рекомендации по подбору, документацию по монтажу и руководства по строительству. Для крупных проектов доступны услуги техподдержки — свяжитесь с нами для уточнения деталей.' },
  },
  {
    q: { zh: '产品是否支持出口海外？', en: 'Do your products support overseas export?', ru: 'Поддерживается ли экспорт за рубеж?' },
    a: { zh: '可以。我们为多个海外工程项目提供过产品供应与技术支持，可根据目标市场要求提供相关资料与报价。', en: 'Yes. We have supplied products and technical support to many overseas projects and can provide relevant documentation and quotes per target-market requirements.', ru: 'Да. Мы поставляли продукцию и техподдержку во многие зарубежные проекты и можем предоставить документацию и расчёты под требования целевого рынка.' },
  },
  {
    q: { zh: '样品如何申请？', en: 'How do I request a sample?', ru: 'Как запросить образец?' },
    a: { zh: '可联系我们申请产品样品，样品用于了解产品质感、颜色与工艺，方便项目决策。请提供联系方式与项目信息以便安排。', en: 'Contact us to request product samples, which help you assess texture, color and craftsmanship for project decisions. Please provide your contact and project details so we can arrange it.', ru: 'Свяжитесь с нами, чтобы запросить образцы продукции — они помогают оценить фактуру, цвет и качество для решений по проекту. Укажите контакты и детали проекта, чтобы мы организовали отправку.' },
  },
]
