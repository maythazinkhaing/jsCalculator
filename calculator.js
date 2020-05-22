function input(num){
	document.getElementById('textBox').innerHTML+=num;
}

function del(){
	document.getElementById('textBox').innerHTML="";
}

function back(){
	var num = document.getElementById('textBox').innerHTML;

	document.getElementById('textBox').innerHTML = num.substring(0,num.length-1);

}
function equal(){
	var num = document.getElementById('textBox').innerHTML;

	document.getElementById('textBox').innerHTML = eval(num);
}