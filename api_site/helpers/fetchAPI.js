export function fetchAPI() {
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