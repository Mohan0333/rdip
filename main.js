//<!-----TASK 1----->
function dis(val){
document.getElementById("display").value+=val;
}
function eql(){
var x=document.getElementById("display").value;
var y=eval(x);
document.getElementById("display").value=y;
}
function clr(){
	document.getElementById("display").value="";
}
function sqrt(){
	var x=document.getElementById("display").value;
	 document.getElementById("display").value=Math.sqrt(x);
}
function abs(){
	var x=document.getElementById("display").value;
	document.getElementById("display").value=Math.abs();
}



//<-----TASK 2----->
function validateForm(){
	return check();
}
function check() {
function nameCheck(){
	var name = document.getElementById("name").value;
	var n_valid = name.charAt(0);
	var x=/^[0-9]$/;
	if (n_valid.value.match(x)) {
		alert("start Name with alphabet");
		return false;
	}
	else{
		return true;
	}
}
function numCheck(){
	var number = document.getElementById("number").value;
	var num_valid = /^[0-9]{10}$/;
	if((number.value.match(num_valid))){
		return true;
	}
	else{
	alert("enter valid phone number");
	return false;
	}
}

	
function emailCheck(){	
	var email=document.getElementById("email").value;
	var email_valid=  /.+@.+\..+/;
	if(email.value.match(email_valid)){
		return true;
	}
	else{
	alert("enter valid email");
	return false;
	}
}
}


//<-------TASK 3------>
function palindromeCheck(){
var str1 = document.getElementById("palindrome").value;


 var re = /[^A-Za-z0-9]/g;
 str2 = str1.toLowerCase().replace(re, '');
 var len = str2.length;
 for (var i = 0; i < len/2; i++) {
   if (str2[i] !== str2[len - 1 - i]) {
       document.getElementById("1").innerHTML="Given string is not a palindrome.";
	   return false;
   }
 else{
	 document.getElementById("1").innerHTML="Given string is a palindrome.";
 return true;
}
 }
}
	
function anagramCheck(){
	
	var str1 = document.getElementById("string").value;
	var str2 = document.getElementById("anagram").value;
	var a = str1.split(' ').join('');
	var b = str2.split(' ').join('');
	var x = a.toLowerCase().split('').sort().join('');
	var y = b.toLowerCase().split('').sort().join('');
	if(x == y){
		document.getElementById("2").innerHTML = "It is a anagram";
		return true;
	}
	else{
		
		document.getElementById("2").innerHTML = "It is a not a anagram";
		return false;
	}
}

//<-------TASK 4------>
function game(){
var num1=Math.floor(Math.random()*1001);
var num2=Math.floor(Math.random()*1001);
var a=num1%3;
var b=num2%3;
document.getElementById("input1").value=num1;
document.getElementById("input2").value=num2;

if(a==0&&b==1)
{
	document.getElementById("object1").value="Human";
	document.getElementById("object2").value="Cockroach";
	document.getElementById("winner").value="Human";
}

if(a==1&&b==0)
{
	document.getElementById("object1").value="Cockroach";
	document.getElementById("object2").value="Human";
	document.getElementById("winner").value="Human";
}

if(a==0&&b==2)
{
	document.getElementById("object1").value="Human";
	document.getElementById("object2").value="Nuclear_bomb";
	document.getElementById("winner").value="Nuclear_bomb";
}

if(a==2&&b==0)
{
	document.getElementById("object1").value="Nuclear_bomb";
	document.getElementById("object2").value="Human";
	document.getElementById("winner").value="Nuclear_bomb";
}
if(a==1&&b==2)
{
	document.getElementById("object1").value="Cockroach";
	document.getElementById("object2").value="Nuclear_bomb";
	document.getElementById("winner").value="Cockroach";
}

if(a==2&&b==1)
{
	document.getElementById("object1").value="Nuclear_bomb";
	document.getElementById("object2").value="Cockroach";
	document.getElementById("winner").value="Cockroach";
}

if(a==0&&b==0)
{
	document.getElementById("object1").value="Human";
	document.getElementById("object2").value="Human";
	document.getElementById("winner").value="Tie";
}

if(a==1&&b==1)
{
	document.getElementById("object1").value="Cockroach";
	document.getElementById("object2").value="Cockroach";
	document.getElementById("winner").value="Tie";
}

if(a==2&&b==2)
{
	document.getElementById("object1").value="Nuclear_bomb";
	document.getElementById("object2").value="Nuclear_bomb";
	document.getElementById("winner").value="Tie";
}
}