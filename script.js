// التأثيرات عند التمرير
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.animation = "slideIn 1.5s forwards";
        }
    });
});
