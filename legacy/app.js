// icon libraries ------------------------------------------------------------------------------------------------------------------------------------------------------

    // lucide icons
    lucide.createIcons();

    // feather icons
    feather.replace();

// lateral nav ---------------------------------------------------------------------------------------------------------------------------------------------------------

// obtain lateral nav
let lateralNav = document.getElementById("lateral_nav");

// open lateral nav
function lateralNavOpen() {
    lateralNav.style.display = "flex";
}

// close lateral nav
function lateralNavClose() {
    lateralNav.style.display = "none";
}

// .select -------------------------------------------------------------------------------------------------------------------------------------------------------------

// open
selectButtons = document.querySelectorAll('.select--button button');

selectButtons.forEach(button => {
    button.addEventListener('click', event => {
        // ul
        const selectList = button.closest('.select--button').querySelector('ul');
        const selectListAll = document.querySelectorAll('.select--button ul');
        const selectListSiblings = Array.from(selectListAll).filter(element => element != selectList);
            // close siblings
            hideAll(selectListSiblings);
            // open/close
            showHide(selectList);
    })
})

// choose
selectItems = document.querySelectorAll('.select--item input');

selectItems.forEach(input => {
    input.addEventListener('click', event => {
        // .select--value
        const selectValue = input.closest('.select--button').querySelector('.select--value');
            // change value
            selectValue.innerHTML = input.dataset.label;

        // ul
        const selectList = input.closest('.select--button').querySelector('ul');
            // close
            hide(selectList);
    })
})

// close
window.addEventListener('click', event => {
    // ul
    const selectListAll = document.querySelectorAll('.select--button ul');
        // close
        if (!event.target.closest('.select--button')) {
            hideAll(selectListAll);
        }
})

// .expand -------------------------------------------------------------------------------------------------------------------------------------------------------------

// multi button
expandButtonsMulti = document.querySelectorAll('.expand--button--group > *');

expandButtonsMulti.forEach(element => {
    element.addEventListener('click', event => {
        const expandButton = element;
        const expandButtonName = element.id.split('_')[3];
        const expandGroup = element.closest('.expand--button--group');
        const expandGroupName = expandGroup.id.split('_')[3];

        // #expand_body_...
        const expandBodyAll = document.querySelectorAll(`[id=expand_body_${expandGroupName}_${expandButtonName}]`);
        const expandBodyGroupAll = document.querySelectorAll(`[id^=expand_body_${expandGroupName}]`);
            // close siblings
            hideAll(expandBodyGroupAll);
            // open
            if (!expandButton.id == '') {
                showAll(expandBodyAll);
            }
    })
})

// single button
expandButtonsSingle = document.querySelectorAll('.expand--button--single');

expandButtonsSingle.forEach(element => {
    element.addEventListener('click', event => {
        const expandButtonName = element.id.split('_')[3];

        // #expand_body_...
        const expandBody = document.querySelectorAll(`[id=expand_body__${expandButtonName}]`);
            // open
            showhideAll(expandBody);
    })
})

// global --------------------------------------------------------------------------------------------------------------------------------------------------------------

function removeAll(group, className) {
    for (i = 0; i < group.length; i++) {
        if (group[i].classList.contains(className)) {
            group[i].classList.remove(className);
        }
    }
}

// global --------------------------------------------------------------------------------------------------------------------------------------------------------------

// hide
function hide(element) {
    element.classList.add('hide');
}

function hideAll(group) {
    for (i = 0; i < group.length; i++) {
        if (!group[i].classList.contains('hide')) {
            group[i].classList.add('hide');
        }
    }
}

// show
function showAll(group) {
    for (i = 0; i < group.length; i++) {
        if (group[i].classList.contains('hide')) {
            group[i].classList.remove('hide');
        }
    }
}

// show/hide toggle
function showHide(element) {
    if (element.classList.contains('hide')) {
        element.classList.remove('hide');
    } else {
        element.classList.add('hide');
    }
}

function showhideAll(group) {
    for (i = 0; i < group.length; i++)    {
        if (group[i].classList.contains('hide')) {
            group[i].classList.remove('hide');
        } else {
            group[i].classList.add('hide');
        }
    }
}