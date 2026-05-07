// 产品列表
const products = [
  {
    img: "./img/清香乌龙茶.png",
    desc: "清香乌龙茶",
  },
  {
    img: "./img/红茶玛奇朵.png",
    desc: "红茶玛奇朵",
  },
  {
    img: "./img/波霸奶茶.png",
    desc: "波霸奶茶",
  },
  {
    img: "./img/四季春.png",
    desc: "四季春+珍波椰",
  },
  {
    img: "./img/牛乳红茶.png",
    desc: "牛乳红茶",
  },
];

// 当前产品索引
let currentProductIndex = 0;

// 更新轮播图
function updateCarousel() {
  const item = products[currentProductIndex];
  document.getElementById("carousel-image").src = item.img;
  document.getElementById("product-desc-text").innerText = item.desc;
  document.getElementById("product-index").innerText =
    `${currentProductIndex + 1} / ${products.length}`;
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

function autoUpdateCarousel() {
  switchProduct(1);
  setTimeout(autoUpdateCarousel, 1500);
}
