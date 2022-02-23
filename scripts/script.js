const log = console.log.bind(console);

const ToGit = () => {
	window.location.href = "https://github.com/brendanprice2003/WebDev_Mockup";
};


document.addEventListener('DOMContentLoaded', () => {

	getWordCount();
	// document.getElementById('create').addEventListener('click', () => {
	// 	for (let i=0; i<10; i++) {
	// 		let newElement = document.createElement(`entry${i}`);
	// 		document.getElementById('container').appendChild(newElement);
	// 		newElement.style.color = 'white';
	// 		newElement.innerHTML = `loop number: ${i+1}<br>`;
	// 		newElement.addEventListener('mouseover', () => {
	// 			log(newElement.innerHTML);
	// 		});
	// 	};
	// });
});

const navUser = (index) => {

	// Navigate user to passed page
	window.location.href = `../views/sub${index}.html`;
};

const takeUserBack = () => {

	// Navigate user back a page
	window.location.href = `../views/index.html`;
};

const getWordCount = () => {

	// Get word count of div that contains assignment content
	if (document.getElementById('subTitleContent')) {
		wordsArr = document.getElementById('subTitleContent').innerHTML.trim().split(' ');
		document.getElementById('fileStatWC').innerHTML = `Word Count: ${wordsArr.length}`;
	};
};