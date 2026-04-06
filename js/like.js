// 点赞数
let likeCount = 0;

// 是否点赞
let isLiked = false;

// 切换点赞状态
function toggleLike() {
    const heart = document.getElementById('heart-icon');
    const countElement = document.getElementById('like-count');
    if (isLiked) {
        likeCount--;
        heart.textContent = '🩶';
        heart.classList.remove('liked');
    } else {
        likeCount++;
        heart.textContent = '❤️';
        heart.classList.add('liked');
    }
    isLiked = !isLiked;
    countElement.textContent = `${likeCount} 人点赞`;
}