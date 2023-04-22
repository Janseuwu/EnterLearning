const class_view_xpath = "/html/body/form/header/div[1]/nav[1]/ul/li[2]/div/div[4]";
const class_list_xpath = "/html/body/form/header/div[1]/nav[1]/ul/li[2]/div/div[4]/ul";

const class_list_search_xpath = "/html/body/form/header/div[1]/nav[1]/ul/li[2]/div/div[2]/div[1]/input";
var class_list_search = getElementByXpath(class_list_search_xpath);

class_list_search.addEventListener("input", function() {
	visible_classes = []
	let class_list = getElementByXpath(class_list_xpath);
	for (const child of class_list.children) {
		if ( child.style.display == "none" ) {} else {visible_classes.push(child.firstElementChild)}
	}
	document.addEventListener("keyup", function(event) {
		if ( event.keyCode == "13" ) {
			visible_classes[0].click();	
		};
	});	
});

function getElementByXpath(path) {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
