const log = console.log.bind(console);

document.addEventListener('DOMContentLoaded', () => {
	getWordCount(document.getElementById('subTitleContent'), document.getElementById('fileStatWC'));
});

// @document.element {body}, @document.element {countElement}
var getWordCount = (body, countElement) => {
	// Get word count of div that contains assignment content
	if (body) {
		wordsArr = body.innerHTML.trim().split(' ');
		countElement.innerHTML = `Word Count: ${wordsArr.length}`;
	};
};

var navUser = (index) => {
	// Navigate user to passed page
	window.location.href = `../views/sub${index}.html`;
};
var takeUserBack = () => {
	// Navigate user back to home page page
	window.location.href = `../views/index.html`;
};
var ToGit = () => {
	// Navigate user to GitHub respective repository
	window.location.href = "https://github.com/brendanprice2003/WebDev_Mockup";
};