export function makeHomeSkeleton(months) {
    const currentMonth = new Date().getMonth();
    const body = document.querySelector('body');
    const mainTitle = document.createElement('h1');

    body.style.backgroundImage = "";
    mainTitle.innerHTML = 'Space<span>X</span> Launches';
    body.appendChild(mainTitle);

    //checks months that already past this year, and renders the rest
    months.map(month => {
        if (months.findIndex(item => item === month) >= currentMonth) {
            const bodyElement = document.getElementsByTagName('body');
            const monthWrapper = document.createElement('section');
            const monthName = document.createElement('h2');
            const allLaunches = document.createElement('ol');
    
            monthName.innerHTML = month;
    
            bodyElement[0].appendChild(monthWrapper);
            monthWrapper.appendChild(monthName);
            monthWrapper.appendChild(allLaunches);
        };
    });
};