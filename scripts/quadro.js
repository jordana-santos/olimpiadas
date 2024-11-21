// Dados das Olimpíadas por ano
//pagina quadro de medalhas
const dadosOlimpicos = {
    2020: [
        { país: "Estados Unidos", ouro: 39, prata: 41, bronze: 33 },
        { país: "China", ouro: 38, prata: 32, bronze: 18 },
        { país: "Japão", ouro: 27, prata: 14, bronze: 17 },
        { país: "Grã-Bretanha", ouro: 22, prata: 21, bronze: 22 },
        { país: "ROC", ouro: 20, prata: 28, bronze: 23 }
    ],
    2016: [
        { país: "Estados Unidos", ouro: 46, prata: 37, bronze: 38 },
        { país: "Grã-Bretanha", ouro: 27, prata: 23, bronze: 17 },
        { país: "China", ouro: 26, prata: 18, bronze: 26 },
        { país: "Rússia", ouro: 19, prata: 17, bronze: 20 },
        { país: "Alemanha", ouro: 17, prata: 10, bronze: 15 }
    ],
    2012: [
        { país: "Estados Unidos", ouro: 46, prata: 28, bronze: 29 },
        { país: "China", ouro: 38, prata: 27, bronze: 23 },
        { país: "Grã-Bretanha", ouro: 29, prata: 17, bronze: 19 },
        { país: "Rússia", ouro: 24, prata: 26, bronze: 32 },
        { país: "Coreia do Sul", ouro: 13, prata: 8, bronze: 7 }
    ],
    2022: [
        { país: "Noruega", ouro: 16, prata: 8, bronze: 13 },
        { país: "Alemanha", ouro: 12, prata: 10, bronze: 5 },
        { país: "China", ouro: 9, prata: 4, bronze: 2 },
        { país: "Estados Unidos", ouro: 8, prata: 10, bronze: 7 },
        { país: "Suécia", ouro: 8, prata: 5, bronze: 5 }
    ],
    2018: [
        { país: "Noruega", ouro: 14, prata: 14, bronze: 11 },
        { país: "Alemanha", ouro: 14, prata: 10, bronze: 7 },
        { país: "Canadá", ouro: 11, prata: 8, bronze: 10 },
        { país: "Estados Unidos", ouro: 9, prata: 8, bronze: 6 },
        { país: "Holanda", ouro: 8, prata: 6, bronze: 6 }
    ],
    2014: [
        { país: "Rússia", ouro: 13, prata: 11, bronze: 9 },
        { país: "Noruega", ouro: 11, prata: 5, bronze: 10 },
        { país: "Canadá", ouro: 10, prata: 10, bronze: 5 },
        { país: "Estados Unidos", ouro: 9, prata: 7, bronze: 12 },
        { país: "Alemanha", ouro: 8, prata: 6, bronze: 5 }
    ]
};

// Função para criar e preencher os resultados em uma tabela com base no ano
function preencherResultados(ano) {
    const resultadosDiv = document.getElementById("results");
    resultadosDiv.innerHTML = ""; 

    const medalhasAno = dadosOlimpicos[ano];
    
    if (medalhasAno) {
        const tabela = document.createElement("table");
        tabela.classList.add("table", "table-striped", "table-bordered");

        //cabeçalho da tabela
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        const thEmpty = document.createElement("th");
        headerRow.appendChild(thEmpty);

        const thOuro = document.createElement("th");
        thOuro.innerText = "Ouro";
        headerRow.appendChild(thOuro);

        const thPrata = document.createElement("th");
        thPrata.innerText = "Prata";
        headerRow.appendChild(thPrata);

        const thBronze = document.createElement("th");
        thBronze.innerText = "Bronze";
        headerRow.appendChild(thBronze);

        thead.appendChild(headerRow);
        tabela.appendChild(thead);

        //corpo da tabela
        const tbody = document.createElement("tbody");

        medalhasAno.forEach(item => {
            const row = document.createElement("tr");

            const tdPais = document.createElement("td");
            tdPais.innerText = item.país;
            row.appendChild(tdPais);

            const tdOuro = document.createElement("td");
            tdOuro.innerText = item.ouro;
            row.appendChild(tdOuro);

            const tdPrata = document.createElement("td");
            tdPrata.innerText = item.prata;
            row.appendChild(tdPrata);

            const tdBronze = document.createElement("td");
            tdBronze.innerText = item.bronze;
            row.appendChild(tdBronze);

            tbody.appendChild(row);
        });

        tabela.appendChild(tbody);
        resultadosDiv.appendChild(tabela);
    } else {
        resultadosDiv.innerHTML = "<p>Nenhum dado disponível para este ano.</p>";
    }
}

//capta o ano selecionado
document.getElementById("yearSelect").addEventListener("change", function() {
    const anoSelecionado = this.value;
    preencherResultados(anoSelecionado);
});

//ano padrao
preencherResultados("2020");
