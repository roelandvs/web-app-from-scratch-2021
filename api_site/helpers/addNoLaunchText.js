export function addNoDataText() {
    const allSectionOl = document.querySelectorAll('body > section > ol');

    allSectionOl.forEach(singleOl => {
        const noDateNode = document.createElement('p');
        noDateNode.innerHTML = 'No launches planned...';

        if (!singleOl.hasChildNodes()) {
            singleOl.replaceWith(noDateNode);
        }
    })
};