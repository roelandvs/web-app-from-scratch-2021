export function makeElements(launchContent) {
    // console.log(launchContent)
    launchContent[0].forEach(item => {
        const liItem = document.createElement('LI');
        liItem.innerHTML = item.date_local + ': ' + item.name;
        document.body.appendChild(liItem);
    })
};