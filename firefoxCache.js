
var data;
var jq = document.createElement("script");
jq.src = "https://code.jquery.com/jquery-3.2.1.js";
document.querySelector("html").appendChild(jq);
function proceed () {
	$.ajax({ url: 'about:cache?storage=disk', success: function(data) { console.log(data); } });
}
proceed();