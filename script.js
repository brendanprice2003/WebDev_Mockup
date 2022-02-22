const log = console.log.bind(console);

const ToGit = () => {
	window.location.href = "https://github.com/brendanprice2003/Ass.1WebDev";
};


document.addEventListener('DOMContentLoaded', () => {

	document.getElementById('create').addEventListener('click', () => {
		for (let i=0; i<10; i++) {
			let newElement = document.createElement(`entry${i}`);
			document.getElementById('container').appendChild(newElement);
			newElement.style.color = 'white';
			newElement.innerHTML = `loop number: ${i+1}<br>`;
			newElement.addEventListener('mouseover', () => {
				log(newElement.innerHTML);
			});
		};
	});
});