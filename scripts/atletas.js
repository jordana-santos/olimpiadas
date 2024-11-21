const athletes = [
    { name: "Armand Duplantis", image: "img/atletas/armand_duplantis.avif" },
    { name: "Beatriz Souza", image: "img/atletas/beatriz_souza.jpg" },
    { name: "Caeleb Dressel", image: "img/atletas/caeleb_dressel.avif" },
    { name: "Caio Bonfim", image: "img/atletas/caio_bonfim.jpg" },
    { name: "Carissa Moore", image: "img/atletas/carissa_moore.avif" },
    { name: "Elin Rubensson", image: "img/atletas/elin_rubensson.avif" },
    { name: "Felipe Toledo", image: "img/atletas/filipe_toledo.avif" },
    { name: "Flora Duffy", image: "img/atletas/flora_duffy.avif" },
    { name: "Katie Ledecky", image: "img/atletas/katie_ledecky.avif" },
    { name: "Kaylee Mckeown", image: "img/atletas/kaylee_mckeown.avif" },
    { name: "Kristof Milak", image: "img/atletas/kristof_milak.avif" },
    { name: "Neeraj Chopra", image: "img/atletas/neeraj_chopra.avif" },
    { name: "Rayssa Leal", image: "img/atletas/rayssa_leal.avif" },
    { name: "Rebeca Andrade", image: "img/atletas/rebeca_andrade.webp" },
    { name: "Tadej Pogacar", image: "img/atletas/tadej_pogacar.avif" },
    { name: "Tomoa Narasaki", image: "img/atletas/tomoa_narasaki.avif" },
    { name: "Yuto Horigome", image: "img/atletas/yuto_horigome.avif" },
]

const athletesPerPage = 6;
let currentPage = 1;
const totalPages = Math.ceil(athletes.length / athletesPerPage);

function displayAthletes(page) { //mostra os cards dos atletas
    const start = (page - 1) * athletesPerPage;
    const end = start + athletesPerPage;
    const container = document.getElementById('athletesContainer');
    container.innerHTML = '';

    athletes.slice(start, end).forEach(athlete => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6 col-6';
        card.innerHTML = `
            <div class="card item-card">
                <img src="${athlete.image}" alt="${athlete.name}">
                <div class="card-body">
                    <p class="card-text">${athlete.name}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    updatePageIndicators();
}

function updatePageIndicators() { 
    const indicatorsContainer = document.getElementById('pageIndicators');
    indicatorsContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const indicator = document.createElement('span');
        indicator.className = `page-indicator ${i === currentPage ? 'active' : ''}`;
        indicator.addEventListener('click', () => {
            currentPage = i;
            displayAthletes(currentPage);
        });
        indicatorsContainer.appendChild(indicator);
    }
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayAthletes(currentPage);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayAthletes(currentPage);
    }
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredAthletes = athletes.filter(athlete => 
        athlete.name.toLowerCase().includes(searchTerm)
    );
    displayFilteredAthletes(filteredAthletes);
});

function displayFilteredAthletes(filteredAthletes) {
    const container = document.getElementById('athletesContainer');
    container.innerHTML = '';

    filteredAthletes.forEach(athlete => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6 col-6';
        card.innerHTML = `
            <div class="card item-card">
                <img src="${athlete.image}" alt="${athlete.name}">
                <div class="card-body">
                    <p class="card-text">${athlete.name}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById('pageIndicators').style.display = 'none';
    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
}

displayAthletes(currentPage);