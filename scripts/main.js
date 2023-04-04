var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
//alert('马卖菜');

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/luckyimage.jpg') {
      myImage.setAttribute ('src','images/test2.png');
    } else {
      myImage.setAttribute ('src','images/luckyimage.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }


  myButton.onclick = function() {
    setUserName();
  }