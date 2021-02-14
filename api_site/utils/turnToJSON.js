export function turnToJSON(response) {
    if (typeof response !== 'array') {
        return response.json();
    } else if (typeof response === 'array') {
        return Promise.all(response.map(response => response.json()));
    }
};