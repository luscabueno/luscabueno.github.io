// global

const projectGrid = document.querySelector('body.projects .content');
const projectDialog = document.querySelector('dialog.project');

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

        projectGrid.append(projectCard);
    }
}

renderProjects();

// dialog

async function loadProject(projectName) {
    const response = await fetch(`data/projects/${projectName}/info.json`);
    const data = await response.json();
    return data;
}

projectGrid.addEventListener('click', async (event) => {
    // trigger check
    const trigger = event.target.closest('.show-dialog');
    if (trigger === null) return;

    // trigger pass
    const projectName = trigger.closest('.card').id;
    console.log(projectName);

    // load data
    const projectData = await loadProject(projectName);

    // render tags
    projectDialog.querySelector('.tags').replaceChildren();
    renderIconTags(projectData.skill_tags).forEach(tag => {
        projectDialog.querySelector('.tags').append(tag);
    })
    renderTextTags(projectData.category_tags).forEach(tag => {
        projectDialog.querySelector('.tags').append(tag);
    })

    // render text
    projectDialog.querySelector('.title').textContent = projectData.title;
    projectDialog.querySelector('.description').textContent = projectData.description;

    // render images
    projectDialog.querySelector('.gallery').replaceChildren();
    projectData.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;

        projectDialog.querySelector('.gallery').append(img);
    })

    // show dialog
    projectDialog.showModal();
})

const closeDialog = document.querySelectorAll('.close-dialog');

closeDialog.forEach(element => {
    element.addEventListener('click', () => {
        const dialog = element.closest('dialog');
        dialog.close();
    })
})
