
function startGame(scoresView, mapAreaView) {
    let scores = 0;
    const mapWidth = 20;
    const mapHeight = 20;
    const mapArea = createArray2D(mapWidth, mapHeight);

    mapAreaView.style.width = `${1.25*mapWidth}em`;
    mapAreaView.style.height = `${1.2*mapHeight}em`;

    const directionsMoveSet = {
        right: {dx: 1, dy: 0},
        left: {dx: -1, dy: 0},
        down: {dx: 0, dy: 1},
        up: {dx: 0, dy: -1}
    };
    const snake = {
        direction: directionsMoveSet.right,
        body: [
            {x: 4, y: 0},
            {x: 3, y: 0},
            {x: 2, y: 0},
            {x: 1, y: 0},
            {x: 0, y: 0}
        ]
    };
    const apple = {
        x: Math.round(mapWidth / 2),
        y: Math.round(mapHeight / 2)
    };

    document.onkeydown = (event) => {
        if (event.key == 'ArrowLeft') {
            snake.direction = directionsMoveSet.left;
        } else if (event.key == 'ArrowRight') {
            snake.direction = directionsMoveSet.right;
        } else if (event.key == 'ArrowDown') {
            snake.direction = directionsMoveSet.down;
        } else if (event.key == 'ArrowUp') {
            snake.direction = directionsMoveSet.up;
        }
    }; 

    let timer = setInterval(() => {
        moveSnake(snake);
        checkAppleConsumed();

        fillArray2D(mapArea, "⬜"); // ☐
        putElemens(mapArea, snake.body, "⚫"); // ⚉
        putElemens(mapArea, [apple], "⭐"); // ♥

        scoresView.textContent = `Scores: ${scores}`;

        const text = array2dToText(mapArea);
        mapAreaView.textContent = text;
        
        if (isGameBadEnd(snake)) {
            clearInterval(timer);
            goToEnd(false);
        } else if (isGameGoodEnd()) {
            clearInterval(timer);
            goToEnd(true);
        }
    }, 250);

    function isGameGoodEnd() {
        const isAppleInMapArea = 
            apple.x >= 0 && apple.x < mapWidth &&
            apple.y >= 0 && apple.y < mapHeight;
        return !isAppleInMapArea;
    }

    function checkAppleConsumed() {
        isConsumed = snake.body[0].x == apple.x && 
            snake.body[0].y == apple.y
        
        if (isConsumed) {
            const tail = snake.body[snake.body.length-1];
            const newTail = {
                x: tail.x, 
                y: tail.y
            };
            snake.body.push(newTail);
            generateApplePosition();
            scores += 10;
        }
    }

    function generateApplePosition() {
        apple.x = -1;
        apple.y = -1;

        const emptyPositions = getMapAreaEmptyPositions();
        if (emptyPositions.length == 0) {
            return;
        }

        const index = Math.floor(Math.random() * (emptyPositions.length -1));
        const newApplePosition = emptyPositions[index];

        apple.x = newApplePosition.x;
        apple.y = newApplePosition.y;
    }

    function getMapAreaEmptyPositions() {
        const size = mapWidth*mapHeight;
        if (snake.body.length == size) {
            return [];
        }

        // create array of all positions on the map area
        const positions = new Array(size);
        for (let index = 0; index < size; index++) {
            var y = Math.floor(index / mapWidth);
            var x = index % mapWidth;
            positions[index] = {
                x: x,
                y: y,
                isFree: true
            }
        }

        // fill positions when snake body exists
        snake.body.forEach(item => {
            const index = item.y * mapWidth + item.x
            if (index >= 0 && index < positions.length) {
                positions[index].isFree = false
            }
        });

        // fill position of apple
        const appleIndex = apple.y * mapWidth + apple.x;
        if (appleIndex >= 0 && appleIndex < positions.length) {
            positions[appleIndex].isFree = false
        }

        return positions.filter(pos => pos.isFree);
    }


    function isGameBadEnd(snake) {
        const head = snake.body[0];
        const isHeadInMapArea = head.x >= 0 && head.x < mapWidth &&
            head.y >= 0 && head.y < mapHeight;
        return !isHeadInMapArea;
    }

    function moveSnake(snake) {
        const body = snake.body;
        for (let i = body.length -1; i > 0; i--) {
            body[i].x = body[i-1].x;
            body[i].y = body[i-1].y;
        }

        body[0].x += snake.direction.dx;
        body[0].y += snake.direction.dy;
    }

    function array2dToText(array2d) {
        const textArr = new Array(array2d.length);
        array2d.forEach((arr, i) => {
            textArr[i] = arr.join("");
        });
        return textArr.join("\n");
    }

    function putElemens(array2d, elements, value) {
        elements.forEach(element => {
            const isValid = element.y >=0 && 
                element.y < array2d.length &&
                element.x >= 0 && 
                element.x < array2d[element.y].length;
            if (isValid) {
                array2d[element.y][element.x] = value;
            }
        });
    }

    function fillArray2D(array2d, value) {
        array2d.forEach(arr => {
            arr.fill(value);
        });
    }

    function createArray2D(width, height) {
        const array = new Array(height);
        for (let i = 0; i < array.length; i++) {
            array[i] = new Array(width);
        }
        return array;
    }

    function goToEnd(isWinning) {
        window.location.href = `./result.html?isWinning=${isWinning ? 1 : 0}&scores=${scores}`;
    }
}