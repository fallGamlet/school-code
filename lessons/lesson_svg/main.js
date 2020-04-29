

let img = document.querySelector("#logo-svg");
let svgDocument = img.contentDocument;

let bgCircle = svgDocument.querySelector("#bg-circle");
bgCircle.setAttribute("fill", "#66aaaa");

let arrowLeft = svgDocument.querySelector("#arrow-left");
arrowLeft.setAttribute("fill", "#aaaa66");
