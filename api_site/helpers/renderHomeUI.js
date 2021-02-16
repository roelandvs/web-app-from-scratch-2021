export function renderHomeUI(dataset) {
    // let allLaunchMonths = [];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
        'No date yet'
    ];

    makeHomeSkeleton(months);

    dataset.forEach(entry => {
        //if launchdate is not yet known, the launchdate month must be unknown
        if (entry.date_precision === 'half' || entry.date_precision === 'quarter') {
            entry.date_utc = '2021-13-01T00:00:00.000Z';
        };

        const launchMonth = entry.date_utc.match(/\-(.*\d)\-/)[1];
        makeHomeElements(entry, +launchMonth, months);
    });
};

function makeHomeSkeleton(months) {
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

function makeHomeElements(dataset, month, allMonths) {
    const allSections = document.querySelectorAll('body > section');
    const dateParts = dataset.date_utc.split('T');
    const abbrMonth = allMonths[month - 1].substring(0,3);
    const launchNameContent = 
        dataset.name.includes(' (v1.0)') ? 
        dataset.name.replace(' (v1.0)', '') : 
        dataset.name;
                              
    const entireModule = document.createElement('li');
    const detailLink = document.createElement('a');
    const launchDate = document.createElement('p');
    const launchContent = document.createElement('section');
    const launchName = document.createElement('h3');
    const launchNumber = document.createElement('p');
    const launchTime = document.createElement('p');

    detailLink.setAttribute('href', '#launches/' + dataset.id);

    allSections.forEach(singleSection => {
        if (singleSection.childNodes[0].innerText === allMonths[month - 1]) {

            if (dataset.date_precision === 'half' || dataset.date_precision === 'quarter') {
                launchDate.innerHTML = ' - ';
            } else if (dataset.date_precision === 'month') {
                launchDate.innerHTML = ' - ' + abbrMonth;
            } else {
                launchDate.innerHTML = dateParts[0].split('-')[2] + ' ' + abbrMonth;
            }
                
            launchName.innerHTML = launchNameContent;
            launchNumber.innerHTML = 'Launch number: ' + '<span>' + dataset.flight_number + '</span>';
            launchTime.innerHTML = 'Launch time: ' + '<span>' + dateParts[1].substring(0,5) + '</span>';
        
            singleSection.childNodes[1].appendChild(entireModule);
            entireModule.appendChild(detailLink);
            detailLink.appendChild(launchDate);
            detailLink.appendChild(launchContent);
            launchContent.appendChild(launchName);
            launchContent.appendChild(launchNumber);
            launchContent.appendChild(launchTime);
        };
    });
};