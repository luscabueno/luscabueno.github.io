// icon libraries -----------------------------------------------------------------------------------------------------------------------------------------------------

// lucide icons
lucide.createIcons();

// feather icons
feather.replace();

// select -------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// popup --------------------------------------------------------------------------------------------------------------------------------------------------------------

// open
popupButtons = document.querySelectorAll('.popup--button button');

popupButtons.forEach(button => {
    button.addEventListener('click', event => {
        // .popup
        const popupName = button.id.split("_")[2];
        const popup = document.getElementById(`popup_window_${popupName}`);
            // open
            show(popup);

        // .overlay
        const overlay = popup.closest('.overlay');
            // open
            show(overlay);

        // .tabsheet--body
            if (popup.querySelector('.tabsheet')) {
                const tabBodyAll = popup.querySelectorAll('.tabsheet--body');
                const tabBodyFirst = popup.querySelector('.tabsheet--body');
                    // close all children
                    hideAll(tabBodyAll);
                    // open first child
                    show(tabBodyFirst);
            }

        // .tabsheet--button
            if (popup.querySelector('.tabsheet')) {
                const tabsheetButtonAll = popup.querySelector('.tabsheet').querySelectorAll('.tabsheet--button');
                const tabsheetButtonFirst = popup.querySelector('.tabsheet--button');
                    // inactivate all children
                    inactivateAll(tabsheetButtonAll);
                    // activate first child
                    activate(tabsheetButtonFirst);
            }
    })
})

// close
popupButtonsClose = document.querySelectorAll('.popup--button--close button');

popupButtonsClose.forEach(button => {
    button.addEventListener('click', event => {
        // .popup
        const popup = button.closest('.popup');
            // close
            hide(popup);

        // .overlay
        const overlay = button.closest('.overlay');
            // close
            hide(overlay);
    })
})

// tabsheet -----------------------------------------------------------------------------------------------------------------------------------------------------------

// switch
TabButtons = document.querySelectorAll('.tabsheet--button button');

TabButtons.forEach(button => {
    button.addEventListener('click', event => {

        // .tabsheet--body
        const tabBody = document.getElementById(`tab_body_${button.id.split('_')[2]}`);
        const tabBodyAll = button.closest('.tabsheet--body').querySelectorAll('.tabsheet--body');
        const tabBodyFirst = tabBody.querySelector('.tabsheet--body');
            // close siblings
            hideAll(tabBodyAll);
            // open first child
            if (tabBody.querySelector('.tabsheet')) {
                show(tabBodyFirst);
            }
            // open
            show(tabBody);

        // .tabsheet--button
        const tabsheetButton = button.closest('.tabsheet--button');
        const tabsheetButtonAll = button.closest('.tabsheet').querySelectorAll('.tabsheet--button');
        const tabsheetButtonChildren = tabBody.querySelectorAll('.tabsheet--button');
        const tabsheetButtonFirst = tabBody.querySelector('.tabsheet--button');
            // inactivate siblings
            inactivateAll(tabsheetButtonAll);
            // inactivate children
            if (tabBody.querySelector('.tabsheet')) {
                inactivateAll(tabsheetButtonChildren);
            }
            // activate first child
            if (tabBody.querySelector('.tabsheet')) {
                activate(tabsheetButtonFirst);
            }
            // activate
            activate(tabsheetButton);
    })
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
function show(element) {
    element.classList.remove('hide');
}

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

// activate
function activate(element) {
    element.classList.add('active');
}

// inactivate
function inactivateAll(group) {
    for (i = 0; i < group.length; i++) {
        if (group[i].classList.contains('active')) {
            group[i].classList.remove('active');
        }
    }
}