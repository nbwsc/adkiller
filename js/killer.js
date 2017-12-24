"use strict";

// console.log('killer start v 0.6')

let _timeout = 1000
let killCount = 0

function _null() {}

function _log(...args) {
	console.info('ADKILLER', args)
}
let _AdAttrFeatures = {
	name: [

	],
	id: [
		"BAIDU_SSP",
		"google_ads",
		"cs_DIV_cscpv",
		"cs_CFdiv",
		"bdcsFramePicBox",
		"tcldivtf"
	],
	src: [
		"ad_ids",
		"adflag",
		"360buyimg.com",
		"pos.baidu.com"
	],
	href: [
		"3dwwwgame.com/p/redirect.php",
		"xcby888.com"
	]
}

let _AdClassFeatures = [
	"sinaads",
	"post_content_side",
	"content-ad",
	"gg300",
	"ad-widget-imageplus-sticker",
	"post_adtop_main",
	"at_item",
	"post_recommend_ad",
	"mod_ad"
]

function _check(element, attr, key) {
	return element[attr].indexOf(key) >= 0
}

function _checkIfKill(element) {

	// check class
	if (element.classList) {
		let classstr = Array.from(element.classList).join()
		for (let i = 0; i < _AdClassFeatures.length; ++i) {
			if (classstr.indexOf(_AdClassFeatures[i]) >= 0) {
				return true
			}
		}
	}
	// check string attr
	for (let i in _AdAttrFeatures) {
		if (element[i]) {
			for (let j = 0; j < _AdAttrFeatures[i].length; ++j) {
				if (element[i].indexOf(_AdAttrFeatures[i][j]) >= 0) {
					return true
				}
			}
		}
	}
	return false

}

function _isDOMElement(obj) {
	return !!(obj && typeof window !== 'undefined' && (obj === window || obj.nodeType));
}

// function _killAD(element) {
// 	element.setAttribute("style", "display:None!important")
// }
function _killAD(element) {
	function doHide() {
		let propertyName = "display";
		let propertyValue = "none";
		if (element.localName == "frame") {
			propertyName = "visibility";
			propertyValue = "hidden";
		}

		if (element.style.getPropertyValue(propertyName) != propertyValue ||
			element.style.getPropertyPriority(propertyName) != "important")
			element.style.setProperty(propertyName, propertyValue, "important");
	}

	doHide();

	new MutationObserver(doHide).observe(
		element, {
			attributes: true,
			attributeFilter: ["style"]
		}
	);
}

function _listDocument() {
	var arrElements = [];

	function findRecursively(aNode) {
		if (!aNode)
			return;
		if (_checkIfKill(aNode)) {
			killCount++
			console.log('kill ', killCount, '')
			_killAD(aNode)
		} else {
			for (var idx in aNode.childNodes) {
				findRecursively(aNode.childNodes[idx]);
			}
		}

	};

	findRecursively(document);
};

function main(callback) {
	// var iframes = document.all
	// var iframes = document.getElementsByTagName("iframe")

	// var killList = Array.from(iframes).filter(function (iframe) {
	// 	var shoudkill = false
	// 	for (let i in _killListFeature) {
	// 		if (iframe[i]) {
	// 			for (let j in _killListFeature[i]) {
	// 				if (iframe[i].indexOf(_killListFeature[i][j]) >= 0) {
	// 					shoudkill = true
	// 					break
	// 				}
	// 			}
	// 			if (shoudkill) break
	// 		}
	// 	}
	// 	return shoudkill
	// })

	// killList.forEach(_killAD)
	_listDocument()
	callback && callbak()
	if (_timeout < 1000000)
		setTimeout(main, _timeout)
	_timeout = _timeout * 2
}

setTimeout(main, 1000)