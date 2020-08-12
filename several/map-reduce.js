// Map
console.log("*** Usando Map ***\nMap é usado pra transformação.");

produtos = [
  {
    nome: "notebook",
    preco: 2100
  },
  {
    nome: "smartphone",
    preco: 400
  }
];

const precosEmReal = produtos.map(p => p.preco * 5);

console.log('Preços em Real: ', precosEmReal);
console.log('Valores inicial de produtos. Não sofreram nenhuma modificação: ', produtos);

// Reduce
console.log("\n\n*** Usando Reduce ***\nReduce é usado pra resultados,somatórios.");

produtos2 = [
  {
    nome: "notebook",
    preco: 2100
  },
  {
    nome: "smartphone",
    preco: 400
  },
  {
    nome: "carregador",
    preco: 100
  }
];

const total = produtos2.reduce((a, b) => a + b.preco, 0);
console.log('Valor total dos preços: ', total);

// Map e Reduce juntos
console.log("\n\n*** Utilizando Map e Reduce juntos ***");

const total2 = produtos2.map(p => p.preco * 5).reduce((a, b) => a + b, 0);

console.log('Valor total de todos preços em Real: ', total2);
