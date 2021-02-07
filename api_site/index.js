fetchAPI()
    .then(turnToJSON)
    .then(makeElement)
    // .then(console.log)

function fetchAPI() {
    const baseUrl = 'https://api.spacexdata.com';
    const endpoints = [
        '/v4/launches/upcoming', 
        '/v4/launches/past'
    ];
	const SpacexDatasets = endpoints.map(endpoint => fetch(baseUrl + endpoint));
	return Promise.all(SpacexDatasets);
};

function turnToJSON(response) {
    return Promise.all(response.map(response => response.json()));
};

function makeElement(launchContent) {
    launchContent[0].forEach(item => {
        const liItem = document.createElement('LI');
        liItem.innerHTML = item.date_local + ': ' + item.name;
        document.body.appendChild(liItem);
    })
};