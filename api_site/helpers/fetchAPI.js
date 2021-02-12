import { 
    baseUrl,
    endpoints
 } from '../data/endpoints.js';

export function fetchAPI() {
	const SpacexDatasets = endpoints.map(endpoint => fetch(baseUrl + endpoint));
	return Promise.all(SpacexDatasets);
};