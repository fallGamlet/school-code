
// прослушивание события окончания загрузки документа
document.addEventListener('DOMContentLoaded', main);

function main() {
    const targetView = document.querySelector('#target');
    transformWithAnimation(targetView);
}

function transformWithAnimation(view) {
    function createTransformState(animationProgress) {
        let translate = createTranslateState(animationProgress);
        let rotate = createRotateState(animationProgress);
        return `${translate} ${rotate}`;
    }

    function createTranslateState(animationProgress) {
        const maxX = 100;
        const maxY = 50;
        const valueX = maxX * animationProgress;
        const valueY = maxY * animationProgress;
        return `translate(${valueX}%, ${valueY}%)`;
    }

    function createRotateState(animationProgress) {
        const max = 360;
        const value = max * animationProgress;
        return `rotate(${value}deg`;
    }

    const totalDuration = 1000;
    const startTime = new Date();
    let animationId = setInterval(() => {
        let duration = new Date().getTime() - startTime.getTime();
        let progress = duration / totalDuration;
        let transform = '';
        if (progress >= 1) {
            transform = createTransformState(1);
            clearInterval(animationId);
        } else {
            transform = createTransformState(progress);
        }
        view.style.transform = transform;
    }, 20);
}

function moveViewToPoint(view, point) {
    if (!view || !point) return;

    const totalDuration = 1000;
    const startTime = new Date();

    let animationId = setInterval(() => {
        let duration = new Date().getTime() - startTime.getTime();
        let progress = duration / totalDuration;

        if (progress > 1) {
            progress = 1
            clearInterval(animationId);
        }



    }, interval);
}