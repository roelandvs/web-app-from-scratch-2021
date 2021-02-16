import { 
    turnToJSON,
    turnMultipleToJSON
} from '../utils/turnToJSON.js'
import { 
    overViewEndpoint,
    currentEndpoint,
} from '../data/endpoints.js'
import { fetchAPI } from '../helpers/fetchAPI.js'
import { renderHomeUI } from '../helpers/renderHomeUI.js'
import { removeAllChildNodes } from '../helpers/removeContent.js'
import { mergeDatasets } from '../helpers/mergeDatasets.js'
import { filterEntries } from '../helpers/filterEntries.js'

export function handleRoutes() {
    routie({
        launches: () => {
            fetchAPI(overViewEndpoint)
                .then(turnToJSON)
                .then(renderHomeUI)
        },
        'launches/:id': id => {
            let singleEndpoint;
            let detailEndpoints;
            removeAllChildNodes(document.getElementsByTagName('body')[0]);
            fetchAPI(currentEndpoint, id)
                .then(turnToJSON)
                .then(response => {
                    singleEndpoint = response;
                    if (response.payloads[0]) {
                        detailEndpoints = [
                            '/payloads/' + response.payloads[0],
                            '/launchpads/' + response.launchpad,
                            '/rockets/' + response.rocket,
                        ];
                    } else {
                        detailEndpoints = [
                            // '/payloads/' + response.payloads[0],
                            '/launchpads/' + response.launchpad,
                            '/rockets/' + response.rocket,
                        ];
                    };
                    return fetchAPI(response, response.id, detailEndpoints);
                })
                .then(turnMultipleToJSON)
                .then(response => {
                    return filterEntries(singleEndpoint, response)
                })
                .then(console.log)
        }
    });
};