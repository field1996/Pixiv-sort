var base = new Array();
window.onload = function () {
	base = new Array();
	var LItag = document.getElementsByClassName("image-item");
	//var counts = LItag[0].getElementsByClassName("bookmark-count");
	for(var i = 0; i < LItag.length;i++){
		var v = LItag[i];
		base.push(v);
	}
	alert('stend by ready');
};


var getLi = function(){
	var array = [].concat(base);
	array.sort(function(a,b){
		var i = a.getElementsByClassName("bookmark-count");
		var j = b.getElementsByClassName("bookmark-count");
		if(i.length != 0){
				i = i[0].textContent;
			}else{
				i = 0;
			}
			if(j.length != 0){
				j = j[0].textContent;
			}else{
				j = 0;
			}
			i = Number(i);
			j = Number(j);
		if( i > j ) return -1;
		if( i < j ) return 1;
		return 0;
	});
	console.log(array);
	sort(array);
}

var sort = function(array){
	var ULtag = document.getElementsByClassName("_image-items");
	console.log(ULtag);
	var el = ULtag[0];
	
	el.innerHTML = "";
	
	var fragment = document.createDocumentFragment();
	
	for(var i=0; i < array.length; i++){
		var li = document.createElement('li');
		li = array[i];
		fragment.appendChild(li);
	}
	// 最後に追加！
	el.appendChild(fragment);
}

var reset = function(base){
	var ULtag = document.getElementsByClassName("_image-items");
	console.log(base);
	var el = ULtag[0];
	
	el.innerHTML = "";
	
	var fragment = document.createDocumentFragment();
	
	for(var i=0; i < base.length; i++){
		var li = document.createElement('li');
		li = base[i];
		fragment.appendChild(li);
	}
	// 最後に追加！
	el.appendChild(fragment);
}

chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
		if (request.greeting == "hello"){
			getLi()
			sendResponse()
		}
	    if (request.greeting == "Godbye"){
			reset(base)
			sendResponse()
		}
	});