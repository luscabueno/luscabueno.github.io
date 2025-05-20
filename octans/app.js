// lucide icons
lucide.createIcons();

// open .select
selectButtons = document.querySelectorAll('.select button');

selectButtons.forEach(button => {
    button.addEventListener('click', event => {
        // close other .select
        const selectLists = document.getElementsByClassName('group--select--item');
        for (i = 0; i < selectLists.length; i++) {
            if (selectLists[i].classList.contains('show')) {
                selectLists[i].classList.remove('show');
            }
        }

        // obtain .select name
        const selectName = button.id.split("_")[2];

        // open .group--select--item
        const selectList = document.getElementById(`select_list_${selectName}`);
        if (selectList.classList.contains('show')) {
            selectList.classList.remove('show')
        } else {
            selectList.classList.add('show');
        }
    })
})

// choose .select
selectItemInputs = document.querySelectorAll('.select--item input');

selectItemInputs.forEach(input => {
    input.addEventListener('click', event => {
        // obtain .select name
        const selectName = input.name;

        // change .select value
        const selectValue = document.getElementById(`select_value_${selectName}`);
        selectValue.innerHTML = input.dataset.label

        // close .group--select--item
        const selectList = document.getElementById(`select_list_${selectName}`);
        selectList.classList.remove('show');
    })
})

// cancel .select
window.addEventListener('click', event => {
    const selectLists = document.getElementsByClassName('group--select--item');

    if (!event.target.closest('.select')) {
        for (i = 0; i < selectLists.length; i++) {
            if (selectLists[i].classList.contains('show')) {
                selectLists[i].classList.remove('show');
            }
        }
    }
})