export function renderHomeUI(dataset) {
    let allLaunchMonths = [];
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
    ];

    dataset.forEach(entry => {
        const launchMonth = entry.date_utc.match(/\-(.*\d)\-/)[1];
        const monthExists = allLaunchMonths.find(item => item === launchMonth);

        if (monthExists) {
            makeHomeElements(entry, +launchMonth, months);
        } else {
            // console.log(allLaunchMonths);
            allLaunchMonths.push(launchMonth);
            makeHomeSkeleton(entry, +launchMonth, months);
        }
    })
};

function makeHomeSkeleton(dataset, month, allMonths) {
    const bodyElement = document.getElementsByTagName('body');
    const monthWrapper = document.createElement('section');
    const monthName = document.createElement('h2');
    const allLaunches = document.createElement('ol');

    monthName.innerHTML = allMonths[month - 1];

    bodyElement[0].appendChild(monthWrapper);
    monthWrapper.appendChild(monthName);
    monthWrapper.appendChild(allLaunches);

    makeHomeElements(dataset, month, allMonths);
};

function makeHomeElements(dataset, month, allMonths) {
    const allSections = document.querySelectorAll('body > section');
    const datePart = dataset.date_utc.split('T');
    const abbrMonth = allMonths[month - 1].substring(0,3);

    const entireModule = document.createElement('li');
    const launchDate = document.createElement('p');
    const launchContent = document.createElement('section');
    const launchName = document.createElement('h3');
    const launchNumber = document.createElement('p');
    const launchTime = document.createElement('p');

    allSections.forEach(singleSection => {
        if (singleSection.childNodes[0].innerText === allMonths[month - 1]) {
            launchDate.innerHTML = datePart[0].split('-')[2] + ' ' + abbrMonth;
            launchName.innerHTML = dataset.name;
            launchNumber.innerHTML = 'Launch number: ' + dataset.flight_number;
            launchTime.innerHTML = 'Launch time: ' + datePart[1].substring(0,5);
        
            singleSection.childNodes[1].appendChild(entireModule);
            entireModule.appendChild(launchDate);
            entireModule.appendChild(launchContent);
            launchContent.appendChild(launchName);
            launchContent.appendChild(launchNumber);
            launchContent.appendChild(launchTime);
        };
    });

};

// function renderElements(tag, parent, content) {
//     const element = document.createElement(tag);
//     element.innerHTML = content;
//     parent.appendChild(element);
// };