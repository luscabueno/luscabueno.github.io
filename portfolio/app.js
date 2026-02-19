// cards

// ...

// dialog

const dialog = document.querySelector('dialog.project');
const showDialog = document.querySelectorAll('.show-dialog');
const closeDialog = document.querySelectorAll('.close-dialog');

showDialog.forEach(element => {
    element.addEventListener('click', async () => {
        const projectName = element.closest('.card').id;
        const projectData = await loadProject(projectName);
        const projectSkillTags = projectData.skill_tags;
        const projectCategoryTags = projectData.category_tags;
        const projectTitle = projectData.title;
        const projectDescription = projectData.description;
        const projectImages = projectData.images;

        const dialogTags = dialog.querySelector('.tags');
        const dialogTitle = dialog.querySelector('.dialog-title');
        const dialogDescription = dialog.querySelector('.dialog-description');
        const dialogGallery = dialog.querySelector('.gallery');

        // replace text
        dialogTitle.innerHTML = projectTitle;
        dialogDescription.innerHTML = projectDescription;

        // clear previous tags
        dialogTags.replaceChildren();

        // show current tags
        projectSkillTags.forEach(item => {
            const tag = document.createElement('div');
            tag.classList.add('tag', 'icon');
            
            const img = document.createElement('img');
            img.src = `img/icons/skill-${item}.svg`

            tag.append(img);
            dialogTags.append(tag);
        })

        projectCategoryTags.forEach(item => {
            const tag = document.createElement('div');
            tag.classList.add('tag');

            const p = document.createElement('p');
            p.innerHTML = item;

            tag.append(p);
            dialogTags.append(tag);
        })

        // clear previous images
        dialogGallery.replaceChildren();

        // show current images
        projectImages.forEach(item => {
            const img = document.createElement('img');
            img.src = item;

            dialogGallery.append(img);
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

async function loadProject(projectName) {
    const response = await fetch(`img/projects/${projectName}/project.json`);
    const data = await response.json();
    return data;
}
