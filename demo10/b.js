module.exports = {
	click:function(a,b){
		return a + b
	},
	output:output
}


function output(){

}

output.prototype = {
	total:function(a,b){
		return a + b
	}
}

var out = new output()
console.log(out.total(3,3))