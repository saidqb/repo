function urloe_link(urloe_key){
window.onload = function() {
var links, i, le;
const set_urloe = document.querySelector('#urloe_shorten');
links = set_urloe.getElementsByTagName('a');
for (i = 0, le = links.length; i < le; i++) {
links[i].href = "http://urloe.com/api/v1?key=" + urloe_key + "&url=" + links[i].href;
}
}
}
