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
        id: 1,
        title: "Habits",
        date: new Date(2023, 0),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/nlw-setup-habits/", "Github":"https://github.com/Eric-Eduardo/nlw-setup-habits", "Figma":"https://www.figma.com/community/file/1195327109778210238"},
        image: "./img/captura_habits.png",
        about: "Projeto desenvolvido na NLW Setup, evento promovido pela Rocketsear. Habits consistem em um site para registros/checklist de rotinas diárias, como beber água, caminhar, estudar etc"
    },
    {
        id: 2,
        title: "Cronômetro online",
        date: new Date(2022, 11),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/cronometroonline/", "Github":"https://github.com/Eric-Eduardo/cronometroonline"},
        image: "./img/Captura_cronometro_online.png",
        about: "Um sitema de contagem progressiva."
    },
    {
        id: 3,
        title: "Jogo da Velha",
        date: new Date(2023, 0),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/jogo-da-velha/", "Github":"https://github.com/Eric-Eduardo/jogo-da-velha"},
        image: "./img/captura_jogo_da_velha.png",
        about: "Um jogo da velha de dois jogadores."
    },
    {
        id: 4,
        title: "Galeria de Desenhos",
        date: new Date(2023, 0),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/Galeria-de-desenhos/", "Github":"https://github.com/Eric-Eduardo/Galeria-de-desenhos"},
        image: "./img/captura-site-desenho.png",
        about: "Este projeto consiste na construção de uma galeria online, no qual é possível visualizar desenhos (feitos por mim ✌️). Os desenhos são organizados em categorias, para facilitar a organização. Além disso, na página inicial há informações sobre o autor, bem como contato."
    },
    {
        id: 5,
        title: "Sudoku solver",
        date: new Date(2023, 0),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/Sudoku-solver/", "Github":"https://github.com/Eric-Eduardo/Sudoku-solver"},
        image: "./img/captura_sudoku_solver.png",
        about: "Este projeto consiste em um solucionador de sudoku. O usuário insere os números em um template que corresponde a um jogo do sudoku. O programa então retorna um jogo válido resolvido."
    },
    {
        id: 6,
        title: "To-do List",
        date: new Date(2023, 0),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Github":"https://github.com/Eric-Eduardo/To-Do-List"},
        image: "./img/captura_to_do_list.png",
        about: "Um sistema de To-do List simples. Os dados são armazenados no local storage, o que permite que cada dispositivo guarde suas próprias tarefas."
    },
    {
        id: 7,
        title: "Mini Projeto Lâmpada",
        date: new Date(2022, 9),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Github":"https://github.com/Eric-Eduardo/mini-projeto-lampada"},
        image: "./img/captura_mini_projeto_lampada.png",
        about: "Mini projeto de acender, apagar e quebrar uma lâmpada. O projeto foi fruto apenas do início do meu aprendizado de JavaScript."
    },
    {
        id: 8,
        title: "Mini Projeto Semáforo",
        date: new Date(2022, 9),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Github":"https://github.com/Eric-Eduardo/mini-projeto-semaforo"},
        image: "./img/captura_mini_projeto_semaforo.png",
        about: "Mini projeto de um cemáforo, no qual é possível modificar o estado do semáforo manualmente ou deixar como automático. O projeto foi fruto apenas do início do meu aprendizado de JavaScript."
    },
    {
        id: 9,
        title: "Calculadora de IMC",
        date: new Date(2022, 9),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/Calculadora-IMC/", "Github":"https://github.com/Eric-Eduardo/Calculadora-IMC"},
        image: "./img/captura_calculadora_imc.png",
        about: "Uma calculadora de IMC (Índice de Massa Corporal). O projeto foi fruto apenas do início do meu aprendizado de JavaScript."
    },
    {
        id: 10,
        title: "Rocketcoffee",
        date: new Date(2022, 7),
        technologies: ["HTML", "CSS"],
        links: {"Site":"https://eric-eduardo.github.io/rocketcoffee/", "Github":"https://github.com/Eric-Eduardo/rocketcoffee"},
        image: "./img/captura_rocketcoffee.png",
        about: "Rocketcoffee é um cardápio online desenvolvido durante a Maratona Explorer 3.0, da Rocketseat."
    },
    {
        id: 11,
        title: "Slider Pokemon",
        date: new Date(2022, 7),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Site":"https://eric-eduardo.github.io/projeto-slider-pokemon/", "Github":"https://github.com/Eric-Eduardo/projeto-slider-pokemon"},
        image: "./img/captura_pokemon_slider.png",
        about: "Amostra de Pokemons. O site foi desenvolvido no evento MapaDev Week."
    }
];

const idFavoriteProjects = [2, 3, 4, 5];
const divProjectsContent = document.querySelector('.projects-content');
const months = ['jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
let filteredProjects = projects;
let pageIndex = 0;
let intemsPerPage = 4;


if (window.location.pathname.endsWith('index.html')) {
    // Adicionar os projetos na página index.html
    for (let id of idFavoriteProjects) {
        let prj = projects.filter((project) => project.id == id)[0];
        // let date = months[prj.date.getMonth()] + " " + prj.date.getFullYear();

        let divProject = createDivProject(id, prj.title, prj.technologies, prj.image, prj.about);
        divProject.addEventListener('click', () => {viewProject(id)});
        divProjectsContent.appendChild(divProject);
    }
} else {
    document.querySelector('.paginator .icon-tabler-chevron-left').addEventListener("click", () => {
        if (pageIndex>0) { 
            pageIndex-=1;
            loadProjects();
        }
    });
    document.querySelector('.paginator .icon-tabler-chevron-right').addEventListener("click", () => {
        if (pageIndex<(filteredProjects.length/intemsPerPage)-1) { 
            pageIndex+=1;
            loadProjects();
        }
    });
    loadProjects();
}


function loadProjects() {
    divProjectsContent.innerHTML = '';

    for (let i = pageIndex*intemsPerPage; i<(pageIndex*intemsPerPage)+intemsPerPage; i++) {
        
        if (!filteredProjects[i]) { break }

        const item = createDivProject(filteredProjects[i].id, filteredProjects[i].title, filteredProjects[i].technologies, filteredProjects[i].image, filteredProjects[i].about);

        item.addEventListener('click', () => {viewProject(filteredProjects[i].id)});

        divProjectsContent.appendChild(item);
    }

    loadPagination();
}

function loadPagination() {
    const paginatorNav = document.querySelector('.paginator div');
    paginatorNav.innerHTML = '';

    for (let i = 0; i < (filteredProjects.length/intemsPerPage); i++) {
        
        const span = document.createElement('span');
        span.innerHTML = i+1;
        span.addEventListener('click', (e) => {
            pageIndex = i;
            loadProjects();
        });

        if (i === pageIndex) {
            span.style.backgroundColor = '#FFB500';
        }

        paginatorNav.appendChild(span);
    }
}

function createDivProject(id, title, technologies, image, about) {
    /*<div class="card">
        <div class="info">
            <div class="card-content">
                <h2 class="title">Habits</h2>
                <p class="text">Projeto desenvolvido na NLW Setup, evento promovido pela Rocketsear. Habits consistem em um site para registros/checklist de rotinas diárias, como beber água, caminhar, estudar etc</p>
            </div>
            <ul class="technologies">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </div>
        <div class="card-img">
            <img src="./img/captura_habits.png">
        </div>
    </div>*/

    const divCard = document.createElement('div');
    divCard.className = 'card';

    const  divInfo = document.createElement('div');
    divInfo.className = 'info';

    const divCardContent = document.createElement('div');
    divCardContent.className = 'card-content';
    const h2Title = document.createElement('h2');
    h2Title.className = 'title';
    const pText = document.createElement('p');
    pText.className = 'text';

    h2Title.innerText = title;
    pText.innerText = about;

    divCardContent.appendChild(h2Title);
    divCardContent.appendChild(pText);
    
    const ulTechnologies = document.createElement('ul');
    ulTechnologies.className = 'technologies';
    for (let tech of technologies) {
        const li = document.createElement('li');
        li.innerText = tech;
        ulTechnologies.append(li);
    }

    divInfo.appendChild(divCardContent);
    divInfo.appendChild(ulTechnologies);
    divCard.appendChild(divInfo);

    var img = new Image();
    img.src = image;
    img.onload = () => {
        const divImage = document.createElement('div');
        divImage.className = 'card-img';
        divImage.appendChild(img);
        divCard.appendChild(divImage);
    }


    
    return divCard;
}

function viewProject(id) {
    const project = projects.filter((project) => project.id == id)[0];
    
    // console.log(project.title);

}

/*
const divViewProject = document.querySelector('.project-view');
const elementCloseProject = document.querySelector('.project-view .icon-tabler-x');
const timeline = document.querySelector('.timeline');
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const favoriteProjectsId = [1, 2, 3, 4, 5];




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
    
    if (achievements[idc].endDate != 0) period = achievements[idc].startDate + '-' + achievements[idc].endDate;
    else period = 'Em andamento';
    
    insertAchievement(achievements[idc].title, period, achievements[idc].description);

    if (idc < achievements.length-1) {
        timeline.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="60">
                                    <line x1="5" y1="0" x2="5" y2="60" stroke-width="1" stroke="#FFB500" stroke-dasharray="9"/>
                                </svg>`;
    }
}

//Ordenar os projetos em ordem decrescente pela data
projects.sort(sortProjectsByDate);


// Mostra os projetos na página inicial
const compareProject = (project) => favoriteProjectsId.includes(project.id);
const  filteredProjects =  projects.filter(compareProject);
for (let i in filteredProjects) {
    insertProject(filteredProjects[i].title, filteredProjects[i].technologies, filteredProjects[i].about, filteredProjects[i].image, i);
}


// Eventos da visualização do projeto
elementCloseProject.addEventListener('click', closeViewProject);
divViewProject.addEventListener('click', (event) => {if (event.target.className=="project-view") closeViewProject()});

//Funções
function sortProjectsByDate(a, b) {
    // a<b: -1, a>b: 1, a=b: 0 
    if (a.date<b.date) return 1;
    else if (a.date>b.date) return -1;
    else return 0;
}

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
    // h2Title.textContent = `${title} - ${months[projects[id].date.getMonth()]} ${projects[id].date.getFullYear()}`
    // h2Title.textContent = `${title}-${months[projects[id].date.getMonth()]}`
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

    document.querySelector(".project-view .date p").innerHTML = `${months[projects[id].date.getMonth()]} ${projects[id].date.getFullYear()}`;
    
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

// function renderProjects() {
//     for(let obj in projects) {
//         insertProject
//     }
// }

function closeViewProject() {
    divViewProject.style.visibility = 'hidden';
    document.querySelector('body').style.overflow = 'visible';
}
*/
