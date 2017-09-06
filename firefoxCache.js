var jq = document.createElement('script');
var cacheData = document.createElement('div');
cacheData.setAttribute('id', 'cacheData');
jq.src = 'https://code.jquery.com/jquery-3.2.1.js';
document.querySelector('html').appendChild(cacheData);

function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "about:cache?storage=disk", true);
oReq.send();
console.log(oReq.responseText);