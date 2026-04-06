// 页面枚举
const PageEnums = {
    welcomePage: 'welcome',
    productPage: 'product',
    interactPage: 'interact',
}

// 跳转页面
function goToPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById('page-' + pageName).style.display = 'flex';
}