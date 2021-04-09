gIsChrome = false;
if(!window.location.href.startsWith("moz-extension:"))
  gIsChrome = !!window.chrome;

var getBrowser = function(){
  if(gIsChrome)
    return chrome;

  //firefox
  return browser;
};

var openTab = function(page){
  var url;
  if(page.startsWith("https://")){
    url = page;
  }
  else {
    if(gIsChrome)
      url = "chrome-extension://" + chrome.runtime.id + "/" + page;
    else
      url = browser.extension.getURL(page);
  }

  getBrowser().tabs.create({"url" : url});
};

getBrowser().runtime.onInstalled.addListener(function(details){
  if(details.reason == "install"){
    openTab("https://www.bart.com.hk/simple-gmail-conversation-reversal-installed/");
  } 
  else if(details.reason == "update"){
    openTab("https://www.bart.com.hk/simple-gmail-conversation-reversal-updated/");
  }
});
