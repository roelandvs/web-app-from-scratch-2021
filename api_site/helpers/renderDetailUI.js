export function renderDetailUI(dataset) {
    //datasets
    const launch = dataset.launchInfo;
    const launchpad = dataset.launchpadInfo;
    const payload = dataset.payloadInfo;
    const rocket = dataset.rocketInfo;

    console.log(dataset);

    const body = document.querySelector('body');
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
    const backgroundOverlay = document.createElement('div');
    const backgroundContainer = document.createElement('div');

    // making payload elements
    const payloadSection = document.createElement('section');

    // adding attr or styling
    backgroundContainer.style.backgroundImage = "url(\"" + rocket.images[0] + "\")";
    backgroundOverlay.classList.add('background-overlay');
    payloadSection.classList.add('detail-section');

    // assign content to elements
    detailTitle.innerHTML = launchNameContent;
    launchDate.innerHTML = dateParts[0];
    launchTime.innerHTML = dateParts[1].substring(0,5) + '  UTC' ;

    // header elements
    body.appendChild(header);
    header.appendChild(detailTitle);
    header.appendChild(launchDate);
    header.appendChild(launchTime);
    header.appendChild(backgroundOverlay);
    backgroundOverlay.appendChild(backgroundContainer);

    // payload section
    // rocket section
    // launchpad section

    if (launch.launch_details) {
        const launchDetails = document.createElement('p');
        launchDetails.classList.add('launch-details');
        launchDetails.innerHTML = launch.launch_details;
        header.appendChild(launchDetails);
    }
};