var id = getId().id   
var oInner = document.getElementById('inner')
oInner.style.height = 200 + "px"
getData(function (res) {
	res = JSON.parse(res)
	for (var i = 0; i < res.details.length; i++) {
		if (res.details[i].id == id) {
			var html = template('template', res.details[i])
			oInner.innerHTML = html
		}
	}
})
oInner.onclick = function (ev) {
	ev = ev || event
	var target = ev.target || ev.srcElement
	if (target.nodeName == 'BUTTON') {
		var storeId = target.parentNode.children[0].getAttribute('userid')
		var price = target.parentNode.children[2].getAttribute('userprice')
		// console.log(($(target).eq(0)).parent().eq(0).children().eq(0).attr('userid'))
		console.log(storeId)
		console.log(price)
		Cookies.set(storeId, price)
		alert('加入购物车成功')
	}
}

















function getId() {
	var idStr = location.search  //?id=2&name=3
	var num = idStr.indexOf('?') + 1
	var newStr = idStr.slice(num)
	if (idStr.indexOf('&') != -1) {
		var obj = {}
		var arr = newStr.split('&')
		for (var i = 0; i < arr.length; i++) {
			var newArr = arr[i].split('=')
			obj[newArr[0]] = newArr[1] 
		}
		return obj
	}
	var obj = {}
	var arr = newStr.split("=") //[id, 2]
	obj[arr[0]] = arr[1]
	return obj
}

function getData(cb) {
	var xhr = new XMLHttpRequest()
	xhr.open('GET', '../json/details.json')
	xhr.send(null)
	xhr.onreadystatechange = function () {
		if (this.readyState == 4) {
			cb(this.response)
		}
	}
}
function getStyle(obj, param) {
  if (obj.currentStyle) {
    return obj.currentStyle[param]
  }
  return window.getComputedStyle(obj, null)[param]
}