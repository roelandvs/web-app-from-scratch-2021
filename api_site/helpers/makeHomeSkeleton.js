export function makeHomeSkeleton(months) {
    let currentMonth = new Date().getMonth();

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
        }
    })
};