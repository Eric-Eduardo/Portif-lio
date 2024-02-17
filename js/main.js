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
        description: "Iniciei o curso de TI na Universidade Federal do Rio Grande do Norte (UFRN)."
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
        about: "Projeto desenvolvido na NLW Setup, evento promovido pela Rocketsear. Habits consistem em um site para registros/checklist de rotinas diárias, como beber água, caminhar, estudar etc."
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
    },
    {
        id: 12,
        title: "MUVJE",
        date: new Date(2021, 11),
        technologies: ["HTML", "CSS", "JavaScript", "Java"],
        links: {"Github":"https://github.com/Aninha1834/Museu", "Documento":"https://drive.google.com/file/d/1nF-1pBR-_FXWiUK2TsLTlp7qPT8H7yka/view?usp=sharing"},
        image: "",
        about: `O MUVJE (<strong>Museu Virtual José Elviro</strong>) visa a divulgação de informações sobre o Museu José Elviro e seu acervo, ou seja, o site funciona como uma extensão do museu físico. O projeto foi fruto do Trabalho de Conclusão de Curso do IFRN, denominado "<i>MUVJE: uma proposta de virtualização do Museu José Elviro da cidade de Macau - RN</i>". O projeto foi desenvolvido por mim e por Ana Cláudia de Melo, juntamente com os professores João Hélis, Pedro Jonath e Alana Driziê.`
    },
    {
        id: 13,
        title: "Nlw Expert Notes",
        date: new Date(2024, 1),
        technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "TypeScript"],
        links: {"Github":"https://github.com/Eric-Eduardo/nlw-expert-notes", "Site":"https://nlw-expert-notes-ruddy.vercel.app/"},
        image: "./img/img-nlw-expert-notes.png",
        about: "O projeto foi desenvolvido durante o evento <i>nlw expert</i>, da <i>Rocketseat</i>. O site consisite em um sistema de notas (anotações), onde o usuário pode criar notas em <strong>texto ou áudio</strong>."
    },
    {
        id: 14,
        title: "Campo Minado",
        date: new Date(2023, 11),
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {"Github":"https://github.com/Eric-Eduardo/Campo-minado", "Site":"https://campo-minado-delta.vercel.app/"},
        image: "./img/img-campo-minado.png",
        about: "O clássico jogo Campo Minado."
    }
];

const options = ["HTML", "CSS", "JavaScript", "Java", "ReactJS", "TypeScript"];
const idFavoriteProjects = [13, 1, 4, 5];
const divProjectsContent = document.querySelector('.projects-content');
const months = ['jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
let filteredProjects = projects;
let pageIndex = 0;
let intemsPerPage = 4;

projects.sort(sortProjectsByDate);


document.querySelector('.project-view').addEventListener('click', (event) => {
    if (event.target.className=="project-view" || event.target.localName=="svg" || event.target.parentNode.localName=="svg") closeViewProject()
});


if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('Portifolio/')) {
    // Inserir as conquistas
    const divTimeLine = document.querySelector('#achievements .timeline');
    
    for (let i in achievements) {
        divTimeLine.appendChild(createDivAchievement(achievements[i].title, achievements[i].startDate, achievements[i].endDate, achievements[i].description));
        
        if (i < achievements.length-1) {
            divTimeLine.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="60">
                                        <line x1="5" y1="0" x2="5" y2="60" stroke-width="1" stroke="#FFB500" stroke-dasharray="9"></line>
                                    </svg>`;
        }
    }

    // Adicionar os projetos na página index.html
    for (let id of idFavoriteProjects) {
        let prj = projects.filter((project) => project.id == id)[0];
        let divProject = createDivProject(id, prj.title, prj.technologies, prj.image, prj.about);
        divProject.addEventListener('click', () => {viewProject(id)});
        divProjectsContent.appendChild(divProject);
    }
} else {
    
    loadOptions();
    document.querySelector('#check-all').addEventListener('click', () => {
        let labelOptions = document.querySelectorAll('.options input');
        for (let label of labelOptions) {
            label.checked = true;
        }
    });
    document.querySelector('#uncheck-all').addEventListener('click', () => {
        let labelOptions = document.querySelectorAll('.options input');
        for (let label of labelOptions) {
            label.checked = false;
        }
    });
    
    loadProjects();

    document.querySelector('.apply-filter').addEventListener('click', applyFilter);
}

function loadOptions() {
    var optionElement = document.querySelector('.options');
    optionElement.innerHTML = '';
    for (var opt of options) {
        optionElement.innerHTML += `<input type="checkbox" id="${opt.toLowerCase()}" name="technology">`;
        optionElement.innerHTML += `<label class="btn" for="${opt.toLowerCase()}">${opt}</label>`;
    }
}

function loadProjects() {
    divProjectsContent.innerHTML = '';
    let time = 1;
    for (let i = pageIndex*intemsPerPage; i<(pageIndex*intemsPerPage)+intemsPerPage; i++) {
        
        if (!filteredProjects[i]) { break }

        const item = createDivProject(filteredProjects[i].id, filteredProjects[i].title, filteredProjects[i].technologies, filteredProjects[i].image, filteredProjects[i].about);

        item.addEventListener('click', () => {viewProject(filteredProjects[i].id)});

        
        item.style.opacity = '0';
        item.style.animationDelay = `.${time}s`;
        item.classList.add('animation-emerge-left');
        time+=1;

        divProjectsContent.appendChild(item);
    }

    loadPagination();
}
function loadPagination() {
    const paginatorNav = document.querySelector('.paginator');
    const div = document.createElement('div');

    paginatorNav.innerHTML = '';

    if (filteredProjects.length > 0) {

        for (let i = 0; i < (filteredProjects.length/intemsPerPage); i++) {
            
            const span = document.createElement('span');
            span.innerText = i+1;


            if (i === pageIndex) {
                span.style.backgroundColor = '#FFB500';
            }

            div.appendChild(span);
        }
        paginatorNav.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="15 6 9 12 15 18" />
        </svg>`;
        paginatorNav.appendChild(div);
        paginatorNav.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="9 6 15 12 9 18" />
        </svg>`;
        
        for (let span of document.querySelectorAll('.paginator span')) {
            span.addEventListener('click', () => {
                pageIndex = Number(span.innerText)-1;
                loadProjects();
            });
        }

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
    } else {
        paginatorNav.innerHTML = `<div class='error-message'><svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_143_2)">
        <path d="M50 87.5C70.7107 87.5 87.5 70.7107 87.5 50C87.5 29.2893 70.7107 12.5 50 12.5C29.2893 12.5 12.5 29.2893 12.5 50C12.5 70.7107 29.2893 87.5 50 87.5Z" stroke="#BDBDCA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M37.5 41.6666H37.5417" stroke="#BDBDCA" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M62.5 41.6666H62.5417" stroke="#BDBDCA" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M39.5833 66.6666C47.0468 61.994 55.7989 59.806 64.5833 60.4166" stroke="#BDBDCA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_143_2">
        <rect width="100" height="100" fill="white"/>
        </clipPath>
        </defs>
    </svg>
    <h2>Oops, não foram encontrados resultados!</h2>
    <p class="text">Não foi possível encontrar projetos para essas tecnologias. Por favor, selecine outras opções!</p>
    </div>`;
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
    pText.innerHTML = about;

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
        // divImage.appendChild(img);
        divImage.style.backgroundImage = `url('${image}')`
        divImage.style.backgroundSize = 'cover';
        divImage.style.backgroundPosition = 'top';
        divCard.appendChild(divImage);
    }


    
    return divCard;
}

function createDivAchievement(title, startDate, endDate, description) {
    /*
    <div class="achievement">
        <h2 class="title">Título</h2>
        <div class="date">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ce9400" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                <line x1="16" y1="3" x2="16" y2="7"></line>
                <line x1="8" y1="3" x2="8" y2="7"></line>
                <line x1="4" y1="11" x2="20" y2="11"></line>
                <rect x="8" y="15" width="2" height="2"></rect>
            </svg>
            <p>2018-2021</p>
        </div>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vitae deleniti. Molestias delectus quisquam quaerat vero neque illum accusamus saepe officiis perspiciatis, necessitatibus excepturi impedit tempore alias ea debitis nihil.</p>
    </div>
    */
    const divAchievement = document.createElement('div');
    divAchievement.className = 'achievement';

    const h2Title = document.createElement('h2');
    h2Title.className = 'title';
    h2Title.innerText = title;

    let date = '';
    if (endDate == 0) {
        date = startDate + '-Agora';
        divAchievement.classList.add('disable');
    } else if (startDate == endDate) { date = startDate; }
    else { date = startDate + '-' + endDate; }
    
    const divDate = document.createElement('div');
    divDate.className = 'date';
    divDate.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ce9400" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                            <line x1="16" y1="3" x2="16" y2="7"></line>
                            <line x1="8" y1="3" x2="8" y2="7"></line>
                            <line x1="4" y1="11" x2="20" y2="11"></line>
                            <rect x="8" y="15" width="2" height="2"></rect>
                        </svg>
                        <p>${date}</p>`;

    const pText = document.createElement('p');
    pText.className = 'text';
    pText.innerText = description;

    divAchievement.appendChild(h2Title);
    divAchievement.appendChild(divDate);
    divAchievement.appendChild(pText);

    return divAchievement;
}

function viewProject(id) {
    const project = projects.filter((project) => project.id == id)[0];
    const divImg = document.querySelector('.project-view .view .image');

    if (divImg != null) divImg.parentNode.removeChild(divImg);

    document.querySelector('.project-view .technologies').innerHTML = '';
    document.querySelector('.project-view .links').innerHTML = '';
    
    document.querySelector('.project-view .date p').innerText = months[project.date.getMonth()] + " " + project.date.getFullYear();
    document.querySelector('.project-view .title').innerText = project.title;

    for (let tech of project.technologies) {
        document.querySelector('.project-view .technologies').innerHTML += `<li>${tech}</li>`;
    }

    for (let key of Object.keys(project.links)) {
        document.querySelector('.project-view .links').innerHTML += `<a href=${project.links[key]} target="_blank"><li>${key}</li></a>`;
    }

    document.querySelector('.project-view .description').innerHTML = project.about;

    if (project.image) {
        var img = new Image();
        img.src = project.image;
        img.onload = () => {
            document.querySelector(".project-view .view").innerHTML += `
            <div class="image">
                <img src="${project.image}">
            </div>`;
            document.querySelector('.project-view .image').style.backgroundImage =`url('${project.image}')`;
        }
    }

    document.querySelector('.project-view').style.visibility = 'visible';
    document.querySelector('html').style.overflow = 'hidden';

    // Adição das animações
    document.querySelector('.project-view').style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    document.querySelector('.project-view .title').style.animationDelay = ".1s";
    document.querySelector('.project-view .technologies').style.animationDelay = ".2s";
    document.querySelector('.body-content .subtitle:nth-child(1)').style.animationDelay = ".3s";
    document.querySelector('.project-view .links').style.animationDelay = ".4s";
    document.querySelector('.project-view .subtitle:nth-child(3)').style.animationDelay = ".5s";
    document.querySelector('.project-view .text-content').style.animationDelay = ".6s";

    document.querySelector('.project-view .view').classList.remove('animation-zoom-out');
    document.querySelector('.project-view .view').classList.add('animation-zoom-in');
    document.querySelector('.project-view .title').classList.add('animation-emerge-left');
    document.querySelector('.project-view .technologies').classList.add('animation-emerge-bottom');
    document.querySelector('.body-content .subtitle:nth-child(1)').classList.add('animation-emerge-bottom');
    document.querySelector('.project-view .links').classList.add('animation-emerge-bottom');
    document.querySelector('.body-content .subtitle:nth-child(3)').classList.add('animation-emerge-bottom');
    document.querySelector('.project-view .text-content').classList.add('animation-emerge-bottom');
}

function closeViewProject() {
    document.querySelector('.project-view .view').classList.add('animation-zoom-out');
    document.querySelector('.project-view').style.backgroundColor = "transparent";

    setTimeout(() => {document.querySelector('.project-view').style.visibility = 'hidden'}, 100);
    // document.querySelector('.project-view').style.visibility = 'hidden';
    document.querySelector('html').style.overflow = 'visible';
    
    // Remoção das animações
    document.querySelector('.project-view .view').classList.remove('animation-zoom-in');
    document.querySelector('.project-view .title').classList.remove('.animation-emerge-left');
    document.querySelector('.project-view .technologies').classList.remove('animation-emerge-bottom');
    document.querySelector('.body-content .subtitle:nth-child(1)').classList.remove('animation-emerge-bottom');
    document.querySelector('.project-view .links').classList.remove('animation-emerge-bottom');
    document.querySelector('.body-content .subtitle:nth-child(3)').classList.remove('animation-emerge-bottom');
    document.querySelector('.project-view .text-content').classList.remove('animation-emerge-bottom');
}

function applyFilter() {
    const options = [];
    filteredProjects = [];
    // const idProjects = [];

    for (let name of document.querySelectorAll('.filter .options input:checked + label')) {
        options.push(name.innerText);
    }

    if(options.length == 0) {
        filteredProjects = projects;
    } else {
    
        for (let project of projects) {
            for (let option of options) {
                if (project.technologies.includes(option)) {
                    filteredProjects.push(project);
                    break;
                }
            }
        }
    }
    
    loadProjects();
}

function sortProjectsByDate(a, b) {
    // a<b: -1, a>b: 1, a=b: 0 
    if (a.date<b.date) return 1;
    else if (a.date>b.date) return -1;
    else return 0;
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
