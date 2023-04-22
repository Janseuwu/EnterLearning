const CLASS_LIST_XPATH = "/html/body/form/header/div[1]/nav[1]/ul/li[2]/div/div[4]/ul";
const CLASS_SEARCH_XPATH = "/html/body/form/header/div[1]/nav[1]/ul/li[2]/div/div[2]/div[1]/input";

let classListSearch = getElementByXpath(CLASS_SEARCH_XPATH);

classListSearch.addEventListener("keydown", event => {
	if (event.keyCode === 13) {
		let classList = getElementByXpath(CLASS_LIST_XPATH);
		const visibleClasses = findVisibleChildren(classList);
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
