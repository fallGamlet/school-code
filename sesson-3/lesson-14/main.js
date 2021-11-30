const STATE_LIGHT = "STATE_LIGHT"
const STATE_DARK = "STATE_DARK"
const themeLight = { bg: "#fff",txt: "#333" }
const themeDark = { bg: "#333", txt: "#fff" }

document.addEventListener(
    'DOMContentLoaded', 
    main
);

function main() {
    const counterView = 
        document.querySelector('.counter');
    activateCounter(counterView);    
}

function activateCounter(view) {
    view.addEventListener("click", () => {
        let theme;
        if (view.my_state == STATE_LIGHT) {
            view.my_state = STATE_DARK
            theme = themeDark
        } else {
            view.my_state = STATE_LIGHT
            theme = themeLight
        }
        view.style.backgroundColor = theme.bg
        view.style.color = theme.txt
        
        const count = 
            Number(view.textContent);
        if (isNaN(count)) {
            view.textContent = "0";
        } else {
            view.textContent = count + 1;
        }
    });
}