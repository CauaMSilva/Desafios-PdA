// Desafio 1: Extraia e imprima apenas o nome e a cidade do primeiro usuário usando destructuring.
// Desafio 2: Crie um novo array `usuariosDoNorte`, cópia do original, mas adicionando um novo usuário. Use o spread operator. (Novo usuário: { nome: "Ana", cidade: "Manaus", ... })
// Desafio 3: Crie um novo objeto `beatrizAtualizada` com todas as infos originais, mas com o email "bia.dev@exemplo.com". Use o spread operator.
// [Para ir além 🛸] Desafio 4: Crie uma função `mostrarInteresses(usuario)` que use destructuring no parâmetro para extrair `nome` e `interesses` e imprima uma frase com eles.

//vetor base da atividade:
const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

//desafio extra:
function mostrarInteresses(pessoa){
    const { nome } = pessoa;
    const hobbies = [...pessoa.interesses];
    console.log(`${nome} gosta de ${hobbies[0]},${hobbies[1]} e ${hobbies[2]}`);
}
//desafio 1:
const { nome, idade } = usuarios[0];

//desafio 2:

const usuariosDoNorte = [
    ...usuarios,
    {
        nome: "ana",
        idade: 21,
        email: "ana@exemplo.com",
        cidade: "manaus",
        interesse: ['Música, esporte, damça']
    }
];

//desafio 3:
const beatrizAtualizada = {...usuarios[1], email: "bia.dev@exemplo.com"};

