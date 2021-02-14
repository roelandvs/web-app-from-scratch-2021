import { 
    baseUrl,
    endpoints
 } from '../data/endpoints.js';

export function fetchAPI(endpoints) {
    const baseUrl = 'https://api.spacexdata.com/v4';

    if (typeof endpoints === 'string') {
        const spaceXDataset = fetch(baseUrl + endpoints);
        return (spaceXDataset);
    } else if (typeof endpoints === 'array') {
        const SpacexDatasets = endpoints.map(endpoint => fetch(baseUrl + endpoint));
	    return Promise.all(SpacexDatasets);
    }
};