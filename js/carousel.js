// 产品列表
const products = [
    {
        img: "../img/青团波波.png",
        desc: "青团波波：艾草清香 x 软糯麻薯"
    },
    {
        img: "../img/樱花轻乳.png",
        desc: "樱花轻乳：春日樱花 x 云顶轻乳"
    },
    {
        img: "../img/龙井拿铁.png",
        desc: "龙井拿铁：明前龙井 x 醇厚拿铁"
    }
];

// 当前产品索引
let currentProductIndex = 0;

// 更新轮播图
function updateCarousel() {
    const item = products[currentProductIndex];
    document.getElementById('carousel-image').src = item.img;
    document.getElementById('product-desc-text').innerText = item.desc;
    document.getElementById('product-index').innerText = `${currentProductIndex + 1} / ${products.length}`;
}

// 切换产品
function switchProduct(direction) {
    currentProductIndex += direction;
    if (currentProductIndex < 0) {
        currentProductIndex = products.length - 1;
    } else if (currentProductIndex >= products.length) {
        currentProductIndex = 0;
    }
    updateCarousel();
}