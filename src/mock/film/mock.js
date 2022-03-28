let Mock = require('mockjs');
let datas = {
    ishit: [
        {
            title: "可不可以你也刚好喜欢我",
            imgSrc: "https://p0.pipi.cn/mmdb/25bfd69a923f2a06d6b12dac78277e7ffdba2.jpg?imageView2/1/w/160/h/220",
            grade: 7.3,
        },
        {
            title: "神秘海域",
            imgSrc: "https://p0.pipi.cn/mmdb/25bfd69ad7c3385bf180779c8ca665bf97ce5.jpg?imageView2/1/w/160/h/220",
            grade: 8.8,
        },
        {
            title: "花束般的恋爱",
            imgSrc: "https://p0.pipi.cn/mmdb/25bfd6bec7e7e1030cb12da89b6f158d2d3ce.jpg?imageView2/1/w/160/h/220",
            grade: 9.0,
        },
        {
            title: "熊出没·重返地球",
            imgSrc: "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/160/h/220",
            grade: 9.4,
        },
        {
            title: "长津湖之水门桥",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd6be9abc7e8d3311e5bd9b6d287be0f28.png?imageView2/1/w/160/h/220",
            grade: 9.6,
        },
        {
            title: "奇迹·笨小孩",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd68de7adddddd2395b4c04f4737cd31fc.jpg?imageView2/1/w/160/h/220",
            grade: 9.5,
        },
        {
            title: "新蝙蝠侠",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69a9235bfecd8b535cb9e40b04b22831.jpg?imageView2/1/w/160/h/220",
            grade: "暂无评分",
        },
        {
            title: "四海",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd68d030ddd395bbe2ab4b3a40c81f0f19.jpg?imageView2/1/w/160/h/220",
            grade: 8.6,
        },
        {
            title: "如果有一天我将会离开",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69a02f9235bf106d6960a11ad9e9932d.jpg?imageView2/1/w/160/h/220",
            grade: "暂无评分",
        },
        {
            title: "喜羊羊与灰太狼之筐出未来",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd6be339338e5bcddd27c26c671a1e1972.png?imageView2/1/w/160/h/220",
            grade: 9.3,
        },
        {
            title: "这个杀手不太冷静",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69a9abb12f0ee7e12418459419ad84a6.jpg?imageView2/1/w/160/h/220",
            grade: 9.1,
        },
        {
            title: "好像去你的世界爱你",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd6bee7a8078ea38ea3f0ad723c82f372f.jpg?imageView2/1/w/160/h/220",
            grade: 8.8,
        },
        {
            title: "狙击手",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad5927a302fd23651ba357a97181552c5d.jpg?imageView2/1/w/160/h/220",
            grade: 9.5,
        },
        {
            title: "我们的冬奥",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69a87a3389ab407ac971b04da28b5ef8.jpg?imageView2/1/w/160/h/220",
            grade: 9.3,
        },
        {
            title: "纽约的一个雨天",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd68d807ddd3139d236b1ed85aa7743190.jpg?imageView2/1/w/160/h/220",
            grade: 8.6,
        },
        {
            title: "柳浪闻莺",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69a9abddd300bcbae6933e850faeb07c.jpg?imageView2/1/w/160/h/220",
            grade: 8.4,
        },
        {
            title: "我心飞扬",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd6be7a30fa51ba5015279c588a148728a.png?imageView2/1/w/160/h/220",
            grade: 9.1,
        },
        {
            title: "尼罗河上的惨案",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd6be5bf338338f339e7c91d016eba8d6b.jpg?imageView2/1/w/160/h/220",
            grade: 8.1,
        },
        {
            title: "密案1922",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad52fc7ef2a67cb71f7581784abb2ed70e.jpg?imageView2/1/w/160/h/220",
            grade: "暂无评分",
        },
        {
            title: "钟馗伏妖",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69ad7c0fae5bc16bd649a11c70402a3a.jpg?imageView2/1/w/160/h/220",
            grade: "暂无评分",
        },
        {
            title: "小虎墩大英雄",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd68d7a3f2af2aa230f42534752867f010.jpg?imageView2/1/w/160/h/220",
            grade: 9.3,
        },
        {
            title: "扫黑·决战",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad5927a39ab06d617898de4fac94cc7a79.jpg?imageView2/1/w/160/h/220",
            grade: 8.8,
        },
        {
            title: "卧鼠藏虫",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69ac7e2ffddd27e12340b5f430762dc7.jpg?imageView2/1/w/160/h/220",
            grade: "暂无评分",
        },
        {
            title: "妖怪手表：永远的朋友",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69a8d3c7e51bad236ebbcfd1aeb9cfa4.jpg?imageView2/1/w/160/h/220",
            grade: "暂无评分",
        },
    ],
    coming: [
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
        {
            title: "月球陨落",
            imgSrc:
                "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
            grade: "91036人想看",
        },
    ],
    classic: [
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
        {
            title: "肖申克的救赎",
            imgSrc:
                "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
            grade: 9.8,
        },
    ],
}
Mock.mock('/api/film', datas)