export function renderDetailUI(dataset) {
    //datasets
    const launch = dataset.launchInfo;
    const launchpad = dataset.launchpadInfo;
    const payload = dataset.payloadInfo;
    const rocket = dataset.rocketInfo;

    console.log(dataset);

    const launchNameContent = 
        launch.launch_name.includes(' (v1.0)') ? 
        launch.launch_name.replace(' (v1.0)', '') : 
        launch.launch_name;
    const body = document.querySelector('body');
    const header = document.createElement('header')
    const detailTitle = document.createElement('h1');
    const backgroundOverlay = document.createElement('div');
    const backgroundContainer = document.createElement('div');

    detailTitle.innerHTML = launchNameContent;

    backgroundOverlay.classList.add('background-overlay');
    backgroundContainer.style.backgroundImage = "url(\"" + rocket.images[0] + "\")";

    // header elements
    body.appendChild(header);
    header.appendChild(detailTitle);
    header.appendChild(backgroundOverlay);
    backgroundOverlay.appendChild(backgroundContainer);
};