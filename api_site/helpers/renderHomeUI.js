import { makeHomeSkeleton } from './makeHomeSkeleton.js'
import { makeHomeElements } from './makeHomeElements.js'
import { loader } from './loader.js';

export function renderHomeUI(dataset) {
    loader('remove');
    //both functions use these months 
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
        'No date yet'
    ];

    //this function makes the elements that only need to be rendered once
    makeHomeSkeleton(months);

    dataset.forEach(entry => {
        //if launchdate is not yet known, the launchdate month must be unknown
        if (entry.date_precision === 'half' || entry.date_precision === 'quarter') {
            entry.date_utc = '2021-13-01T00:00:00.000Z';
        };

        const launchMonth = entry.date_utc.match(/\-(.*\d)\-/)[1];
        //this function makes an li for each launch
        makeHomeElements(entry, +launchMonth, months);
    });
};