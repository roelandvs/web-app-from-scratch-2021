import { 
    turnToJSON,
    turnMultipleToJSON
} from '../utils/turnToJSON.js'
import { 
    overViewEndpoint,
    currentEndpoint,
} from '../data/endpoints.js'
import { 
    renderHeader,
    renderPayloadSection,
    renderRocketSection,
    renderLaunchPadSection
} from '../helpers/renderDetailUI.js'
import { loader } from '../helpers/loader.js'
import { fetchAPI } from '../helpers/fetchAPI.js'
import { renderHomeUI } from '../helpers/renderHomeUI.js'
import { removeAllChildNodes } from '../helpers/removeContent.js'
import { filterEntries } from '../helpers/filterEntries.js'
import { positionSection } from '../helpers/postitionSection.js'
import { addNoDataText } from '../helpers/addNoLaunchText.js'

export function handleRoutes() {
    routie({
        'launches': () => {
            removeAllChildNodes(document.getElementsByTagName('body')[0]);
            loader('active');
            fetchAPI(overViewEndpoint)
                .then(turnToJSON)
                .then(renderHomeUI)
                .then(addNoDataText)
        },
        'launches/:id': id => {
            let singleEndpoint;
            let detailEndpoints;
            removeAllChildNodes(document.getElementsByTagName('body')[0]);
            loader('active');
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
                            '/launchpads/' + response.launchpad,
                            '/rockets/' + response.rocket,
                        ];
                    };
                    return fetchAPI(response, response.id, detailEndpoints);
                })
                .then(turnMultipleToJSON)
                .then(response => {
                    return filterEntries(singleEndpoint, response);
                })
                .then(renderHeader)
                .then(response => {
                    if (response.payloadInfo) {
                        renderPayloadSection(response);
                    };
                    return response;
                })
                .then(renderRocketSection)
                .then(renderLaunchPadSection)
                .then(positionSection)
        }
    });
};