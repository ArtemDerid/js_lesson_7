function putTextIntoList() {
	var liItems = document.querySelectorAll('ul>li');
	var i = 0;
	for (i; i < liItems.length; i++) {
		var currentElement = liItems[i];
		currentElement.innerHTML = 'Some text';
	}

	alert('There are ' + i + ' items in the list');

}