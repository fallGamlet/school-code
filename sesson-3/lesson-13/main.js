
document.addEventListener(
    'DOMContentLoaded', 
    main
);

function main() {
    // const counterView = 
    //     document.querySelector('.counter');
    // activateCounter(counterView);
    const counterViewArr = 
        document.querySelectorAll('.counter');
    console.log('counterViewArr');
    console.log(counterViewArr);
    counterViewArr.forEach((view) => {
        activateCounter(view);
    });
}

function activateCounter(view) {
    view.addEventListener("click", () => {
        const count = 
            Number(view.textContent);
        if (isNaN(count)) {
            view.textContent = "0";
        } else {
            view.textContent = count + 1;
        }
    });
}