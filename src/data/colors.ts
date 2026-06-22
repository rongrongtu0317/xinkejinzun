// 屋面颜色数据 — 多语（{zh,en,ru}）。颜色方案与建筑风格匹配
// 渲染时用 pick(field, lang) 取当前语言文案

import type { LangText, LangList } from '@/lib/i18n/translations'

export interface ColorOption {
  id: string
  name: LangText
  hex: string           // 主色值
  secondaryHex: string  // 辅助色/纹理效果色
  description: LangText
  suitableFor: LangList
  buildingStyle: LangText
}

export interface ColorScheme {
  id: string
  name: LangText
  style: LangText       // 建筑风格
  description: LangText
  colors: string[]      // 对应 ColorOption 的 id
  image: string         // 效果图占位路径
}

export const colorOptions: ColorOption[] = [
  {
    id: 'stone-gray',
    name: { zh: '岩石灰', en: 'Stone Gray', ru: 'Каменно-серый' },
    hex: '#6b7280',
    secondaryHex: '#4b5563',
    description: { zh: '沉稳克制，适合现代简约与高端建筑', en: 'Calm and restrained — suited to modern minimalist and premium buildings', ru: 'Спокойный и сдержанный — для современного минимализма и премиальных зданий' },
    suitableFor: { zh: ['现代住宅', '高端公寓', '商业建筑'], en: ['Modern Homes', 'Premium Apartments', 'Commercial Buildings'], ru: ['Современные дома', 'Премиальные квартиры', 'Коммерческие здания'] },
    buildingStyle: { zh: '现代简约', en: 'Modern Minimalist', ru: 'Современный минимализм' },
  },
  {
    id: 'sandstone-brown',
    name: { zh: '砂岩棕', en: 'Sandstone Brown', ru: 'Песчано-коричневый' },
    hex: '#a08060',
    secondaryHex: '#8b6914',
    description: { zh: '温润自然，彰显建筑的土地与材质气息', en: 'Warm and natural — expressing earthy, material character', ru: 'Тёплый и природный — подчёркивает земную, материальную фактуру' },
    suitableFor: { zh: ['欧式别墅', '乡村住宅', '度假物业'], en: ['European Villas', 'Rural Homes', 'Resort Properties'], ru: ['Европейские виллы', 'Сельские дома', 'Курортная недвижимость'] },
    buildingStyle: { zh: '欧式经典', en: 'European Classic', ru: 'Европейская классика' },
  },
  {
    id: 'terracotta-red',
    name: { zh: '陶土红', en: 'Terracotta Red', ru: 'Терракотовый' },
    hex: '#c0522a',
    secondaryHex: '#a04020',
    description: { zh: '传统美感，适合地中海与欧式建筑风格', en: 'Traditional beauty — suited to Mediterranean and European styles', ru: 'Традиционная красота — для средиземноморского и европейского стилей' },
    suitableFor: { zh: ['地中海风格', '欧式建筑', '文旅建筑'], en: ['Mediterranean Style', 'European Buildings', 'Tourism Buildings'], ru: ['Средиземноморский стиль', 'Европейские здания', 'Туристические объекты'] },
    buildingStyle: { zh: '地中海风格', en: 'Mediterranean', ru: 'Средиземноморский стиль' },
  },
  {
    id: 'ink-black',
    name: { zh: '墨石黑', en: 'Ink Black', ru: 'Чернильно-чёрный' },
    hex: '#2a2a2a',
    secondaryHex: '#1a1a1a',
    description: { zh: '极简高级，赋予建筑强烈的现代感与力量感', en: 'Minimalist and refined — a strong, modern, powerful look', ru: 'Минималистичный и изысканный — сильный, современный, выразительный вид' },
    suitableFor: { zh: ['现代别墅', '高端商业', '极简风格建筑'], en: ['Modern Villas', 'Premium Commercial', 'Minimalist Buildings'], ru: ['Современные виллы', 'Премиальная коммерция', 'Минималистичные здания'] },
    buildingStyle: { zh: '极简现代', en: 'Minimalist Modern', ru: 'Минималистичный модерн' },
  },
  {
    id: 'forest-green',
    name: { zh: '森林绿', en: 'Forest Green', ru: 'Лесной зелёный' },
    hex: '#3d6b47',
    secondaryHex: '#2d5038',
    description: { zh: '自然融合，与绿植环境协调，适合文旅与生态建筑', en: 'Blends with nature and greenery — suited to tourism and eco buildings', ru: 'Сливается с природой и зеленью — для туристических и эко-зданий' },
    suitableFor: { zh: ['文旅民宿', '生态建筑', '山地住宅'], en: ['Tourism Homestays', 'Eco Buildings', 'Mountain Homes'], ru: ['Туристические гостевые дома', 'Эко-здания', 'Горные дома'] },
    buildingStyle: { zh: '自然生态', en: 'Natural Eco', ru: 'Природный эко-стиль' },
  },
  {
    id: 'coastal-blue',
    name: { zh: '海岸蓝', en: 'Coastal Blue', ru: 'Прибрежный синий' },
    hex: '#3d6b8c',
    secondaryHex: '#2d5070',
    description: { zh: '清新明快，适合滨海度假建筑与现代风格', en: 'Fresh and bright — suited to coastal resorts and modern styles', ru: 'Свежий и яркий — для прибрежных курортов и современных стилей' },
    suitableFor: { zh: ['滨海建筑', '度假物业', '现代风格'], en: ['Coastal Buildings', 'Resort Properties', 'Modern Style'], ru: ['Прибрежные здания', 'Курортная недвижимость', 'Современный стиль'] },
    buildingStyle: { zh: '现代滨海', en: 'Modern Coastal', ru: 'Современный прибрежный' },
  },
  {
    id: 'brick-red',
    name: { zh: '砖红', en: 'Brick Red', ru: 'Кирпично-красный' },
    hex: '#a03020',
    secondaryHex: '#7a2018',
    description: { zh: '经典建筑色，充满历史感与人文气息', en: 'A classic building color, full of history and humanity', ru: 'Классический цвет зданий, полный истории и человеческого тепла' },
    suitableFor: { zh: ['传统住宅', '学校建筑', '公共建筑'], en: ['Traditional Homes', 'School Buildings', 'Public Buildings'], ru: ['Традиционные дома', 'Школьные здания', 'Общественные здания'] },
    buildingStyle: { zh: '传统经典', en: 'Traditional Classic', ru: 'Традиционная классика' },
  },
  {
    id: 'deep-brown',
    name: { zh: '深棕', en: 'Deep Brown', ru: 'Тёмно-коричневый' },
    hex: '#5c3d20',
    secondaryHex: '#402a14',
    description: { zh: '厚重稳重，适合追求自然质感的高档建筑', en: 'Rich and grounded — suited to premium buildings seeking natural texture', ru: 'Насыщенный и основательный — для премиальных зданий с природной фактурой' },
    suitableFor: { zh: ['山地别墅', '度假庄园', '乡村民居'], en: ['Mountain Villas', 'Resort Estates', 'Rural Dwellings'], ru: ['Горные виллы', 'Курортные усадьбы', 'Сельские жилища'] },
    buildingStyle: { zh: '自然庄重', en: 'Natural & Dignified', ru: 'Природный и солидный' },
  },
]

export const colorSchemes: ColorScheme[] = [
  {
    id: 'modern-minimal',
    name: { zh: '现代简约', en: 'Modern Minimalist', ru: 'Современный минимализм' },
    style: { zh: '现代极简建筑', en: 'Modern Minimalist Architecture', ru: 'Современная минималистичная архитектура' },
    description: { zh: '以中性色调为核心，用材料质感代替繁复装饰，呈现克制而高级的屋面效果。', en: 'Centered on neutral tones, replacing ornate detail with material texture for a restrained, refined roof.', ru: 'В основе — нейтральные тона: фактура материала вместо обильного декора создаёт сдержанную и изысканную кровлю.' },
    colors: ['stone-gray', 'ink-black'],
    image: '/images/colors/modern-minimal.jpg',
  },
  {
    id: 'european-villa',
    name: { zh: '欧式别墅', en: 'European Villa', ru: 'Европейская вилла' },
    style: { zh: '欧式传统建筑', en: 'European Traditional Architecture', ru: 'Европейская традиционная архитектура' },
    description: { zh: '温暖的砂岩棕与陶土红，配合欧式廓形建筑，还原传统欧洲庄园屋面美感。', en: 'Warm sandstone brown and terracotta red with European forms recreate the beauty of a traditional European estate roof.', ru: 'Тёплый песчано-коричневый и терракотовый с европейскими формами воссоздают красоту кровли традиционной европейской усадьбы.' },
    colors: ['sandstone-brown', 'terracotta-red'],
    image: '/images/colors/european-villa.jpg',
  },
  {
    id: 'rural-living',
    name: { zh: '乡村住宅', en: 'Rural Living', ru: 'Сельское жильё' },
    style: { zh: '乡村与田园风格', en: 'Rural & Pastoral Style', ru: 'Сельский и пасторальный стиль' },
    description: { zh: '砖红与深棕、森林绿的组合，让屋面自然融入乡村田野的色彩语境。', en: 'A mix of brick red, deep brown and forest green lets the roof blend naturally into the rural countryside.', ru: 'Сочетание кирпично-красного, тёмно-коричневого и лесного зелёного естественно вписывает кровлю в сельский ландшафт.' },
    colors: ['brick-red', 'deep-brown', 'forest-green'],
    image: '/images/colors/rural-living.jpg',
  },
  {
    id: 'tourism-resort',
    name: { zh: '文旅度假', en: 'Tourism Resort', ru: 'Туризм и курорты' },
    style: { zh: '文旅与民宿建筑', en: 'Tourism & Homestay Architecture', ru: 'Туристическая и гостевая архитектура' },
    description: { zh: '暖棕、灰黑与自然绿的组合，在文旅场景中创造既有特色又协调自然的屋面效果。', en: 'Warm brown, gray-black and natural green create a roof that is both distinctive and in harmony with tourism settings.', ru: 'Тёплый коричневый, серо-чёрный и природный зелёный создают кровлю — выразительную и гармоничную с туристическим окружением.' },
    colors: ['sandstone-brown', 'stone-gray', 'forest-green'],
    image: '/images/colors/tourism-resort.jpg',
  },
  {
    id: 'commercial',
    name: { zh: '商业建筑', en: 'Commercial', ru: 'Коммерческие здания' },
    style: { zh: '商业与办公建筑', en: 'Commercial & Office Buildings', ru: 'Коммерческие и офисные здания' },
    description: { zh: '深灰与蓝灰色系，配合现代商业建筑立面，展现专业、稳重的商业气质。', en: 'Deep gray and blue-gray tones with modern commercial facades convey a professional, composed business character.', ru: 'Тёмно-серые и сине-серые тона с современными коммерческими фасадами передают профессиональный, солидный деловой характер.' },
    colors: ['stone-gray', 'ink-black', 'coastal-blue'],
    image: '/images/colors/commercial.jpg',
  },
]
