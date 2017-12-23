console.log('killer start ')

var iframes = document.getElementsByTagName("iframe")
var targetArray = Array.from(iframes).filter(function(i){
	return i.src.indexOf("baidu.com") >= 0
})
console.log(targetArray)
targetArray.forEach(function(f){
	f.style.display = "none"
})