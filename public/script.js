// Criando o catálogo de filmes e séries

const catalogo = [
  {
    id: 1,
    titulo: "Family Guy",
    tipo: "serie",
    ano: 1999,
    generos: ["comédia", "animação"],
    nota: 9.2,
    assistido: true
  },

  {
    id: 2,
    titulo: "Peaky Blinders",
    tipo: "serie",
    ano: 2013,
    generos: ["drama", "crime"],
    nota: 9.1,
    assistido: true
  },

  {
    id: 3,
    titulo: "As Branquelas",
    tipo: "filme",
    ano: 2004,
    generos: ["comédia"],
    nota: 8.3,
    assistido: false
  },

  {
    id: 4,
    titulo: "Round 6",
    tipo: "serie",
    ano: 2021,
    generos: ["suspense", "ação"],
    nota: 8.7,
    assistido: true
  },

  {
    id: 5,
    titulo: "Oppenheimer",
    tipo: "filme",
    ano: 2023,
    generos: ["drama", "história"],
    nota: 9.0,
    assistido: false
  },

  {
    id: 6,
    titulo: "The Walking Dead",
    tipo: "serie",
    ano: 2005,
    generos: ["terror", "drama"],
    nota: 8.9,
    assistido: false
  }
];


// Mostrando o catálogo completo

console.log(catalogo);


// Acessando algumas informações do catálogo

console.log(catalogo[0].titulo);

console.log(catalogo[catalogo.length - 1].ano);


// Verificando se existe segundo gênero no terceiro item

if (catalogo[2].generos[1]) {
  console.log(catalogo[2].generos[1]);
} else {
  console.log("O terceiro item possui apenas um gênero.");
}


// Listando todos os títulos

catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


// Criando array com títulos em maiúsculo

const titulosEmCaixaAlta = catalogo.map(item =>
  item.titulo.toUpperCase()
);

console.log(titulosEmCaixaAlta);


// Filtrando itens não assistidos

const naoAssistidos = catalogo.filter(item =>
  item.assistido === false
);

console.log("Quantidade de não assistidos:", naoAssistidos.length);


// Procurando item com nota maior ou igual a 9

const itemNotaAlta = catalogo.find(item =>
  item.nota >= 9
);

if (itemNotaAlta) {
  console.log(`${itemNotaAlta.titulo} - Nota ${itemNotaAlta.nota}`);
} else {
  console.log("Nenhum item encontrado.");
}


// Calculando média geral

const somaNotas = catalogo.reduce((total, item) =>
  total + item.nota, 0
);

const mediaGeral = somaNotas / catalogo.length;


// Calculando média dos assistidos

const assistidos = catalogo.filter(item => item.assistido);

const somaAssistidos = assistidos.reduce((total, item) =>
  total + item.nota, 0
);

const mediaAssistidos = somaAssistidos / assistidos.length;


console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));


// Fazendo verificações com some e every

const existeAntes2000 = catalogo.some(item =>
  item.ano < 2000
);

const todosTemGenero = catalogo.every(item =>
  item.generos.length > 0
);

console.log("Existe item antes de 2000?", existeAntes2000);
console.log("Todos possuem gênero?", todosTemGenero);


// Contando filmes e séries

const totalFilmes = catalogo.filter(item =>
  item.tipo === "filme"
).length;

const totalSeries = catalogo.filter(item =>
  item.tipo === "serie"
).length;


// Criando ranking das maiores notas

const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);


// Mostrando resumo na tela

const output = document.getElementById("output");

output.innerHTML = `
  <h2>Resumo do Catálogo</h2>

  <p>Total de itens: ${catalogo.length}</p>

  <p>Filmes: ${totalFilmes}</p>

  <p>Séries: ${totalSeries}</p>

  <p>Não assistidos: ${naoAssistidos.length}</p>

  <p>Média geral: ${mediaGeral.toFixed(2)}</p>

  <h3>Top 3 Maiores Notas</h3>

  <ol>
    ${ranking.map(item =>
      `<li>${item.titulo} - ${item.nota}</li>`
    ).join("")}
  </ol>
`;