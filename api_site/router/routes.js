import { fetchAPI } from '../helpers/fetchAPI.js'
import { turnToJSON } from '../utils/turnToJSON.js'
import { endpoints } from '../data/endpoints.js'
import { mergeDatasets } from '../helpers/mergeDatasets.js'
import { filterEntries } from '../helpers/filterEntries.js'

export function handleRoutes() {
    routie({
        launches: () => {

        fetchAPI(endpoints[0])
            .then(turnToJSON)
            // .then(makeHomeUI)
            .then(console.log)
        },
        'launches/:id': id => {

        }
    });
} 