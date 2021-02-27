export function loader(state) {
    if (state === 'active') {
        const body = document.querySelector('body');
        const loader = document.createElement('div');
        const rocketIcon = document.createElement('img');
        const marsIcon = document.createElement('img');
        const waitText = document.createElement('p');

        loader.classList.add('loader-state');
        rocketIcon.setAttribute('src', 'img/rocket-icon.png');
        marsIcon.setAttribute('src', 'img/mars-icon.svg');
        waitText.innerHTML = 'Fetching data...';

        body.appendChild(loader);
        loader.appendChild(waitText);
        loader.appendChild(rocketIcon);
        loader.appendChild(marsIcon);
    } else {
        const loader = document.querySelector('.loader-state')
        loader.remove();
    }
};