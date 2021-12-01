const STATE_LIGHT = "STATE_LIGHT"
const STATE_DARK = "STATE_DARK"
const themeLight = { bg: "#fff",txt: "#333" }
const themeDark = { bg: "#333", txt: "#fff" }

// прослушивание события окончания загрузки документа
document.addEventListener('DOMContentLoaded', main);

function main() {
    // получение ссылки на html элемент с классом counter 
    let counterView = document.querySelector('.counter');
    activateThemeChanging(counterView);    
}

function activateThemeChanging(view) {
    view.addEventListener("click", () => {
        let theme;
        // смена темы, если была светлая, то меняем на темную и наоборот
        if (view.my_state == STATE_LIGHT) {
            view.my_state = STATE_DARK
            theme = themeDark
        } else {
            view.my_state = STATE_LIGHT
            theme = themeLight
        }
        view.style.backgroundColor = theme.bg // установить цвет фона элемента
        view.style.color = theme.txt // установить цвет текста элемента
        view.style.borderColor = getRandomColor()
    });
}

// метод для получения случайного цвета
function getRandomColor() {
    const red = Math.round(255*Math.random());  // генерация случайного компонента красного цвета
    const green = Math.round(255*Math.random());  // генерация случайного компонента зеленого цвета
    const blue = Math.round(255*Math.random());  // генерация случайного компонента синего цвета
    return `rgb(${red}, ${green}, ${blue})`; // формирование цвета из компонент
}