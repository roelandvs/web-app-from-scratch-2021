import { fetchAPI } from './helpers/fetchAPI.js'
import { turnToJSON } from './utils/turnToJSON.js'
import { mergeDatasets } from './helpers/mergeDatasets.js'
import { filterEntries } from './helpers/filterEntries.js'

fetchAPI()
    .then(turnToJSON)
    .then(mergeDatasets)
    .then(filterEntries)
    // .then(makeElements)
    .then(console.log)

// function fetchAPI() {
//     const baseUrl = 'https://api.spacexdata.com/v4';
//     const endpoints = [
//         '/launches/upcoming', 
//         '/payloads',
//         '/launchpads',
//         '/rockets',
//     ];
// 	const SpacexDatasets = endpoints.map(endpoint => fetch(baseUrl + endpoint));
// 	return Promise.all(SpacexDatasets);
// };

// function turnToJSON(response) {
//     return Promise.all(response.map(response => response.json()));
// };

// function mergeDatasets(datasets) {
//     const launchesDataset = datasets[0];
//     const payloadsDataset = datasets[1];
//     const launchpadsDataset = datasets[2];
//     const rocketsDataset = datasets[3];
//     let completeData = [];

//     launchesDataset.map(entry => {
//         const payloadMatch = payloadsDataset.find(item => item.id === entry.payloads[0]);
//         const launchpadMatch = launchpadsDataset.find(item => item.id === entry.launchpad);
//         const rocketMatch = rocketsDataset.find(item => item.id === entry.rocket);

//         if (launchpadMatch || rocketMatch) {
//             const launchMatch = entry;
//             const mergedItem = {launchMatch, payloadMatch, launchpadMatch, rocketMatch};
//             completeData.push(mergedItem);
//         }
//     });

//     return completeData;
// };

// function filterEntries(datasets) {
//     return datasets.map(item => {
//         let cleanObject = {
//             launchInfo: {
//                 launch_date: item.launchMatch.date_local,
//                 launch_date_precision: item.launchMatch.date_precision,
//                 launch_number: item.launchMatch.flight_number,
//                 launch_name: item.launchMatch.name,
//                 launch_details: item.launchMatch.details,
//             },
//             payloadInfo: item.payloadMatch ? {
//                 customers: item.payloadMatch.customers,
//                 dragon: item.payloadMatch.dragon,
//                 manufacturers: item.payloadMatch.manufacturers,
//                 mass_kg: item.payloadMatch.mass_kg,
//                 payload_name: item.payloadMatch.name,
//                 nationality: item.payloadMatch.nationalities,
//                 payload_name: item.payloadMatch.name,
//                 orbit: item.payloadMatch.orbit,
//                 type: item.payloadMatch.type,
//             } : null,
//             launchpadInfo: {
//                 launchpad_name: item.launchpadMatch.name,
//                 launchpad_name_full: item.launchpadMatch.full_name,
//                 launchpad_details: item.launchpadMatch.details,
//                 launch_attempts: item.launchpadMatch.launch_attempts,
//                 launch_successes: item.launchpadMatch.launch_successes,
//                 region: item.launchpadMatch.region,
//                 location: item.launchpadMatch.locality,
//             },
//             rocketInfo: {
//                 rocket_name: item.rocketMatch.name,
//                 rocket_mass_kg: item.rocketMatch.mass.kg,
//                 rocket_height: item.rocketMatch.height,
//                 rocket_succes_pct: item.rocketMatch.success_rate_pct,
//                 boosters: item.rocketMatch.boosters,
//                 cost_per_launch: item.rocketMatch.cost_per_launch,
//                 rocket_description: item.rocketMatch.description,
//                 rocket_diameter_meters: item.rocketMatch.diameter.meters,
//                 first_flight: item.rocketMatch.first_flight,
//                 payload_weights: item.rocketMatch.payload_weights,
//                 images: item.rocketMatch.flickr_images,
//                 engine: {
//                     engine_layout: item.rocketMatch.engines.layout,
//                     engine_number: item.rocketMatch.engines.number,
//                     engine_layout: item.rocketMatch.engines.layout,
//                 },
//                 stages: {
//                     stages_number: item.rocketMatch.stages,
//                     stages_first: item.rocketMatch.first_stage,
//                     stages_second: item.rocketMatch.second_stage,
//                 }
//             }
//         };

//         return cleanObject;
//     });
// };

// function makeElements(launchContent) {
//     // console.log(launchContent)
//     launchContent[0].forEach(item => {
//         const liItem = document.createElement('LI');
//         liItem.innerHTML = item.date_local + ': ' + item.name;
//         document.body.appendChild(liItem);
//     })
// };