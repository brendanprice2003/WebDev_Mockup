const log = console.log.bind(console);

const ToGit = () => {
	window.location.href = "https://github.com/brendanprice2003/WebDev_Mockup";
};


document.addEventListener('DOMContentLoaded', () => {

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
	window.location.href = `file:///C:/xampp/htdocs/Ass.1WebDev/sub${index}.html`;
};