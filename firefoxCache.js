var jq = document.createElement('script');
var cacheData = document.createElement('div');
cacheData.setAttribute('id', 'cacheData');
jq.src = 'https://code.jquery.com/jquery-3.2.1.js';
document.querySelector('html').appendChild(cacheData);
function proceed() {
  $.ajax({
    url: 'about:cache?storage=disk',
    success: function (result) {
      $('#cacheData').html(result);
      console.log(result);
    }
  });
}
proceed();