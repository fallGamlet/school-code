
const LIGHT = 'light-style'
const DARK = 'dark-style'

const shapes = [
    'shape-oval', 
    'shape-rect', 
    'shape-rect-rounded',
    'shape-rect-rounded-very'
];
let shapeCounter = 0

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
        changeShape(view);
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

function changeShape(view) {
    const index = shapeCounter % shapes.length;
    const currenShape = shapes[index];
    shapes.forEach(item => {
        view.classList.remove(item);
    });
    view.classList.add(currenShape);
    shapeCounter++;
}