const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const lista = [
    {
        id: 1,
        pergunta: 'Em que dia é comemorado o Halloween?',
        questoes: [
            '12 de outubro',
            '31 de outubro',
            '25 de dezembro',
            '1º de janeiro',
        ],
        correta: 1
    },
    {
        id: 2,
        pergunta: 'O que as crianças dizem ao visitar as casas durante o Halloween para ganhar doces?',
        questoes: [
            'Festa ou música?',
            'Doces ou travessuras?',
            'Brincadeiras ou presentes?',
            'Fantasias ou balas?',
        ],
        correta: 1
    },
    {
        id: 3,
        pergunta: 'Qual decoração famosa do Halloween é esculpida com um rosto assustador e recebe uma luz dentro?',
        questoes: [
            'Uma melancia',
            'Uma abóbora',
            'Uma maçã',
            'Uma melancia pintada',
        ],
        correta: 1
    },
    {
        id: 4,
        pergunta: 'Quais são algumas das fantasias mais populares no Halloween?',
        questoes: [
            'Princesas, bailarinas e fadas.',
            'Bruxas, vampiros, fantasmas e esqueletos.',
            'Médicos, professores e cozinheiros.',
            'Jogadores, cantores e atletas.',
        ],
        correta: 1
    },
    {
        id: 5,
        pergunta: 'Quais são as cores mais comuns na decoração de Halloween?',
        questoes: [
            'Azul, verde e amarelo.',
            'Rosa, branco e vermelho.',
            'Laranja, preto e roxo.',
            'Marrom, azul e branco.',
        ],
        correta: 2
    },
    {
        id: 6,
        pergunta: 'Em que tipo de celebrações o Halloween tem suas raízes?',
        questoes: [
            'Antigas celebrações europeias.',
            'Festas tradicionais africanas.',
            'Comemorações modernas americanas.',
            'Festas típicas asiáticas.',
        ],
        correta: 0
    },
    {
        id: 7,
        pergunta: 'Qual é o objetivo da brincadeira de pescar maçãs com a boca no Halloween?',
        questoes: [
            'Pegar as maçãs usando uma colher.',
            'Pegar as maçãs com as mãos.',
            'Pegar uma maçã usando apenas a boca, sem utilizar as mãos.',
            'Jogar as maçãs para fora da bacia.',
        ],
        correta: 2
    },
    {
        id: 8,
        pergunta: 'Há quanto tempo o Halloween é praticado?',
        questoes: [
            'Há mais de 100 anos.',
            'Há mais de 500 anos.',
            'Há mais de 3 mil anos.',
            'Há mais de 10 mil anos.',
        ],
        correta: 2
    },
    {
        id: 9,
        pergunta: 'Qual povo deu origem ao Halloween?',
        questoes: [
            'Os romanos',
            'Os celtas',
            'Os egípcios',
            'Os gregos',
        ],
        correta: 1
    },
    {
        id: 10,
        pergunta: 'Qual era o nome do festival celebrado pelos celtas?',
        questoes: [
            'Natal',
            'Samhain',
            'Dia das Bruxas',
            'Festival da Primavera',
        ],
        correta: 1
    },
    {
        id: 11,
        pergunta: 'Quantos dias durava o festival de Samhain?',
        questoes: [
            'Um dia',
            'Dois dias',
            'Três dias',
            'Cinco dias',
        ],
        correta: 2
    },
    {
        id: 12,
        pergunta: 'O que os celtas comemoravam durante o Samhain?',
        questoes: [
            'O início do inverno escolar',
            'O fim do verão e a passagem do ano celta',
            'O nascimento dos deuses romanos',
            'O início da primavera',
        ],
        correta: 1
    },
    {
        id: 13,
        pergunta: 'O que os celtas acreditavam que acontecia nesse dia?',
        questoes: [
            'Os animais falavam com os humanos',
            'Os mortos se apoderavam dos corpos dos vivos',
            'Os deuses desapareciam',
            'O verão começava novamente',
        ],
        correta: 1
    },
    {
        id: 14,
        pergunta: 'Por que as pessoas usavam fantasias no Halloween antigo?',
        questoes: [
            'Para participar de concursos',
            'Para se defender dos maus espíritos',
            'Para vender doces',
            'Para comemorar aniversários',
        ],
        correta: 1
    },
    {
        id: 15,
        pergunta: 'O que as pessoas faziam para afastar os maus espíritos?',
        questoes: [
            'Acendiam fogueiras, realizavam rituais e usavam fantasias',
            'Organizavam competições esportivas',
            'Trocavam presentes e cartões',
            'Decoravam árvores de Natal',
        ],
        correta: 0
    }
]
app.get("/api/conexao", (req, res) => {
    res.json(lista);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
