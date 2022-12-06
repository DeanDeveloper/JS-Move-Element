value = 40;
let direction;
let handlerUp = (element) => {
    clearInterval(direction)
    direction = setInterval(() => {
        element.style.top = `${(element.getBoundingClientRect().top - 50)}px`;
    }, 400);
}

let handlerDown = (element) => {
    clearInterval(direction)
    direction = setInterval(() => {
        element.style.top = `${(element.getBoundingClientRect().top + 50)}px`;
    }, 400);
}

let handlerLeft = (element) => {
    clearInterval(direction)
    direction = setInterval(() => {
        element.style.left = `${(element.getBoundingClientRect().left - 50)}px`;
    }, 400);

}

let handlerRight = (element) => {
    clearInterval(direction)
    direction = setInterval(() => {
        element.style.left = `${(element.getBoundingClientRect().left + 50)}px`;
    }, 400);

}

let handlerSpace = (element) => {
    clearInterval(direction)
    element.style.top = Math.floor(element.getBoundingClientRect().top - 100) + 'px';

    setTimeout(() => {
        element.style.top = Math.floor(element.getBoundingClientRect().top + 100) + 'px';
    }, 400 );
}


let catchElement = () => {

    const getFunction = {
        ArrowUp: handlerUp,
        ArrowRight: handlerRight,
        ArrowLeft: handlerLeft,
        ArrowDown: handlerDown
    }

    window.addEventListener('keydown', (e) => {
        let element = document.querySelector('.content__element');
        let handlerClick = e.key;

        element.style.top = e.clientY + 'px';
        element.style.left = e.clientX + 'px';

        // element.style.transition = '.1ms ease-in-out'
        e.keyCode == 32 ? handlerSpace(element) : getFunction[handlerClick] ? getFunction[handlerClick](element) : '';
        

    })

}


catchElement();