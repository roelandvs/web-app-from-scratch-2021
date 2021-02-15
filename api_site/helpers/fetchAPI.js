import { turnToJSON } from '../utils/turnToJSON.js'

export function fetchAPI(endpoint, id, ) {
    const baseUrl = 'https://api.spacexdata.com/v4';

    if (!id) {
        const spaceXDataset = fetch(baseUrl + endpoint);
        return (spaceXDataset);
    } else {
        const currentDataset = fetch(baseUrl + endpoint + id);
        return currentDataset;
    };
};