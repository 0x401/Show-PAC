var arr=[];

chrome.webRequest.onResponseStarted.addListener(
  function(info) {
	  for( var key in info){
		  if(info.ip=="127.0.0.1") {
			  //console.log(info.url);
			 // var arr =info.url.split("/");
			 var domain =info.url.split("/")[2];
			  if(!arr.includes(domain)){
				  arr.unshift(domain);
			  }
			  //console.log(arr[2]);
			  }
		  }
	//console.log(arr);
	//chrome.browserAction.setBadgeText({text: arr.length.toString()});
    },
  {urls: ["<all_urls>"]},
  []
  );
