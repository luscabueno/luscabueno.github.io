// global

const projectContainer = document.querySelector('body.projects .content');

function renderIconTags(tagsList) {
    return tagsList.map(item => {
        const tag = document.createElement('div');
        tag.classList.add('tag', 'icon');

        const img = document.createElement('img');
        img.src = `img/icons/skill-${item}.svg`;

        tag.append(img);
        return tag;
    })
}

function renderTextTags(tagsList) {
    return tagsList.map(item => {
        const tag = document.createElement('div');
        tag.classList.add('tag');

        const p = document.createElement('p');
        p.textContent = item;

        tag.append(p);
        return tag;
    })
}

// cards

async function loadProjects() {
    const response = await fetch('data/projects/list.json');
    const data = await response.json();
    return data;
}

async function renderProjects() {
    // load template
    const templateProjectCard = document.querySelector('#template-project-card');

    // load list
    const projectsList = await loadProjects();

    // render card
    for(const item of projectsList) {
        // load data
        const projectData = await loadProject(item);

        // clone template
        const projectCard = templateProjectCard.content.cloneNode(true);
        projectCard.querySelector('.card').id = item;

        // render cover
        projectCard.querySelector('.cover').src = projectData.images[0];

        // render tags
        const skillTags = renderIconTags(projectData.skill_tags);
        const categoryTags = renderTextTags(projectData.category_tags);
        skillTags.forEach(tag => {
            projectCard.querySelector('.tags').append(tag)
        });
        categoryTags.forEach(tag => {
            projectCard.querySelector('.tags').append(tag)
        });

        // render text
        projectCard.querySelector('.title').textContent = projectData.title;
        projectCard.querySelector('.description').textContent = projectData.description;

        projectContainer.append(projectCard);
    }
}

renderProjects();

// dialog

async function loadProject(projectName) {
    const response = await fetch(`data/projects/${projectName}/info.json`);
    const data = await response.json();
    return data;
}

projectContainer.addEventListener('click', async (event) => {
    // trigger check
    const trigger = event.target.closest('.show-dialog');
    if (trigger === null) return;

    // trigger pass
    const projectName = trigger.closest('.card').id;
    console.log(projectName);

    // load data
    const projectData = await loadProject(projectName);
    const projectSkillTags = projectData.skill_tags;
    const projectCategoryTags = projectData.category_tags;
    const projectImages = projectData.images;

    // load elements
    const projectDialog = document.querySelector('dialog.project');
    const dialogTags = projectDialog.querySelector('.tags');
    const dialogTitle = projectDialog.querySelector('.title');
    const dialogDescription = projectDialog.querySelector('.description');
    const dialogGallery = projectDialog.querySelector('.gallery');

    // clear previous data
    dialogTags.replaceChildren();
    dialogGallery.replaceChildren();

    // render tags
    // ...

    // render text
    dialogTitle.textContent = projectData.title;
    dialogDescription.textContent = projectData.description;

    // show dialog
    projectDialog.showModal();
})

// const dialog = document.querySelector('dialog.project');
// const showDialog = document.querySelectorAll('.show-dialog');

// showDialog.forEach(element => {
//     element.addEventListener('click', async () => {
//         const projectName = element.closest('.card').id;
//         const projectData = await loadProject(projectName);
//         const projectSkillTags = projectData.skill_tags;
//         const projectCategoryTags = projectData.category_tags;
//         const projectTitle = projectData.title;
//         const projectDescription = projectData.description;
//         const projectImages = projectData.images;

//         const dialogTags = dialog.querySelector('.tags');
//         const dialogTitle = dialog.querySelector('.dialog-title');
//         const dialogDescription = dialog.querySelector('.dialog-description');
//         const dialogGallery = dialog.querySelector('.gallery');

//         // replace text
//         dialogTitle.innerHTML = projectTitle;
//         dialogDescription.innerHTML = projectDescription;

//         // clear previous tags
//         dialogTags.replaceChildren();

//         // show current tags
//         projectSkillTags.forEach(item => {
//             const tag = document.createElement('div');
//             tag.classList.add('tag', 'icon');
            
//             const img = document.createElement('img');
//             img.src = `img/icons/skill-${item}.svg`

//             tag.append(img);
//             dialogTags.append(tag);
//         })

//         projectCategoryTags.forEach(item => {
//             const tag = document.createElement('div');
//             tag.classList.add('tag');

//             const p = document.createElement('p');
//             p.innerHTML = item;

//             tag.append(p);
//             dialogTags.append(tag);
//         })

//         // clear previous images
//         dialogGallery.replaceChildren();

//         // show current images
//         projectImages.forEach(item => {
//             const img = document.createElement('img');
//             img.src = item;

//             dialogGallery.append(img);
//         })

//         // show
//         dialog.showModal();
//     })
// })

const closeDialog = document.querySelectorAll('.close-dialog');

closeDialog.forEach(element => {
    element.addEventListener('click', () => {
        const dialog = element.closest('dialog');
        dialog.close();
    })
})
