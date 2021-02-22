export function makeHomeSkeleton(months) {
    //nniet zo netjes, want er kan een launch in Jan 2022 zijn
    const currentMonth = new Date().getMonth();
    const body = document.querySelector('body');
    const mainTitle = document.createElement('h1');

    body.style.backgroundImage = "";
    mainTitle.innerHTML = 'Space<span>X</span> Launches';
    body.appendChild(mainTitle);

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