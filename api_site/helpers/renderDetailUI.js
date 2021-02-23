export function renderDetailUI(dataset) {
    //datasets
    const launch = dataset.launchInfo;
    const rocket = dataset.rocketInfo;
    const body = document.querySelector('body');
    const launchNameContent = 
        launch.launch_name.includes(' (v1.0)') ? 
        launch.launch_name.replace(' (v1.0)', '') : 
        launch.launch_name;
    const redditHref = 
        launch.launch_links.reddit.campaign ?
        launch.launch_links.reddit.campaign :
        launch.launch_links.reddit.recovery;
    const dateParts = launch.launch_date_utc.split('T');
    
    // making header elements
    const header = document.createElement('header');
    const detailTitle = document.createElement('h1');
    const launchDate = document.createElement('p');
    const launchTime = document.createElement('p');
    const imgContainer = document.createElement('div');
    const redditLink = document.createElement('a');
    const redditImg = document.createElement('img');
    const backgroundOverlay = document.createElement('div');
    const backgroundContainer = document.createElement('div');

    // adding attr or styling
    backgroundContainer.style.backgroundImage = "url(\"" + rocket.images[0] + "\")";
    backgroundOverlay.classList.add('background-overlay');
    imgContainer.classList.add('img-container');
    redditLink.setAttribute('href', redditHref);
    redditLink.setAttribute('target', '_blank');
    redditImg.setAttribute('src', 'img/reddit-icon.svg');

    // assign content to elements
    detailTitle.innerHTML = launchNameContent;
    launchDate.innerHTML = dateParts[0];
    launchTime.innerHTML = dateParts[1].substring(0,5) + '  UTC' ;

    // header elements
    body.appendChild(header);
    header.appendChild(detailTitle);
    header.appendChild(launchDate);
    header.appendChild(launchTime);

    if (launch.launch_details) {
        const launchDetails = document.createElement('p');
        launchDetails.classList.add('launch-details');
        launchDetails.innerHTML = launch.launch_details;
        header.appendChild(launchDetails);
    };

    header.appendChild(imgContainer);
    imgContainer.appendChild(redditLink);
    redditLink.appendChild(redditImg)

    if (launch.launch_links.wikipedia) {
        const wikiLink = document.createElement('a');
        const wikiImg = document.createElement('img');
        wikiLink.setAttribute('href', launch.launch_links.wikipedia);
        wikiLink.setAttribute('target', '_blank');
        wikiImg.setAttribute('src', 'img/wiki-icon.svg');
        imgContainer.appendChild(wikiLink);
        wikiLink.appendChild(wikiImg)
    };

    header.appendChild(backgroundOverlay);
    backgroundOverlay.appendChild(backgroundContainer);

    renderLaunchSection(dataset);
};

function renderLaunchSection(dataset) {
    const launchpad = dataset.launchpadInfo;
    const payload = dataset.payloadInfo;

    // making payload elements
    const payloadSection = document.createElement('section');
    payloadSection.classList.add('detail-section');
};