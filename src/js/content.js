const CLASS_LIST_XPATH = "/html/body/form/header/div[1]/nav[1]/ul/li[2]/div/div[4]/ul";
const CLASS_SEARCH_XPATH = "/html/body/form/header/div[1]/nav[1]/ul/li[2]/div/div[2]/div[1]/input";

var classListSearch = getElementByXpath(CLASS_SEARCH_XPATH);

classListSearch.addEventListener("input", function() {
	visibleClasses = []
	var classList = getElementByXpath(CLASS_LIST_XPATH);
	for (const child of classList.children) {
		if ( child.style.display == "none" ) {} else {visibleClasses.push(child.firstElementChild)}
	}
	document.addEventListener("keyup", function(event) {
		if ( event.keyCode == "13" ) {
			visibleClasses[0].click();	
		};
	});	
});

function getElementByXpath(path) {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
