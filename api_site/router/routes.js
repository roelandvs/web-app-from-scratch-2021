import { fetchAPI } from '../helpers/fetchAPI.js'
import { turnToJSON } from '../utils/turnToJSON.js'
import { overViewEndpoint } from '../data/endpoints.js'
import { mergeDatasets } from '../helpers/mergeDatasets.js'
import { filterEntries } from '../helpers/filterEntries.js'

export function handleRoutes() {
    routie({
        launches: () => {

        fetchAPI(overViewEndpoint)
            .then(turnToJSON)
            .then(console.log)
        },
        'launches/:id': id => {

        }
    });
} 