$(function() {
    
    $("#sort").click(function(){
    	Dosort();
    });

    $("#reset").click(function(){ 
    	Doreset();
    });
});

function Dosort(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
			console.log(response);
		});
	});
}

function Doreset(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "Godbye"}, function(response) {
			console.log(response);
		});
	});
}
