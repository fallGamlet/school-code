

let colors = ["#3085f5", "#3085f5b0", "#18d67d", "#18d67db0", "#27d4dad5", "#277bdad5", "#ffffff00", "#ffffff00", "#ffffff00", "#ffffff00", "#ffffff00", "#eeff00", "#eeff00b0", "#8c00e9", "#088a03d5", "#e9ab00", "#e95500", "#e95500b0", "#7fff2a", "#ba00e9"];
let xTreeBgColors = ["#008000", "#408000", , "#008030"];
let xTreeColorIndex = 0;
let xTreeParts = document.querySelectorAll(".xtree-part");
let balls = createBalls(30);

startAll();


function createBalls(count) {
    let ballsCount = count;

    // удаляются все имеющиеся шары
    let balls = document.querySelectorAll(".ball");
    balls.forEach(item => item.remove());
    // создаются новые шары
    let xTreeContainer = document.querySelector(".xtree-container");
    for (let i = 0; i < ballsCount; i++) {
        let ball = document.createElement('div');
        ball.className = "ball"
        xTreeContainer.appendChild(ball);
    }

    // получаются вновь созданные шары
    balls = document.querySelectorAll(".ball");
    configureBalls(balls);
    return balls;
}

// задаются размеры и полодение шаров
function configureBalls(balls) {
    for (let i = 0; i < balls.length; i++) {
        let size = 10 + Math.floor(10 * Math.random())  // вычисляется размер шара
        let y = (0.1 + 0.75 * i / balls.length) * 100;   // вычисляется отступ гара от верха
        let dx = 0.7 * y * (Math.random() - 0.5);       // вычисляется смещение от центра по горизонтали
        let x = 50 + dx; // назначается отступ от левого края в процентах

        let ball = balls[i]; // получаем ссылку на шар по индексу
        let style = ball.style // получаем ссылку на стиль шара
        style.top = y + "%"; // задаем смещение свершу
        style.left = x + "%"; // задаем смещение слева
        style.height = size + "px"; // задаем высоту шара
        style.width = size + "px"; // задаем ширину шара
        style.marginTop = -0.5 * size + "px"; // центрируем шар относительно себя по вертикал 
        style.marginLeft = -0.5 * size + "px"; // центрируем шар относительно себя по горизонтали
    }
};

function startAll() {
    startXtreePlay();
    // запускаем анимации шаров
    balls.forEach(ball => {
        // время задержки в милисекундах
        let ballTimeout = 1000 * (1 + 4 * Math.random());
        startBallPlay(ball, ballTimeout)
    });
};

function startXtreePlay() {
    let timeout = 1000; // время задержки в милисекундах
    changeXtreeColor(); // вызывается метд изменения шаров
    setTimeout(startXtreePlay, timeout);
};

function changeXtreeColor() {
    xTreeColorIndex++;
    xTreeParts.forEach(item => {
        let index = xTreeColorIndex % xTreeBgColors.length;
        let color = xTreeBgColors[index];
        item.style.borderBottomColor = color;
    });
}

// Задаем функцию старта изменений
function startBallPlay(ball, timeout) {
    // let timeout = 1000; // время задержки
    updateBall(ball); // вызывается метд изменения шаров
    setTimeout(startBallPlay, timeout, ball, timeout); // вызывается отложенное выполнение функции startBallPlay с параметрами
};

// Создаем функцию для изменения свойств цвета шара
function updateBall(ball) {
    if (!ball) {
        return;
    }

    let colorIndex = Math.floor((colors.length - 1) * Math.random()); // определяем индекс цвета
    let color = colors[colorIndex]; // получаем значение цвета по индексу
    let style = ball.style // получаем ссылку на стиль шара
    style.backgroundColor = color; // задаем цвет шара
}