/* =========================================================
   【可修改】全站商品数据（首页 index.html 与详情页 detail.html 共用）
   - id     商品编号（详情页链接 detail.html?id=p1 会用到）
   - name   商品名       - desc   一句卖点
   - price  现价（元）    - orig   原价（元）
   - sales  销量数字      - rate   评分
   - tag    角标（不要就写空字符串）
   - img    商品主图路径（图片放在 商品图片/ 目录下）
   - link   商品详情页地址
   ========================================================= */
const PRODUCTS = [
  { id:'p1', name:'毛绒吧唧 · 奶黄表情包 5 枚装', price:39, orig:59, sales:12000, rate:4.9, tag:'人气', link:'detail.html?id=p1',
    desc:'五种表情一次收齐，包上一天换一个心情。', img:'商品图片/6c720a11c3c659f48504d4310965b765.jpg' },
  { id:'p2', name:'慢回弹捏捏 · 爱心奶黄团', price:19.9, orig:29, sales:8600, rate:4.8, tag:'新品', link:'detail.html?id=p2',
    desc:'一捏就软下来，加班桌上的解压开关。', img:'商品图片/0e2e5b800aad182114cc8c52713c4cc1.jpg' },
  { id:'p3', name:'治愈手办 · 悬浮奶黄蛙', price:69, orig:99, sales:3200, rate:4.9, tag:'现货', link:'detail.html?id=p3',
    desc:'透明支架悬浮半空，摆在桌角像在放空。', img:'商品图片/3009dc75e65d699e3ad1f9726a338fcd.jpg' },
  { id:'p4', name:'毛绒抱枕 · 笑脸奶黄', price:89, orig:129, sales:4100, rate:4.7, tag:'热卖', link:'detail.html?id=p4',
    desc:'午睡时抱住它，一整个下午都软绵绵。', img:'商品图片/a93d75b87fe1b2ab73c5c8956eca1ee2.jpg' },
  { id:'p5', name:'桌面摆件 · 抱肚大笑蛙', price:49, orig:69, sales:9300, rate:4.8, tag:'包邮', link:'detail.html?id=p5',
    desc:'抱着肚子笑出声，看一眼嘴角也会跟着翘。', img:'商品图片/067d0ff8ed69882eb5e146744168271b.jpg' },
  { id:'p6', name:'等身抱枕 · 马步奶蛙', price:169, orig:239, sales:1500, rate:4.9, tag:'限量', link:'detail.html?id=p6',
    desc:'等身高度，抱着睡、靠着追剧都刚好。', img:'商品图片/等身抱枕_马步奶蛙.png' },
  { id:'p7', name:'解压捏捏 · 眯眼奶黄团', price:22.9, orig:32, sales:2600, rate:4.8, tag:'新品', link:'detail.html?id=p7',
    desc:'一副“我累了”的表情，捏完心情真的会好。', img:'商品图片/1aae733e34603d3dfdf3c6ecd54b328d.jpg' },
  { id:'p8', name:'桌面摆件 · 乖巧刘海奶黄', price:45, orig:65, sales:1800, rate:4.7, tag:'现货', link:'detail.html?id=p8',
    desc:'趴在桌边的小可爱，安安静静陪着你。', img:'商品图片/d6fefde3993372951ffde0b9880549d5.png' },
  { id:'p9', name:'桌面摆件 · 底座款奶黄', price:59, orig:79, sales:1200, rate:4.7, tag:'治愈', link:'detail.html?id=p9',
    desc:'带底座稳稳站住，放在显示器旁不挡手。', img:'商品图片/d3fcf80504514a7fe37661c3744f092c.png' },
  { id:'p10', name:'解压捏捏 · 露齿笑奶黄', price:19.9, orig:29, sales:3600, rate:4.8, tag:'人气', link:'detail.html?id=p10',
    desc:'笑得最没心没肺的一只，压力大的时候捏它。', img:'商品图片/3b2463832fb4014ee07ed87a3e78395f.jpg' },
  { id:'p11', name:'异形抱枕 · 吉他奶蛙', price:119, orig:169, sales:900, rate:4.9, tag:'新品', link:'detail.html?id=p11',
    desc:'西装奶蛙抱着吉他，靠在床上就是个伴。', img:'商品图片/吉他抱枕_西装奶蛙.png' }
];

/* 秒杀位：引用上面的商品，改价格与已抢进度即可 */
const FLASH = [
  { id:'p2',  flashPrice:12.9,  progress:86 },
  { id:'p1',  flashPrice:26.9,  progress:72 },
  { id:'p4',  flashPrice:59.0,  progress:64 },
  { id:'p6',  flashPrice:129.0, progress:48 }
];
