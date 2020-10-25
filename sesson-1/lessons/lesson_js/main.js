
const items = Array.from(document.querySelectorAll(".container>span"));
let counter = 0;
console.log(items)

// startClassCorusel();
startRotateItemsPositions()

function startClassCorusel () {
    applyClass(items, counter);
    // console.log(`Counter: ${counter}`);
    counter++;
    setTimeout(startClassCorusel, 1000);
}

function applyClass(arr, index) {
    const realIndex = index % arr.length;
    arr.forEach((item, i) => {
        if (i == realIndex) {
            item.className = "selected-item";
        } else {
            item.className = "";
        }
    })
}

function startRotateItemsPositions() {
    rotateItemsPositions('.container');
    rotateItemsPositions('.container-vertical');
    setTimeout(startRotateItemsPositions, 1000);
}

function rotateItemsPositions(containerSelector) {
    const container = document.querySelector(containerSelector);
    const child = document.querySelector(`${containerSelector}>span`);
    container.removeChild(child)
    container.appendChild(child);
}