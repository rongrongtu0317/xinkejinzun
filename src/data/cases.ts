// 工程案例数据 — 替换真实案例图片时修改 image 字段
// 图片路径：/images/cases/<slug>.jpg

export interface Case {
  slug: string
  name: string
  location: string
  type: string         // 建筑类型
  typeSlug: string     // 用于筛选
  product: string      // 使用产品
  area: string         // 项目面积
  color: string        // 颜色方案
  highlights: string[] // 项目亮点
  image: string        // 替换为真实案例图
  coverImage: string   // 列表封面图
  year: string
}

export const caseCategories = [
  { slug: 'all',        name: '全部项目' },
  { slug: 'villa',      name: '别墅' },
  { slug: 'residential',name: '住宅' },
  { slug: 'commercial', name: '商业建筑' },
  { slug: 'public',     name: '公共建筑' },
  { slug: 'renovation', name: '旧房翻新' },
  { slug: 'overseas',   name: '海外项目' },
]

export const cases: Case[] = [
  {
    slug: 'villa-foshan',
    name: '某高端别墅群屋面项目',
    location: '广东·佛山',
    type: '别墅',
    typeSlug: 'villa',
    product: '彩虹罗马型彩石金属瓦',
    area: '约 2,400 ㎡',
    color: '砂岩棕',
    highlights: [
      '欧式别墅廓形，罗马瓦型与建筑风格高度匹配',
      '整体颜色统一，砂岩棕色系配合米色外墙协调',
      '轻质基材，未对原有建筑结构造成额外负荷',
      '项目工期紧凑，模块化安装高效完成',
    ],
    image: '/images/cases/villa-foshan.jpg',
    coverImage: '/images/cases/villa-foshan-cover.jpg',
    year: '2023',
  },
  {
    slug: 'commercial-hangzhou',
    name: '某商业综合体屋面翻新',
    location: '浙江·杭州',
    type: '商业建筑',
    typeSlug: 'commercial',
    product: '米兰彩石金属瓦（加长定制款）',
    area: '约 8,600 ㎡',
    color: '岩石灰',
    highlights: [
      '大面积商业屋面，采用加长款减少搭接，提升施工效率',
      '岩石灰色系与现代玻璃幕墙建筑协调统一',
      '配件系统完整，节点防水处理到位',
      '替换原混凝土瓦，屋面减重效果显著',
    ],
    image: '/images/cases/commercial-hangzhou.jpg',
    coverImage: '/images/cases/commercial-hangzhou-cover.jpg',
    year: '2023',
  },
  {
    slug: 'overseas-malaysia',
    name: '马来西亚住宅屋面项目',
    location: '马来西亚·吉隆坡',
    type: '住宅',
    typeSlug: 'overseas',
    product: '丽波圆弧型彩石金属瓦',
    area: '约 5,200 ㎡',
    color: '陶土红',
    highlights: [
      '热带气候环境，耐候防腐性能满足当地使用需求',
      '圆弧型瓦与东南亚建筑风格协调',
      '陶土红色系兼顾传统与现代审美',
      '整批出口，配件齐全，安装顺利完成',
    ],
    image: '/images/cases/overseas-malaysia.jpg',
    coverImage: '/images/cases/overseas-malaysia-cover.jpg',
    year: '2022',
  },
  {
    slug: 'renovation-chengdu',
    name: '成都某老旧住宅区屋面改造',
    location: '四川·成都',
    type: '旧房翻新',
    typeSlug: 'renovation',
    product: '彩石金属瓦常规款',
    area: '约 3,800 ㎡',
    color: '墨石黑',
    highlights: [
      '旧房翻新项目，轻质金属瓦无需加固原有屋面结构',
      '统一改造效果，整体视觉焕然一新',
      '墨石黑色系为老旧社区带来现代感',
      '工期短，居民干扰小，顺利完工',
    ],
    image: '/images/cases/renovation-chengdu.jpg',
    coverImage: '/images/cases/renovation-chengdu-cover.jpg',
    year: '2023',
  },
  {
    slug: 'public-school',
    name: '某学校教学楼屋面工程',
    location: '江苏·南京',
    type: '公共建筑',
    typeSlug: 'public',
    product: '彩石金属瓦常规款',
    area: '约 4,100 ㎡',
    color: '砖红',
    highlights: [
      '教育建筑场景，安全性与美观性兼顾',
      '砖红色系融入校园环境，与红砖外墙协调',
      '标准规格产品，施工便捷，质量可控',
      '项目按期完工，验收合格',
    ],
    image: '/images/cases/public-school.jpg',
    coverImage: '/images/cases/public-school-cover.jpg',
    year: '2022',
  },
  {
    slug: 'tourism-yunnan',
    name: '云南某文旅民宿群',
    location: '云南·大理',
    type: '别墅',
    typeSlug: 'villa',
    product: '丽波圆弧型彩石金属瓦',
    area: '约 1,600 ㎡',
    color: '森林绿',
    highlights: [
      '文旅民宿场景，圆弧型瓦与自然环境融合自然',
      '森林绿色系呼应苍山洱海的自然背景',
      '多栋建筑统一规格，材料管理便捷',
      '业主反馈屋面效果符合预期设计',
    ],
    image: '/images/cases/tourism-yunnan.jpg',
    coverImage: '/images/cases/tourism-yunnan-cover.jpg',
    year: '2024',
  },
]
