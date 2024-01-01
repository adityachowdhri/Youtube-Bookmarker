//Listen to any update to tab system and see if the most recent tab is a youtube tab 
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")){
    const queryParameters = tab.url.split("?")[1]
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });

  }
});