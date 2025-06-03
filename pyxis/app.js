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
            removeAll(selectListSiblings, 'show');
            // open/close
            if (selectList.classList.contains('show')) {
                selectList.classList.remove('show');
            } else {
                selectList.classList.add('show');
            }
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
            selectList.classList.remove('show');
    })
})

// close
window.addEventListener('click', event => {
    // ul
    const selectListAll = document.querySelectorAll('.select--button ul');
        // close
        if (!event.target.closest('.select--button')) {
            removeAll(selectListAll, 'show')
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
            popup.classList.add('show');

        // .overlay
        const overlay = popup.closest('.overlay');
            // open
            overlay.classList.add('show');

        // .tab--body
            if (popup.querySelector('.tabsheet')) {
                const tabBodyAll = popup.querySelectorAll('.tab--body');
                const tabBodyFirst = popup.querySelector('.tab--body');
                    // close all children
                    removeAll(tabBodyAll, 'show');
                    // open first child
                    tabBodyFirst.classList.add('show');
            }

        // .tabsheet--button
            if (popup.querySelector('.tabsheet')) {
                const tabsheetButtonAll = popup.querySelector('.tabsheet').querySelectorAll('.tabsheet--button');
                const tabsheetButtonFirst = popup.querySelector('.tabsheet--button');
                    // inactivate all children
                    removeAll(tabsheetButtonAll, 'active');
                    // activate first child
                    tabsheetButtonFirst.classList.add('active');
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
            popup.classList.remove('show');

        // .overlay
        const overlay = button.closest('.overlay');
            // close
            overlay.classList.remove('show');
    })
})

// tabsheet -----------------------------------------------------------------------------------------------------------------------------------------------------------

// switch
TabButtons = document.querySelectorAll('.tabsheet--button button');

TabButtons.forEach(button => {
    button.addEventListener('click', event => {

        // .tab--body
        const tabBody = document.getElementById(`tab_body_${button.id.split('_')[2]}`);
        const tabBodyAll = button.closest('.tab--body').querySelectorAll('.tab--body');
        const tabBodyFirst = tabBody.querySelector('.tab--body');
            // close siblings
            removeAll(tabBodyAll, 'show');
            // open first child
            if (tabBody.querySelector('.tabsheet')) {
                tabBodyFirst.classList.add('show');
            }
            // open
            tabBody.classList.add('show');

        // .tabsheet--button
        const tabsheetButton = button.closest('.tabsheet--button');
        const tabsheetButtonAll = button.closest('.tabsheet').querySelectorAll('.tabsheet--button');
        const tabsheetButtonChildren = tabBody.querySelectorAll('.tabsheet--button');
        const tabsheetButtonFirst = tabBody.querySelector('.tabsheet--button');
            // inactivate siblings
            removeAll(tabsheetButtonAll, 'active');
            // inactivate children
            if (tabBody.querySelector('.tabsheet')) {
                removeAll(tabsheetButtonChildren, 'active');
            }
            // activate first child
            if (tabBody.querySelector('.tabsheet')) {
                tabsheetButtonFirst.classList.add('active');
            }
            // activate
            tabsheetButton.classList.add('active');
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

// .expand (WIP) -------------------------------------------------------------------------------------------------------------------------------------------------------

// show and hide .conditional--field (speculative-only cause there are a ton of variables to consider with this function)
checkboxEnablers = document.querySelectorAll('.checkbox--enabler');

checkboxEnablers.forEach(function(element) {
    element.addEventListener('change', event => {
        // obtain .conditional--field name
        const conditionalFieldName = element.id.split('_')[1];

        // show or hide .conditional--field
        const conditionalField = document.getElementById(`conditional_field_${conditionalFieldName}`);
        if (element.checked) {
            conditionalField.classList.add('show');
        } else {
            conditionalField.classList.remove('show');
        }
    })
})