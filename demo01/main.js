console.log(888)
document.write('<h1>Hello World</h1>');
function aa(){
	alert(666)
}
// document.getElementById("addBtn")
console.log(document.getElementById('dd'))
document.getElementById('dd').onclick = function(){
	console.log(666)
}

document.getElementsByTagName('button')[0].onclick = aa
window.onload = function(){
	function aa(){
		alert(666)
	}
}
