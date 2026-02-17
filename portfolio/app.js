// dialog

const dialog = document.querySelector('dialog.project');
const showDialog = document.querySelectorAll('.show-dialog');
const closeDialog = document.querySelectorAll('.close-dialog');

showDialog.forEach(element => {
    element.addEventListener('click', () => {
        const projectName = element.closest('.card').id;
        const projectGallery = dialog.querySelector('.gallery');

        const projectImages = [
            'img/projects/aquece-bem/aquece-bem_1.jpg',
            'img/projects/aquece-bem/aquece-bem_2.jpg',
            'img/projects/aquece-bem/aquece-bem_3.jpg',
            'img/projects/aquece-bem/aquece-bem_4.jpg'
        ];

        // clear previous
        projectGallery.replaceChildren();

        // show current
        projectImages.forEach(element => {
            const img = document.createElement('img');
            img.src = element;

            projectGallery.append(img);
        })

        // show
        dialog.showModal();
    })
})

closeDialog.forEach(element => {
    element.addEventListener('click', () => {
        const dialog = element.closest('dialog');
        dialog.close();
    })
})