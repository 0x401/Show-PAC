var bg=chrome.extension.getBackgroundPage();
var domains=bg.arr;
for(var key in domains) document.write(domains[key]+"</br>");