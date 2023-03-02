const achievements = [
    {
        title: 'Técnico em Informática',
        startDate: 2018,
        endDate: 2021,
        description: "Concluí o curso Técnico Integrado em Informática, no Instituto Federal do Rio Grando do Norte (IFRN) campus Macau"
    },
    {
        title: 'Bacharelado em Tecnologia da Informação',
        startDate: 2022,
        endDate: 0,
        description: "Iniciei o curso de TI na Universidade do Rio Grande do Norte."
    }
];
const projects = [
    {
        title: "Habits",
        year: 2023,
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/nlw-setup-habits/", "Github":"https://github.com/Eric-Eduardo/nlw-setup-habits", "Figma":"https://www.figma.com/community/file/1195327109778210238"},
        image: "./img/captura_habits.png",
        about: "Projeto desenvolvido na NLW Setup, evento promovido pela Rocketsear. Habits consistem em um site para registros/checklist de rotinas diárias, como beber água, caminhar, estudar etc"
    },
    {
        title: "Cronômetro online",
        year: 2023,
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/cronometroonline/", "Github":"https://github.com/Eric-Eduardo/cronometroonline"},
        image: "./img/Captura_cronometro_online.png",
        about: "Um sitema de contagem progressiva."
    },
    {
        title: "Jogo da Velha",
        year: 2023,
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"#", "Github":"#"},
        image: "./img/captura_jogo_da_velha.png",
        about: "Um jogo da velha de dois jogadores."
    },
    {
        title: "Galeria de Desenhos",
        year: 2023,
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/Galeria-de-desenhos/", "Github":"https://github.com/Eric-Eduardo/Galeria-de-desenhos"},
        image: "./img/captura-site-desenho.png",
        about: "Este projeto consiste na construção de uma galeria online, no qual é possível visualizar desenhos (feitos por mim ✌️). Os desenhos são organizados em categorias, para facilitar a organização. Além disso, na página inicial há informações sobre o autor, bem como contato."
    }
];
const divViewProject = document.querySelector('.project-view');
const elementCloseProject = document.querySelector('.project-view .icon-tabler-x');
const timeline = document.querySelector('.timeline');


// Ordenar as conquistas por data em ordem crescente
achievements.sort(function(a, b) {
    // a<b: -1, a>b: 1, a=b: 0 
    if (a.endDate == 0 && b.endDate == 0) {
        if (a.startDate < b.startDate) return -1;
        else if (a.startDate > b.startDate) return 1;
        else return 0;
    }
    else if (a.endDate == 0 && b.endDate !=0) return 1;
    else if (a.endDate != 0 && b.endDate ==0) return -1;
    else if (a.endDate < b.endDate) return -1;
    else if (a.endDate > b.endDate) return 1;
    else return 0;
});

// Mostra as conquistas na tela

for (idc in achievements) {
    var period = '';

    if (achievements[idc].endDate != 0)
        period = achievements[idc].startDate + '-' + achievements[idc].endDate;
    else
        period = 'Em andamento';

    insertAchievement(achievements[idc].title, period, achievements[idc].description);

    if (idc < achievements.length-1) {
        timeline.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="60">
                                    <line x1="5" y1="0" x2="5" y2="60" stroke-width="1" stroke="#FFB500" stroke-dasharray="9"/>
                                </svg>`;
    }
}

// Mostra os projetos na tela
for (let i in projects) {
    insertProject(projects[i].title, projects[i].technologies, projects[i].about, projects[i].image, i);
}

// Eventos da visualização do projeto
elementCloseProject.addEventListener('click', closeViewProject);
divViewProject.addEventListener('click', (event) => {if (event.target.className=="project-view") closeViewProject()});

//Funções
function insertAchievement(title, period, description) {
    const timeline = document.querySelector('.timeline');
    const elAchievement = document.createElement('div');
    const elTitle = document.createElement('h2');
    const elDate = document.createElement('div');
    const elPeriod = document.createElement('p');
    const elDescription = document.createElement('p');

    elAchievement.className = 'achievement';
    if (period=="Em andamento") elAchievement.classList.add('disable');
    elTitle.className = 'title';
    elDate.className = 'date';
    elDescription.classList = 'text';

    elPeriod.textContent = period;
    elTitle.textContent = title;
    elDescription.textContent = description;
    elDate.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ce9400" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="5" width="16" height="16" rx="2" />
                            <line x1="16" y1="3" x2="16" y2="7" />
                            <line x1="8" y1="3" x2="8" y2="7" />
                            <line x1="4" y1="11" x2="20" y2="11" />
                            <rect x="8" y="15" width="2" height="2" />
                        </svg>`;
    elDate.appendChild(elPeriod);

    elAchievement.appendChild(elTitle);
    elAchievement.appendChild(elDate);
    elAchievement.appendChild(elDescription);
    
    timeline.appendChild(elAchievement);
}


function insertProject (title, technologies, about, srcImage, id) {
    // COLOAR AS TECNOLOGIAS COMO LISTA, EM VEZ DE DIV
    const divContentProjects = document.querySelector("#projects .content");
    const divCard = document.createElement('div');
    const divInfo = document.createElement('div');
    const divCardContent = document.createElement('div');
    const h2Title = document.createElement('h2');
    const pText = document.createElement('p');
    const divTechnologies = document.createElement('div');

    divCard.className = 'card';
    divInfo.className = 'info';
    divCardContent.className = 'card-content';
    h2Title.className = 'title';
    pText.className = 'text';
    divTechnologies.className = 'technologies';

    divCard.addEventListener('click',  ()=>{viewProject(id)});

    h2Title.textContent = title;
    pText.textContent = about;
    divCardContent.appendChild(h2Title);
    divCardContent.appendChild(pText);
    divInfo.appendChild(divCardContent);

    for (tec of technologies) {
        divTechnologies.innerHTML += `<div class="technology">${tec}</div>`;
    }
    divInfo.appendChild(divTechnologies);
    divCard.appendChild(divInfo);

    const divImage = document.createElement('div');
    var img = new Image();
    img.src = srcImage;
    img.onload = () => {
        divImage.className = 'card-img';
        divImage.appendChild(img);
        divCard.appendChild(divImage);
    }


    divContentProjects.appendChild(divCard);
}

function viewProject(id) {
    document.querySelector(".project-view .image").style.display = "none";
    const divLinks = document.querySelector(".project-view .links");
    divLinks.innerHTML="";
    const divTechnologies = document.querySelector(".project-view .technologies");
    divTechnologies.innerHTML = "";

    var img = new Image();
    img.src = projects[id].image;
    img.onload = () => {
        document.querySelector(".project-view .image").style.display = "block";
        document.querySelector(".project-view .image img").src = projects[id].image;
    }

    document.querySelector(".project-view .date p").innerHTML = projects[id].year;
    
    document.querySelector(".project-view .title").innerHTML = projects[id].title;
    
    for (let tech of projects[id].technologies) {
        divTechnologies.innerHTML += `<li>${tech}</li>`;
    }
    
    for (let key of Object.keys(projects[id].links)) {
        divLinks.innerHTML += `<a href=${projects[id].links[key]} target="_blank"><li class='btn'>${key}</li></a>`;
    }
    
    document.querySelector(".project-view .description").innerHTML = projects[id].about;
    
    divViewProject.style.visibility = 'visible';
    document.querySelector('body').style.overflow = 'hidden';
}

function closeViewProject() {
    divViewProject.style.visibility = 'hidden';
    document.querySelector('body').style.overflow = 'visible';
}
