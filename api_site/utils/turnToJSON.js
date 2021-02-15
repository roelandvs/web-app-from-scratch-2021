export function turnToJSON(response) {
    return response.json();
};

export function turnMultipleToJSON(response) {
    return Promise.all(response.map(response => response.json()));
}