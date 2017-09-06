
var data;
var cacheData = document.createElement("cacheData");
jq.src = "https://code.jquery.com/jquery-3.2.1.js";
document.querySelector("html").appendChild(jq);
document.querySelector("html").appendChild(cacheData);
function proceed () {
	$.ajax({ url: 'about:cache?storage=disk', success: function(data) { $("cacheData").html(result); } });
}
proceed();