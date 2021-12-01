
const LIGHT = 'light-style'
const DARK = 'dark-style'

const borderColors = [
    'border-orange',
    'border-blue',
    'border-purple',
    'border-green',
    'border-yellow'
];
const shapes = [
    'shape-oval', 
    'shape-rect-rounded',
    'shape-rect-rounded-very',
    'shape-rect'
];
let clickCounter = 0

// прослушивание события окончания загрузки документа
document.addEventListener('DOMContentLoaded', main);

function main() {
    // получение ссылки на html элемент с id active-element 
    let counterView = document.querySelector('#active-element');
    activateThemeChanging(counterView);    
}

function activateThemeChanging(view) {
    view.addEventListener("click", () => {
        changeColorTheme(view);
        changeBorderColor(view);
        changeShape(view);
        clickCounter++;
    });
}

function changeColorTheme(view) {
    if (view.classList.contains(LIGHT)) {
        view.classList.add(DARK);
        view.classList.remove(LIGHT);
    } else {
        view.classList.add(LIGHT);
        view.classList.remove(DARK);
    }
}

function changeBorderColor(view) {
    const index = clickCounter % borderColors.length;
    const currenBorderColor = borderColors[index];
    borderColors.forEach(item => {
        view.classList.remove(item);
    });
    view.classList.add(currenBorderColor);
}

function changeShape(view) {
    const index = clickCounter % shapes.length;
    const currenShape = shapes[index];
    shapes.forEach(item => {
        view.classList.remove(item);
    });
    view.classList.add(currenShape);
}