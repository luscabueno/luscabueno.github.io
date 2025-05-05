// group--filter--s

window.addEventListener('scroll', function() {
    let elemRead = document.getElementById("header_filter");
    let elemShow = document.getElementById("header_filter_s");
    let rect = elemRead.getBoundingClientRect();

    if (rect.bottom < convertRemToPixels(4)) {
        elemShow.style.display = "flex";
    } else {
        elemShow.style.display = "none";
    }
})

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// popover

let popoverTrigger = document.getElementById("popover_trigger");
let popover = document.getElementById("popover");

// popover open

popoverTrigger.addEventListener('mouseover' , function() {
    popover.style.display = "block";
})

// popover close

popoverTrigger.addEventListener('mouseleave', function() {
    popover.style.display = "none";
});

// popover position

popoverTrigger.addEventListener('mousemove', (event) => {
    popoverPosition(event);
});

function popoverPosition(mousePosition) {
    // determine header position for scroll compensation
    let elemRead = document.getElementById("header");
    let rect = elemRead.getBoundingClientRect();
    let popoverTriggerRect = popoverTrigger.getBoundingClientRect();

    // determine viewport position
    let popoverTriggerPosition = popoverTrigger.getBoundingClientRect();
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let viewportTop = parseInt((popoverTriggerPosition.top / viewportHeight) * 100);
    let viewportBottom = parseInt((popoverTriggerPosition.bottom / viewportHeight) * 100);
    let viewportLeft = parseInt((popoverTriggerPosition.left / viewportWidth) * 100);
    let viewportRight = parseInt((popoverTriggerPosition.right / viewportWidth) * 100);

    // position popover
    if (viewportTop <= 50 && viewportWidth > 700) {
        popover.style.top = (mousePosition.clientY - rect.top + 70) + 'px';
    } else {
        popover.style.top = (mousePosition.clientY - rect.top - 200) + 'px';
    }

    if (viewportLeft <= 50) {
        popover.style.left = (mousePosition.clientX + 30) + 'px';
    } else {
        popover.style.left = (mousePosition.clientX - 620) + 'px';
    }
}

// function elementSize(element) {
//     let element = element.getBoundingClientRect();
//     return {
//         elementTop: element.top,
//         elementBottom: element.bottom,
//         elementLeft: element.left,
//         elementRight: element.right
//     }
// }