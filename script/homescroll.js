var leftSide = document.querySelector('.animation1-wrapper-left');
var left = document.querySelector('.animation1-left');
var rightSide = document.querySelector('.animation1-wrapper-right');
var leftLine = leftSide.querySelector('hr');
var rightLine = rightSide.querySelector('hr');
var anime = document.querySelector('.anime');
leftSide.style.transform = "translateX(-120%)";
leftSide.style.color = "hsl(0, 0%, 17%)";
leftSide.style.backgroundColor = 'white';
leftSide.style.boxShadow = '0px 0px 45px rgba(78, 81, 144, 0.15)';
left.style.backgroundColor = 'hsl(0, 0%, 100%)';
leftLine.style.backgroundColor = 'hsl(0, 0%, 17%)';
rightSide.style.transform = "translateX(120%)";
rightLine.style.transform = "translateX(30%)";
leftLine.style.transform = "translateX(-30%)";
if (pageYOffset > 700) {
    leftSide.style.transform = "translateX(0%)";
    rightSide.style.transform = "translateX(0%)";
}
if (pageYOffset >= 1900) {
    anime.style.transform = 'rotate(45deg) scaleY(0) scaleX(10)';
}
var onScrollFunc = function () {
    if (pageYOffset >= 700 && pageYOffset < 1000) {
        var x = 1000 - pageYOffset;
        var percent =  Math.floor(x * 100 / 300);
        leftSide.style.transform = 'translateX(-' + percent + '%)';
        rightSide.style.transform = 'translateX(' + percent + '%)';
    }
    if (pageYOffset < 700) {
        leftSide.style.transform = 'translateX(-100%)';
        rightSide.style.transform = 'translateX(100%)';
    }
    if (pageYOffset < 1000) {
        rightLine.style.transform = "translateX(30%)";
        leftLine.style.transform = "translateX(-30%)";
    }
    if (pageYOffset >= 1000 && pageYOffset < 1200) {
        leftSide.style.transform = 'translateX(-0%)';
        var y = (1200 - pageYOffset) / 2;
        leftLine.style.transform = 'translateX(-' +  Math.ceil(30 * y / 100) + '%)';
        rightLine.style.transform = 'translateX(' +  Math.ceil(30 * y / 100) + '%)';
        rightSide.style.transform = 'translateX(0%)';
    }
    if (pageYOffset > 1200) {
        rightLine.style.transform = "translateX(0%)";
        leftLine.style.transform = "translateX(0%)";
    }
    if (pageYOffset < 1200) {
        leftSide.style.backgroundColor = 'hsl(0, 0%, 100%)';
        leftSide.style.color = 'hsl(0, 0%, 17%)';
        leftLine.style.background = 'hsl(0, 0%, 17%)';
        left.style.backgroundColor = 'hsl(0, 0%, 100%)'; 
    }
    if (pageYOffset >= 1200 && pageYOffset < 1400) {
        var z = (1400 - pageYOffset) / 2;
        leftSide.style.backgroundColor = 'hsl(0, 0%,' + (z) + '%)';
        leftSide.style.color = 'hsl(0, 0%,' + (100 - z) + '%)';
        leftLine.style.background = 'hsl(0, 0%,' + (100 - z) + '%)';
        left.style.backgroundColor = 'hsl(0, 0%,' + (z) + '%)';
    }
    if (pageYOffset > 1400) {
        leftSide.style.backgroundColor = 'hsl(0, 0%, 0%)';
        leftSide.style.color = 'hsl(0, 0%, 100%)';
        leftLine.style.background = 'hsl(0, 0%, 100%)';
        left.style.backgroundColor = 'hsl(0, 0%, 0%)';  
    }
    if (pageYOffset >= 1900 && pageYOffset < 2400) {
        var k = (2400 - pageYOffset) / 5;
        anime.style.transform = 'rotate(45deg) scaleY(' + (k / 10) + ') scaleX(10)';
    }
    if (pageYOffset >= 2400) {
        anime.style.transform = 'rotate(45deg) scaleY(0) scaleX(10)';
    }




};
window.addEventListener('scroll', onScrollFunc);                                     
