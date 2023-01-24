function placeGUID(info,tab) {
    chrome.tabs.sendMessage(tab.id, "placeGUID", {frameId: info.frameId});
}

chrome.contextMenus.create({
    id: "generateGuidId",
    title: "Populate with GUID", 
    contexts:["editable"], 
});

chrome.contextMenus.onClicked.addListener(placeGUID);