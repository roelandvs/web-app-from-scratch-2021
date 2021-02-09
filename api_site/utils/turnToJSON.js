export function turnToJSON(response) {
    return Promise.all(response.map(response => response.json()));
};