document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // 監聽捲動事件，動態改變導覽列樣式
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    console.log("Portfolio v1.1 - Jeff Yeh Loaded.");
});