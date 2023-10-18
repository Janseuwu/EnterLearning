/* 
	We want to block the GET request for the script with the autologout function.
	This is done with the webRequest API:
	https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest
*/

// This specifies that we want to block requests
const extraInfoSpec = ["blocking"]; 

// We only want to block requests matching this pattern
const filter = {urls: ["https://cdn.itslearning.com/v3.142.3.446/application/autologout/index.bundle.js"]};

// Listener for webRequests
browser.webRequest.onBeforeRequest.addListener(
	function() { return {cancel: true} }, // Block request
	filter,	
	extraInfoSpec
);
