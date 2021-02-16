import { makeHomeSkeleton } from './makeHomeSkeleton.js'
import { makeHomeElements } from './makeHomeElements.js'
import { addNoDataText } from './addNoLaunchText.js'

export function renderHomeUI(dataset) {
    // let allLaunchMonths = [];
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

    makeHomeSkeleton(months);

    dataset.forEach(entry => {
        //if launchdate is not yet known, the launchdate month must be unknown
        if (entry.date_precision === 'half' || entry.date_precision === 'quarter') {
            entry.date_utc = '2021-13-01T00:00:00.000Z';
        };

        const launchMonth = entry.date_utc.match(/\-(.*\d)\-/)[1];
        makeHomeElements(entry, +launchMonth, months);
    });

    addNoDataText();
};