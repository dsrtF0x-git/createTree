let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

let container = document.querySelector('.container');

function domTree(obj) {
	let ulItem = document.createElement('ul');

	for (let key in obj) {
		if (Object.keys(key).length === 0) {
			return;
		}
		let listItem = document.createElement('li');
		listItem.textContent = key;

		let hasChild = domTree(obj[key]);
		if (hasChild) {
			listItem.append(hasChild);
		}
		ulItem.append(listItem);
	}
	return ulItem;
}

function createTree(container, data) {
	container.append(domTree(data));
}

createTree(container, data);