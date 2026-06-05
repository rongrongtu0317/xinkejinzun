// 产品数据 — 替换真实产品图片时修改 image 字段
// 图片路径约定：/images/products/<slug>.jpg（放在 public/images/products/ 目录下）

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  slug: string
  name: string
  category: string
  categorySlug: string
  tagline: string
  description: string
  features: string[]
  specs: ProductSpec[]
  colors: string[]
  applications: string[]
  image: string          // 替换为真实产品图路径
  heroImage: string      // 详情页大图
  badge?: string         // 可选徽章文字，如"热销"
}

export const productCategories = [
  { slug: 'standard',    name: '彩石金属瓦常规款',   desc: '标准规格，适用于住宅、别墅、商业建筑等多种屋面场景' },
  { slug: 'extended',    name: '彩石金属瓦加长定制款', desc: '加长型设计，减少搭接，提升施工效率，适合大面积屋面' },
  { slug: 'accessories', name: '彩石金属瓦配件',      desc: '屋脊瓦、檐口板、山墙板、泛水板等完整配件系统' },
  { slug: 'color-plans', name: '屋面配色方案',        desc: '匹配不同建筑风格的色彩搭配方案' },
  { slug: 'libo',        name: '丽波圆弧型彩石金属瓦', desc: '圆弧波纹造型，柔和线条，强调屋面层次与立体感' },
  { slug: 'milan',       name: '米兰彩石金属瓦',      desc: '简洁现代瓦型，适合别墅、民宿、文旅建筑、高端住宅' },
  { slug: 'rainbow',     name: '彩虹罗马型金属瓦',    desc: '经典罗马瓦造型，立体起伏，强调传统屋面美感与装饰性' },
  { slug: 'custom',      name: '更多定制瓦型',        desc: '波浪型、方格型、鱼鳞型等多种造型，支持定制开发' },
]

export const products: Product[] = [
  {
    slug: 'classic-roman',
    name: '彩虹罗马型彩石金属瓦',
    category: '彩虹罗马型金属瓦',
    categorySlug: 'rainbow',
    tagline: '经典罗马造型，赋予屋面立体层次与建筑装饰感',
    description:
      '彩虹罗马型采用传统罗马瓦廓形，配合高温烧结彩砂表层，呈现出自然石材质感与金属材料性能的完美结合。适用于欧式住宅、别墅庄园及各类追求建筑装饰效果的屋面项目。',
    features: [
      '立体罗马廓形，提升屋面层次感',
      '高温烧结彩砂，质感自然耐候',
      '镀铝锌钢板基材，轻质高强',
      '配件系统完整，安装便捷高效',
      '多种颜色可选，支持定制',
    ],
    specs: [
      { label: '产品类型',   value: '彩石金属瓦' },
      { label: '产品尺寸',   value: '1340mm × 420mm（参考值）' },
      { label: '常规厚度',   value: '0.4mm' },
      { label: '单片重量',   value: '约 2.8kg' },
      { label: '每平方用量', value: '约 2.08 片/㎡' },
      { label: '基材',       value: '镀铝锌钢板' },
      { label: '表面材料',   value: '高温烧结天然彩砂' },
      { label: '适用坡度',   value: '根据项目屋面结构确定' },
      { label: '适用场景',   value: '住宅、别墅、商业建筑、公共建筑' },
      { label: '颜色',       value: '支持定制' },
      { label: '配套系统',   value: '主瓦、脊瓦、檐口板、山墙板、端盖、泛水板、固定件' },
    ],
    colors: ['岩石灰', '砂岩棕', '陶土红', '墨石黑', '森林绿'],
    applications: ['欧式住宅', '别墅庄园', '商业建筑', '旧房翻新'],
    image: '/images/products/classic-roman.jpg',
    heroImage: '/images/products/classic-roman-hero.jpg',
    badge: '经典款',
  },
  {
    slug: 'libo-arc',
    name: '丽波圆弧型彩石金属瓦',
    category: '丽波圆弧型彩石金属瓦',
    categorySlug: 'libo',
    tagline: '圆弧柔美，赋予屋面温润流动的线条感',
    description:
      '丽波圆弧型以柔和的圆弧波纹为设计语言，突破传统瓦片的硬朗感，为建筑屋面带来温润、流动的视觉体验。尤其适合民宿、文旅、乡村住宅等追求柔和建筑美感的场景。',
    features: [
      '圆弧波纹廓形，线条柔和自然',
      '彩砂覆层均匀，色彩饱满稳定',
      '金属基材，轻质不增加屋面负荷',
      '适合新建与翻新项目',
      '配件齐全，安装简便',
    ],
    specs: [
      { label: '产品类型',   value: '彩石金属瓦' },
      { label: '产品尺寸',   value: '1340mm × 420mm（参考值）' },
      { label: '常规厚度',   value: '0.4mm' },
      { label: '单片重量',   value: '约 2.8kg' },
      { label: '每平方用量', value: '约 2.08 片/㎡' },
      { label: '基材',       value: '镀铝锌钢板' },
      { label: '表面材料',   value: '高温烧结天然彩砂' },
      { label: '适用场景',   value: '民宿、文旅建筑、乡村住宅、别墅' },
      { label: '颜色',       value: '支持定制' },
      { label: '配套系统',   value: '主瓦、脊瓦、配件全系' },
    ],
    colors: ['岩石灰', '砂岩棕', '砖红', '森林绿', '海岸蓝'],
    applications: ['民宿客栈', '文旅建筑', '乡村住宅', '别墅屋面'],
    image: '/images/products/libo-arc.jpg',
    heroImage: '/images/products/libo-arc-hero.jpg',
  },
  {
    slug: 'milan',
    name: '米兰彩石金属瓦',
    category: '米兰彩石金属瓦',
    categorySlug: 'milan',
    tagline: '简洁现代，彰显当代建筑的纯粹美学',
    description:
      '米兰型以简洁利落的线条为核心，摒弃繁复装饰，强调建筑材料本身的质感与秩序感。适合追求现代极简风格的高端住宅、精品别墅及商业办公建筑。',
    features: [
      '简洁线条廓形，现代建筑美学',
      '彩砂表面，自然石材质感',
      '高强度金属基材',
      '色彩选择多样，匹配多种建筑风格',
      '安装效率高，配件系统齐全',
    ],
    specs: [
      { label: '产品类型',   value: '彩石金属瓦' },
      { label: '产品尺寸',   value: '1340mm × 420mm（参考值）' },
      { label: '常规厚度',   value: '0.4mm' },
      { label: '单片重量',   value: '约 2.8kg' },
      { label: '每平方用量', value: '约 2.08 片/㎡' },
      { label: '基材',       value: '镀铝锌钢板' },
      { label: '表面材料',   value: '高温烧结天然彩砂' },
      { label: '适用场景',   value: '高端住宅、精品别墅、商业建筑' },
      { label: '颜色',       value: '支持定制' },
      { label: '配套系统',   value: '主瓦、脊瓦、配件全系' },
    ],
    colors: ['墨石黑', '岩石灰', '砂岩棕', '暖白'],
    applications: ['高端住宅', '精品别墅', '商业办公', '公共建筑'],
    image: '/images/products/milan.jpg',
    heroImage: '/images/products/milan-hero.jpg',
    badge: '热门',
  },
  {
    slug: 'standard-basic',
    name: '彩石金属瓦常规款',
    category: '彩石金属瓦常规款',
    categorySlug: 'standard',
    tagline: '稳定可靠，适用于多种屋面场景的基础产品',
    description:
      '常规款彩石金属瓦以成熟工艺与稳定品质为核心，覆盖住宅、别墅、商业建筑等主流屋面应用场景。产品结构经过多轮验证，在耐候、防腐、轻质方面表现稳定。',
    features: [
      '成熟工艺，产品质量稳定',
      '标准规格，便于备货与施工',
      '彩砂表层色彩持久',
      '金属基材轻质耐用',
      '适用场景广泛',
    ],
    specs: [
      { label: '产品类型',   value: '彩石金属瓦' },
      { label: '产品尺寸',   value: '1340mm × 420mm（参考值）' },
      { label: '常规厚度',   value: '0.4mm' },
      { label: '单片重量',   value: '约 2.8kg' },
      { label: '每平方用量', value: '约 2.08 片/㎡' },
      { label: '基材',       value: '镀铝锌钢板' },
      { label: '表面材料',   value: '高温烧结天然彩砂' },
      { label: '适用场景',   value: '住宅、别墅、商业建筑、公共建筑、旧房改造' },
      { label: '颜色',       value: '支持定制' },
      { label: '配套系统',   value: '主瓦、脊瓦、配件全系' },
    ],
    colors: ['岩石灰', '砂岩棕', '陶土红', '墨石黑', '森林绿', '海岸蓝'],
    applications: ['住宅屋面', '别墅改造', '商业建筑', '公共建筑', '旧房翻新'],
    image: '/images/products/standard-basic.jpg',
    heroImage: '/images/products/standard-basic-hero.jpg',
  },
  {
    slug: 'extended-custom',
    name: '彩石金属瓦加长定制款',
    category: '彩石金属瓦加长定制款',
    categorySlug: 'extended',
    tagline: '加长设计，减少搭接，提升大面积屋面施工效率',
    description:
      '加长定制款专为大面积屋面项目设计，通过延长瓦片尺寸减少搭接数量，从而降低渗漏风险并提升整体施工效率。适合大型住宅社区、商业综合体及海外工程项目。',
    features: [
      '加长尺寸，减少搭接，降低渗漏风险',
      '施工效率提升，人工成本优化',
      '大面积屋面视觉效果更整洁',
      '基材与表层工艺与常规款一致',
      '支持定制规格',
    ],
    specs: [
      { label: '产品类型',   value: '彩石金属瓦（加长定制款）' },
      { label: '产品尺寸',   value: '定制规格（以项目需求为准）' },
      { label: '常规厚度',   value: '0.4mm' },
      { label: '基材',       value: '镀铝锌钢板' },
      { label: '表面材料',   value: '高温烧结天然彩砂' },
      { label: '适用场景',   value: '大型住宅社区、商业综合体、海外工程' },
      { label: '颜色',       value: '支持定制' },
      { label: '配套系统',   value: '主瓦、脊瓦、配件全系' },
      { label: '起订量',     value: '以项目需求为准，请联系咨询' },
    ],
    colors: ['岩石灰', '砂岩棕', '陶土红', '墨石黑'],
    applications: ['大型住宅社区', '商业综合体', '工业厂房', '海外工程'],
    image: '/images/products/extended-custom.jpg',
    heroImage: '/images/products/extended-custom-hero.jpg',
    badge: '定制款',
  },
  {
    slug: 'accessories',
    name: '彩石金属瓦配件系统',
    category: '彩石金属瓦配件',
    categorySlug: 'accessories',
    tagline: '完整配件体系，支撑屋面系统整体性能',
    description:
      '完整的配件系统是彩石金属瓦屋面解决方案的重要组成部分。包括脊瓦、檐口板、山墙板、端盖、泛水板、收边件、固定件等，与主瓦材质一致，保证屋面整体性能与美观性。',
    features: [
      '脊瓦：屋脊处防水封口',
      '檐口板：檐口收边与排水引导',
      '山墙板：侧面收边与防水',
      '泛水板：节点防水处理',
      '固定件：专用安装扣件',
      '材质与主瓦一致，耐候防腐',
    ],
    specs: [
      { label: '产品类型', value: '屋面系统配件' },
      { label: '主要配件', value: '脊瓦、檐口板、山墙板、端盖、泛水板、固定件' },
      { label: '基材',     value: '镀铝锌钢板（与主瓦一致）' },
      { label: '表面',     value: '彩砂覆层 / 耐候涂层' },
      { label: '颜色',     value: '与主瓦颜色匹配定制' },
      { label: '说明',     value: '配件规格需与主瓦型号匹配，请联系确认' },
    ],
    colors: ['与主瓦颜色匹配'],
    applications: ['全系主瓦配套使用'],
    image: '/images/products/accessories.jpg',
    heroImage: '/images/products/accessories-hero.jpg',
  },
]

// 常见问题数据
export const faqs = [
  {
    q: '彩石金属瓦适合哪些建筑类型？',
    a: '彩石金属瓦适用于住宅、别墅、商业建筑、公共建筑、文旅建筑等多种场景，也适用于旧房翻新与海外工程项目。',
  },
  {
    q: '是否支持颜色定制？',
    a: '支持多种颜色定制，可根据建筑设计风格、墙面颜色和项目环境进行选型建议。请提供项目信息联系我们获取色卡与建议。',
  },
  {
    q: '旧房翻新能否使用彩石金属瓦？',
    a: '可以。彩石金属瓦轻质特性使其非常适合旧房翻新场景，不会显著增加原有建筑屋面结构负荷。具体施工方案需结合实际屋面结构确认。',
  },
  {
    q: '产品参数是否可以定制？',
    a: '常规产品尺寸为参考规格，特殊规格项目支持定制开发。请联系我们提供项目需求，由技术团队给出具体方案建议。',
  },
  {
    q: '如何获取产品报价？',
    a: '请通过官网联系表单、电话或微信/WhatsApp 联系我们，提供项目地区、建筑类型、屋面面积及色彩偏好，我们将及时提供报价与选型建议。',
  },
  {
    q: '是否提供安装指导？',
    a: '提供产品选型建议、安装技术说明与施工指导文件。对于大型工程项目，可根据需要提供技术支持服务，请联系洽谈具体合作方式。',
  },
  {
    q: '产品是否支持出口海外？',
    a: '可以。我们为多个海外工程项目提供过产品供应与技术支持，可根据目标市场要求提供相关资料与报价。',
  },
  {
    q: '样品如何申请？',
    a: '可联系我们申请产品样品，样品用于了解产品质感、颜色与工艺，方便项目决策。请提供联系方式与项目信息以便安排。',
  },
]
