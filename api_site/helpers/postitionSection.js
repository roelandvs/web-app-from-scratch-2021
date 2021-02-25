export function positionSection() {
    const main = document.querySelector('main');   
    const header = document.querySelector('header');

    //if header is taller then screen the main must position lower
    if (header.offsetHeight + 250 > screen.height) {
        main.style.top = header.offsetHeight + 150 + 'px';
    } else if (window.innerWidth < 1100) {
        main.style.top = window.innerHeight - 55 + 'px';
    };
};