var myHeading = document.querySelector('h1');
//myHeading.innerHTML = 'Hello world!';
/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.attributes('src');
	myImage.setAttribute('src','images/rotation2.png');
}
var myBtn = document.querySelector('button');
function setUserName()
{
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML='WelCome Back, '+myName;
}
if(!localStorage.getItem('name'))
{
	setUserName();
}
else{
	var storeName=localStorage.getItem('name');
	myHeading.innerHTML="WelCame Back, "+storeName;
}
myBtn.onclick=function(){
	setUserName();
}