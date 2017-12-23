console.log('killer start v 0.2')
// alert('hello killer ')
var _timeout = 500

var _killList = {
	CLASS:[
		"sinaads",
		"post_content_side",
		"content-ad"
	],
	ID:[
		"BAIDU_SSP"
	],
	SRC:[
		"ad_ids",
		"adflag",
		"360buyimg.com/jzt/tpl/sspPic.html?ad_ids=2418:5&adflag=0&clkmn=&expose="
	]
}
function _isDOMElement(obj) {
	return !!(obj && typeof window !== 'undefined' && (obj === window || obj.nodeType));
}

function _killAD(element) {
	if(_isDOMElement(element)){
		element.setAttribute("style", "display:None!important")
	}
}

function 

function kill(callback) {
	var iframes = document.getElementsByTagName("iframe")

	var targetArray = Array.from(iframes).filter(function (i) {
		var shoudkill = false
		if (i.name.indexOf("sinaadtk_sandbox_id") >= 0) {
			shoudkill = true
		} else if (i.src.indexOf("baidu.com") >= 0) {
			shoudkill = true
		}
		return shoudkill
	})

	targetArray.forEach(_killAD)
	setTimeout(kill, _timeout)
	_timeout = _timeout * 2
	callback && callbak()
}

kill()