export function makeHomeElements(dataset, month, allMonths) {
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