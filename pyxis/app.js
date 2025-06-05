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
popupButtons = document.querySelectorAll('[id^=popup_open]');

popupButtons.forEach(element => {
    element.addEventListener('click', event => {
        // .popup
        const popupName = element.id.split("_")[2];
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
popupButtonsClose = document.querySelectorAll('[id=popup_close]');

popupButtonsClose.forEach(element => {
    element.addEventListener('click', event => {
        // .popup
        const popup = element.closest('[id^=popup_window]');
            // close
            hide(popup);

        // .overlay
        const overlay = element.closest('.overlay');
            // close
            hide(overlay);
    })
})

// tabsheet -----------------------------------------------------------------------------------------------------------------------------------------------------------

// switch
TabButtons = document.querySelectorAll('.tabsheet--button');

TabButtons.forEach(element => {
    element.addEventListener('click', event => {

        // #tabsheet_body
        const tabBody = document.getElementById(`tabsheet_body_${element.id.split('_')[2]}`);
        const tabBodyAll = element.closest('.tabsheet--body').querySelectorAll('.tabsheet--body');
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
        const tabsheetButton = element.closest('.tabsheet--button');
        const tabsheetButtonAll = element.closest('.tabsheet').querySelectorAll('.tabsheet--button');
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
expandButtonsMulti = document.querySelectorAll('[id^=expand_button_group] > *');

expandButtonsMulti.forEach(element => {
    element.addEventListener('click', event => {
        const expandButton = element;
        const expandButtonName = element.id.split('_')[3];
        const expandGroup = element.closest('[id^=expand_button_group]');
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