const CLASS_LIST_XPATH = "/html/body/form/header/div[1]/nav[1]/ul/li[2]/div/div[4]/ul";
const CLASS_SEARCH_XPATH = "/html/body/form/header/div[1]/nav[1]/ul/li[2]/div/div[2]/div[1]/input";
let classListSearch = getElementByXpath(CLASS_SEARCH_XPATH);

/*
// We want to press the "stay-on-site" button whenever it pops up.
// This is to prevent the user from getting logged out when inactive for too long
var observer = new MutationObserver(() => {
	// Whenever a change happens, try and locate the button
	var stayBtn = document.body.querySelector("#rnd8pj1um");
	// If the button is present, click it
	if ( stayBtn ) {
		stayBtn.click();
		console.log("Automatic logout prevented!");
	}
});
// Observe every change in the DOM
// TODO: Don't detect every change in the entire DOM, but rather a more specific element for more effeciency
observer.observe(document, {childList: true});
*/

classListSearch.addEventListener("keydown", event => {

	// We want to execute some code every time the enter key is pressed
	// inside the searchbox...
	if (event.key === "Enter") {
		console.log("class enter");
		// First we find all the visible children of the list of
		// classes under the search box. The page's code just hides the
		// one's that don't match the search query.
		let classList = getElementByXpath(CLASS_LIST_XPATH);
		const visibleClasses = findVisibleChildren(classList);

		// Then we extract the link inside the list element. The DOM
		// tree looks something like:
		//
		// <ul>
		// 	<li>
		// 		<a>click me to go to the first subject<a>
		// 	</li>
		// 	<li>
		// 		<a>click me to go to the second subject<a>
		// 	</li>
		//	...
		// </ul>
		//
		// The variable classList contains a reference to <ul> and the
		// variable visibleClasses now contains the a list of the <li>
		// elements that are visible. The variable innerLink will come
		// to contain a reference to a <a> element.
		const innerLink = visibleClasses[0].firstElementChild;
		innerLink.click();
	}
});

function findVisibleChildren(element) {
	let visibleChildren = [];
	for (const child of element.children) {
		if (child.style.display !== "none") {
			visibleChildren.push(child);
		}
	}
	return visibleChildren;
}

function getElementByXpath(path) {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
