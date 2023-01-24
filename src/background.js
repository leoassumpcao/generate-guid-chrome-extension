function setGUID(info,tab) {
    if (info && info.menuItemId)
    {
        switch (info.menuItemId)
        {
            case "setGuidGenerateGuidId":
                {
                    chrome.tabs.sendMessage(tab.id, "setGuidHere", {frameId: info.frameId});
                    break;
                }
            case "addGuidGenerateGuidId":
                {
                    chrome.tabs.sendMessage(tab.id, "addGuidHere", {frameId: info.frameId});
                    break;
                }
            case "placeGuidClipboardGenerateGuidId":
                {
                    chrome.tabs.sendMessage(tab.id, "placeGuidClipboard", {frameId: info.frameId});
                    break;
                }
            default:
                break;
        }
    }
}

chrome.contextMenus.create({
    id: "setGuidGenerateGuidId",
    title: "Set GUID here", 
    contexts:["editable"], 
});
chrome.contextMenus.create({
    id: "addGuidGenerateGuidId",
    title: "Add GUID here", 
    contexts:["editable"], 
});
chrome.contextMenus.create({
    id: "placeGuidClipboardGenerateGuidId",
    title: "Place GUID on Clipboard", 
    contexts:["editable"], 
});

chrome.contextMenus.onClicked.addListener(setGUID);