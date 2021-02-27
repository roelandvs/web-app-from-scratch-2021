export function loader(state) {
    const body = document.querySelector('body');
    if (state === 'active') {
        const loader = document.createElement('div');
        const loadImg = document.createElement('img');

        loader.classList.add('loader-state');
        loadImg.setAttribute('src', 'img/reddit-icon.svg');

        body.appendChild(loader);
        loader.appendChild(loadImg);
    } else {
        const loader = document.querySelector('.loader-state')
        loader.remove();
    }

    // state === 'active'
    //   ? loader.classList.add('loading')
    //   : loader.classList.remove('loading');
};