const body = document.querySelector('body');

export function renderDetailUI(dataset) {
    const launch = dataset.launchInfo;
    const rocket = dataset.rocketInfo;
    const launchNameContent = 
        launch.launch_name.includes(' (v1.0)') ? 
        launch.launch_name.replace(' (v1.0)', '') : 
        launch.launch_name;
    const dateParts = launch.launch_date_utc.split('T');
    
    // making header elements
    const header = document.createElement('header');
    const detailTitle = document.createElement('h1');
    const launchDate = document.createElement('p');
    const launchTime = document.createElement('p');
    const imgContainer = document.createElement('div');
    const backgroundOverlay = document.createElement('div');
    const backgroundContainer = document.createElement('div');

    // adding attr or styling
    backgroundContainer.style.backgroundImage = "url(\"" + rocket.images[0] + "\")";
    backgroundOverlay.classList.add('background-overlay');
    imgContainer.classList.add('img-container');

    // assign content to elements
    detailTitle.innerHTML = launchNameContent;
    launchDate.innerHTML = dateParts[0];
    launchTime.innerHTML = dateParts[1].substring(0,5) + '  UTC' ;

    // append elements
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
    header.appendChild(backgroundOverlay);
    backgroundOverlay.appendChild(backgroundContainer);
    
    if (launch.launch_links.reddit.recovery) {
        const redditHref = 
        launch.launch_links.reddit.campaign ?
        launch.launch_links.reddit.campaign :
        launch.launch_links.reddit.recovery;
        const redditLink = document.createElement('a');
        const redditImg = document.createElement('img');
        redditLink.setAttribute('href', redditHref);
        redditLink.setAttribute('target', '_blank');
        redditImg.setAttribute('src', 'img/reddit-icon.svg');
        imgContainer.appendChild(redditLink);
        redditLink.appendChild(redditImg);
    };

    if (launch.launch_links.wikipedia) {
        const wikiLink = document.createElement('a');
        const wikiImg = document.createElement('img');
        wikiLink.setAttribute('href', launch.launch_links.wikipedia);
        wikiLink.setAttribute('target', '_blank');
        wikiImg.setAttribute('src', 'img/wiki-icon.svg');
        imgContainer.appendChild(wikiLink);
        wikiLink.appendChild(wikiImg)
    };

    return dataset;
    // renderPayloadSection(dataset);
    // renderRocketSection(dataset);
};

export function renderPayloadSection(dataset) {
    // const launch = dataset.launchInfo;
    // const rocket = dataset.rocketInfo;
    // const launchpad = dataset.launchpadInfo;
    const payload = dataset.payloadInfo;
    const main = document.createElement('main');   

    console.log(payload);

    // making payload elements
    const payloadSection = document.createElement('section');
    const payloadTitle = document.createElement('h2');
    const payloadName = document.createElement('p');
    const payloadDataList = document.createElement('ul');

    const weight = document.createElement('li');
    const customer = document.createElement('li');
    const manufacturer = document.createElement('li');
    const nationality = document.createElement('li');
    const orbit = document.createElement('li');
    const type = document.createElement('li');

    // adding attributes
    payloadSection.classList.add('detail-section');

    // adding content
    payloadTitle.innerHTML = 'Payload';
    payloadName.innerHTML = payload.payload_name;
    weight.innerHTML = 'weigth ' + '<span>' + payload.mass_kg + ' KG' + '</span>';
    customer.innerHTML = 'customer ' + '<span>' + payload.customers[0] + '</span>';
    manufacturer.innerHTML = 'manufacturer ' + '<span>' + payload.manufacturers[0] + '</span>';
    nationality.innerHTML = 'nationality ' + '<span>' + payload.nationality + '</span>';
    orbit.innerHTML = 'orbit ' + '<span>' + payload.orbit + '</span>';
    type.innerHTML = 'type ' + '<span>' + payload.type + '</span>';

    // append elements
    body.appendChild(main);
    main.appendChild(payloadSection);
    payloadSection.appendChild(payloadTitle);
    payloadSection.appendChild(payloadName);
    payloadSection.appendChild(payloadDataList);
    payloadDataList.appendChild(customer);
    payloadDataList.appendChild(manufacturer);
    payloadDataList.appendChild(nationality);
    payloadDataList.appendChild(weight);
    payloadDataList.appendChild(orbit);
    payloadDataList.appendChild(type);
};