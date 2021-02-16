import { fetchAPI } from '../helpers/fetchAPI.js'
import { 
    turnToJSON,
    turnMultipleToJSON
 } from '../utils/turnToJSON.js'
import { 
    overViewEndpoint,
    currentEndpoint,
} from '../data/endpoints.js'
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
            removeAllChildNodes(document.getElementsByTagName('body')[0]);
            let singleEndpoint;

            fetchAPI(currentEndpoint, id)
                .then(turnToJSON)
                .then(response => {
                    singleEndpoint = response;
                    const detailEndpoints = [
                        '/payloads/' + response.payloads[0],
                        '/launchpads/' + response.launchpad,
                        '/rockets/' + response.rocket,
                    ];
                    return fetchAPI(response, response.id, detailEndpoints);
                })
                .then(turnMultipleToJSON)
                .then(console.log)
        }
    });
};