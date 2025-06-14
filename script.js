// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// 滚动动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// 初始化功能卡片动画
document.querySelectorAll('.feature-card').forEach((card) => {
    card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    observer.observe(card);
});


document.querySelector('.download-button').addEventListener('click', () => {
    window.location.href = '#download'; // 替换为实际下载链接
});

// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
    document.body.style.transform = 'translateY(0)';
});

// 修复联系我们点击事件
document.querySelector('.contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('qrModal').style.display = 'flex';
});

// 新增键盘关闭支持
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('qrModal').style.display = 'none';
    }
});

// 初始化团队卡片动画
document.querySelectorAll('.team-card').forEach(card => {
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {
    // 关闭按钮功能
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.getElementById('qrModal');

    if(closeBtn && modal) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            modal.style.display = 'none';
        });
    }

    // 其他事件监听...
});