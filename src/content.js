//content script
var clickedEl = null;

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16).toUpperCase()
    );
}

async function copyToTheClipboard(textToCopy){
    const el = document.createElement('textarea');
    el.value = textToCopy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

document.addEventListener("contextmenu", function(event){
    clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(clickedEl !== undefined && request === "setGuidHere") {
        clickedEl.value = uuidv4();
        sendResponse(clickedEl);
    }
    else if(clickedEl !== undefined && request === "addGuidHere") {
        clickedEl.value = clickedEl.value + uuidv4();
        sendResponse(clickedEl);
    }
    else if(request === "placeGuidClipboard") {
        copyToTheClipboard(uuidv4());
        sendResponse();
    }
});