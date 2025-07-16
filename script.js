const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.section;

        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
