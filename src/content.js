//content script
var clickedEl = null;

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16).toUpperCase()
    );
}

document.addEventListener("contextmenu", function(event){
    clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(clickedEl !== undefined && request === "placeGUID") {
        clickedEl.value = uuidv4();
        sendResponse(clickedEl);
    }
});