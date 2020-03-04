var oUl = document.getElementById('rec-ul')


getData(function (res) {
	res = JSON.parse(res)
	var html = template('template', res)
	// console.log(html)
	oUl.innerHTML = html
})

oUl.oncllick = function (ev) {
	ev = ev || event
	target = ev.target || ev.srcElement
	console.log(target)
	console.log(1)
}




























function getData(cb) {
	var xhr = new XMLHttpRequest()
	xhr.open('GET', './json/index.json')
	xhr.send(null)
	xhr.onreadystatechange = function () {
		if (this.readyState == 4) {
			cb(this.response)
		}
	}
}

