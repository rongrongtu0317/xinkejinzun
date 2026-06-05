// 屋面颜色数据 — 颜色方案与建筑风格匹配

export interface ColorOption {
  id: string
  name: string
  hex: string           // 主色值
  secondaryHex: string  // 辅助色/纹理效果色
  description: string
  suitableFor: string[]
  buildingStyle: string
}

export interface ColorScheme {
  id: string
  name: string
  style: string         // 建筑风格
  description: string
  colors: string[]      // 对应 ColorOption 的 id
  image: string         // 效果图占位路径
}

export const colorOptions: ColorOption[] = [
  {
    id: 'stone-gray',
    name: '岩石灰',
    hex: '#6b7280',
    secondaryHex: '#4b5563',
    description: '沉稳克制，适合现代简约与高端建筑',
    suitableFor: ['现代住宅', '高端公寓', '商业建筑'],
    buildingStyle: '现代简约',
  },
  {
    id: 'sandstone-brown',
    name: '砂岩棕',
    hex: '#a08060',
    secondaryHex: '#8b6914',
    description: '温润自然，彰显建筑的土地与材质气息',
    suitableFor: ['欧式别墅', '乡村住宅', '度假物业'],
    buildingStyle: '欧式经典',
  },
  {
    id: 'terracotta-red',
    name: '陶土红',
    hex: '#c0522a',
    secondaryHex: '#a04020',
    description: '传统美感，适合地中海与欧式建筑风格',
    suitableFor: ['地中海风格', '欧式建筑', '文旅建筑'],
    buildingStyle: '地中海风格',
  },
  {
    id: 'ink-black',
    name: '墨石黑',
    hex: '#2a2a2a',
    secondaryHex: '#1a1a1a',
    description: '极简高级，赋予建筑强烈的现代感与力量感',
    suitableFor: ['现代别墅', '高端商业', '极简风格建筑'],
    buildingStyle: '极简现代',
  },
  {
    id: 'forest-green',
    name: '森林绿',
    hex: '#3d6b47',
    secondaryHex: '#2d5038',
    description: '自然融合，与绿植环境协调，适合文旅与生态建筑',
    suitableFor: ['文旅民宿', '生态建筑', '山地住宅'],
    buildingStyle: '自然生态',
  },
  {
    id: 'coastal-blue',
    name: '海岸蓝',
    hex: '#3d6b8c',
    secondaryHex: '#2d5070',
    description: '清新明快，适合滨海度假建筑与现代风格',
    suitableFor: ['滨海建筑', '度假物业', '现代风格'],
    buildingStyle: '现代滨海',
  },
  {
    id: 'brick-red',
    name: '砖红',
    hex: '#a03020',
    secondaryHex: '#7a2018',
    description: '经典建筑色，充满历史感与人文气息',
    suitableFor: ['传统住宅', '学校建筑', '公共建筑'],
    buildingStyle: '传统经典',
  },
  {
    id: 'deep-brown',
    name: '深棕',
    hex: '#5c3d20',
    secondaryHex: '#402a14',
    description: '厚重稳重，适合追求自然质感的高档建筑',
    suitableFor: ['山地别墅', '度假庄园', '乡村民居'],
    buildingStyle: '自然庄重',
  },
]

export const colorSchemes: ColorScheme[] = [
  {
    id: 'modern-minimal',
    name: '现代简约',
    style: '现代极简建筑',
    description: '以中性色调为核心，用材料质感代替繁复装饰，呈现克制而高级的屋面效果。',
    colors: ['stone-gray', 'ink-black'],
    image: '/images/colors/modern-minimal.jpg',
  },
  {
    id: 'european-villa',
    name: '欧式别墅',
    style: '欧式传统建筑',
    description: '温暖的砂岩棕与陶土红，配合欧式廓形建筑，还原传统欧洲庄园屋面美感。',
    colors: ['sandstone-brown', 'terracotta-red'],
    image: '/images/colors/european-villa.jpg',
  },
  {
    id: 'rural-living',
    name: '乡村住宅',
    style: '乡村与田园风格',
    description: '砖红与深棕、森林绿的组合，让屋面自然融入乡村田野的色彩语境。',
    colors: ['brick-red', 'deep-brown', 'forest-green'],
    image: '/images/colors/rural-living.jpg',
  },
  {
    id: 'tourism-resort',
    name: '文旅度假',
    style: '文旅与民宿建筑',
    description: '暖棕、灰黑与自然绿的组合，在文旅场景中创造既有特色又协调自然的屋面效果。',
    colors: ['sandstone-brown', 'stone-gray', 'forest-green'],
    image: '/images/colors/tourism-resort.jpg',
  },
  {
    id: 'commercial',
    name: '商业建筑',
    style: '商业与办公建筑',
    description: '深灰与蓝灰色系，配合现代商业建筑立面，展现专业、稳重的商业气质。',
    colors: ['stone-gray', 'ink-black', 'coastal-blue'],
    image: '/images/colors/commercial.jpg',
  },
]
