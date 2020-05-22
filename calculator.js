function input(num){
	document.getElementById('textBox').value+=num;
}

function del(){
	document.getElementById('textBox').value="";
}

function back(){
	var num = document.getElementById('textBox').value;

	document.getElementById('textBox').value = num.substring(0,num.length-1);

}
function equal(){
	var num = document.getElementById('textBox').value; 
	document.getElementById('textBox').value = eval(num);

	
}