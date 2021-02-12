import { 
    baseUrl,
    endpoints
 } from '../data/endpoints.js';

export function fetchAPI(endpoints) {
    console.log('inside fetch function');
	const SpacexDatasets = endpoints.map(endpoint => fetch(baseUrl + endpoint));
	return Promise.all(SpacexDatasets);
};