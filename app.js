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

popoverTrigger.addEventListener('mouseover', function() {
    popover.style.display = "block";
});

popoverTrigger.addEventListener('mouseleave', function() {
    popover.style.display = "none";
});

popoverTrigger.addEventListener('mousemove', (event) => {
    positionPopover(event);
});

function positionPopover(event) {
    popover.style.left = (event.clientX + 20) + 'px';
    popover.style.top = (event.clientY + 20) + 'px';
}