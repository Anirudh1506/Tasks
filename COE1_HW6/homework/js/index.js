function visitLink(page) {
	let pages = JSON.parse(localStorage.getItem("pages")) || {};
	if (!pages[page]) {
	  pages[page] = 0;
	}
	pages[page]++;
	localStorage.setItem("pages", JSON.stringify(pages));
  }
function viewResults() {
	let pages = JSON.parse(localStorage.getItem("pages")) || {};
	let results = "";
	for (let page in pages) {
	  results += `You visited ${page}: ${pages[page]} times<br>`;
	}
	let resultElement = document.createElement("div");
	resultElement.innerHTML = results;
	resultElement.style.textAlign = "center";
	document.body.appendChild(resultElement);
	localStorage.removeItem("pages");
  }
  
	