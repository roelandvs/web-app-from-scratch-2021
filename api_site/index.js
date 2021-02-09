fetchAPI()
    .then(turnToJSON)
    .then(mergeDatasets)
    // .then(filterEntries)
    // .then(makeElements)
    .then(console.log)

function fetchAPI() {
    const baseUrl = 'https://api.spacexdata.com/v4';
    const endpoints = [
        '/launches/upcoming', 
        '/payloads',
        '/launchpads',
        '/rockets',
    ];
	const SpacexDatasets = endpoints.map(endpoint => fetch(baseUrl + endpoint));
	return Promise.all(SpacexDatasets);
};

function turnToJSON(response) {
    return Promise.all(response.map(response => response.json()));
};

function mergeDatasets(datasets) {
    const launchesDataset = datasets[0];
    const payloadsDataset = datasets[1];
    const launchpadsDataset = datasets[2];
    const rocketsDataset = datasets[3];
    let completeData = [];

    launchesDataset.map(entry => {
        const payloadMatch = payloadsDataset.find(item => item.id === entry.payloads[0]);
        const launchpadMatch = launchpadsDataset.find(item => item.id === entry.launchpad);
        const rocketMatch = rocketsDataset.find(item => item.id === entry.rocket);

        if (launchpadMatch || rocketMatch) {
            const launchMatch = entry;
            const mergedItem = {launchMatch, payloadMatch, launchpadMatch, rocketMatch};
            completeData.push(mergedItem);
        }
    });

    return completeData;
};

function filterEntries(datasets) {
    return datasets.map(item => {
        let cleanObject = {
            launchInfo: {},
            payloadInfo: {},
            launchpadInfo: {},
            rocketInfo: {}
        };

        return cleanObject;
    });
};

function makeElement(launchContent) {
    launchContent[0].forEach(item => {
        const liItem = document.createElement('LI');
        liItem.innerHTML = item.date_local + ': ' + item.name;
        document.body.appendChild(liItem);
    })
};