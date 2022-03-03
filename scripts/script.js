const log = console.log.bind(console);

document.addEventListener('DOMContentLoaded', () => {
	getWordCount(document.getElementById('subTitleContent'), document.getElementById('fileStatWC'));
});

// @document.element {body}, @document.element {countElement}
var getWordCount = (bodyElement, countElement) => {

	// Get word count of div that contains assignment content
	if (bodyElement) {
		wordsArr = bodyElement.innerHTML.trim().split(' ');
		countElement.innerHTML = `Word Count: ${wordsArr.length-1}`;
	};

	// Count the amount of dependencies (refer to function commenting)
	getDepCount(document.getElementById('fileStatDeps'));
};
// @document.element {countElement}
var getDepCount = (countElement) => {
	// First number below is amount of HTML files that exist
	// We multiply by two for the amount of CSS files that exist for each HTML file(s)
	// We then add one for this script file
	// This is not an automatic way to get depedencies by any means, but it is the only on the client-side since this environment does not have filesystems
	countElement.innerHTML = `Dependencies: ${(5*2)+1}`;
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