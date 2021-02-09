export function mergeDatasets(datasets) {
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