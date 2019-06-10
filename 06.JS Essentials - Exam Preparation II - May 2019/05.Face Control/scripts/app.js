function getData() {
	let input = JSON.parse(document.querySelector('textarea').value);
	let peopleInElement = document.querySelector('#peopleIn p');
	let blacklistElement = document.querySelector('#blacklist p');
	let peopleOutElement = document.querySelector('#peopleOut p');
	let lastElement = input.pop();
	let peopleIn = [];
	let blackList = [];
	let peopleOut = [];

	for (let person of input) {
		let action = person['action'];
		let currentName = {
			firstName: person['firstName'],
			lastName: person['lastName']
		};

		switch (action) {
			case 'peopleIn':
				if (!blackList.find(p => p.firstName === currentName['firstName'] &&
					p.lastName === currentName['lastName'])) {
					peopleIn.push(currentName);
				}
				break;
			case 'peopleOut':
				if (peopleIn.find(p => p.firstName === currentName['firstName'] &&
					p.lastName === currentName['lastName'])) {
					let index = peopleIn.findIndex(p => p.firstName === currentName['firstName'] &&
						p.lastName === currentName['lastName']);

					peopleIn.splice(index, 1);
					peopleOut.push(currentName);
				}
				break;
			case 'blacklist':
				if (peopleIn.find(p => p.firstName === currentName['firstName'] &&
					p.lastName === currentName['lastName'])) {
					let index = peopleIn.findIndex(p => p.firstName === currentName['firstName'] &&
						p.lastName === currentName['lastName']);

					peopleIn.splice(index, 1);
					peopleOut.push(currentName);
				}
				blackList.push(currentName);
				break;
		}
	}
	let output = {};

	output['peopleIn'] = peopleIn;
	output['peopleOut'] = peopleOut;
	output['blacklist'] = blackList;

	if (lastElement['action'] !== '' && lastElement['criteria'] !== '') {
		let criteria = lastElement['criteria'];
		output[lastElement.action] = output[lastElement.action].sort((a, b) => a[criteria].localeCompare(b[criteria]));
	}
	peopleInElement.textContent = output.peopleIn.map(x => JSON.stringify(x)).join(' ');
	peopleOutElement.textContent = output.peopleOut.map(x => JSON.stringify(x)).join(' ');
	blacklistElement.textContent = output.blacklist.map(x => JSON.stringify(x)).join(' ');
}
