const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var allChar = document.querySelector(".hoverText");
var textArr = allChar.textContent.split("");
var clutch = "";
textArr.forEach(function (elem) {
    clutch += `<span>${elem}</span>`;
});
allChar.innerHTML = clutch;
var section6 = document.querySelector("#section6 h1");
var textArr2 = section6.textContent.split("");
var clutch = "";
textArr2.forEach(function (elem) {
    clutch += `<span>${elem}</span>`;
});
section6.innerHTML = clutch;
