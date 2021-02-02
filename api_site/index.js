fetchAPI('https://api.spacexdata.com/v4/launches/upcoming');

function fetchAPI(url) {
	const APIAnswer = fetch(url);
	APIAnswer.then(answer => {
		turnToJSON(answer);
	});
};

function turnToJSON(answer) {
	const answerJSON = answer.json();
	answerJSON.then(answer => {
        let launch = answer;
        makeElement(launch);
	})
};

function makeElement(launchContent) {
    launchContent.forEach(item => {
        const liItem = document.createElement('LI');
        liItem.innerHTML = item.date_local + ': ' + item.name;
        document.body.appendChild(liItem);
    })
};