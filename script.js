const vigia = new IntersectionObserver((elementos) => {
    elementos.forEach((elemento) => {
        if (elemento.isIntersecting) {
            elemento.target.classList.add('aparecer');
        } else {
            elemento.target.classList.remove('aparecer');
        }
    });
}, {
    rootMargin: '50px 0px 50px 0px',
    threshold: 0.15
});

const caixasParaAnimar = document.querySelectorAll('.main-box, .second-box');

caixasParaAnimar.forEach((caixa) => vigia.observe(caixa));