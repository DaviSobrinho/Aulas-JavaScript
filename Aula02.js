//Array
console.log("\nArray\n")

const meuArray = [1, "dois", 3];
console.log(meuArray);

meuArray[0] = "um";
console.log(meuArray);

//Object
console.log("\nobject\n")

const meuObjetoPessoa = new Object({
    nome: "Joao",
    profissao: "Professor",
    telefones: [6199887766, 6199778822]
})
console.log(meuObjetoPessoa);
console.log(meuObjetoPessoa.nome);
console.log(meuObjetoPessoa["nome"]);
console.log(meuObjetoPessoa.telefones[1]);

//if, else if, else
console.log("\nif, else if, else\n")

const hora = new Date();
let hour = hora.getHours()-8;
let cumprimento = ""
if(hour <12){
    cumprimento = "Bom dia"
}else if(hour  < 18){
    cumprimento = "Boa tarde"
}else{
    cumprimento = "Boa noite"
}
console.log(cumprimento);0

//switch
console.log("\nswitch\n")

const diaDaSemana = 4;
let nomeDiaSemana = "";
switch(diaDaSemana){
    case 0:
        nomeDiaSemana = "Domingo";
        break;
    case 1:
        nomeDiaSemana = "Segunda";
        break;
    case 2:
        nomeDiaSemana = "Terça";
        break;
    case 3:
        nomeDiaSemana = "Quarta";
        break;
    case 4:
        nomeDiaSemana = "Quinta";
        break;
    case 5:
        nomeDiaSemana = "Sexta";
        break;
    case 6:
        nomeDiaSemana = "Sábado";
        break;
    default:
        nomeDiaSemana = "Não encontrado!";
        break;
}
console.log(nomeDiaSemana);

//for
console.log("\nfor\n")

const nomesDiaSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
for(let index = 0; index < 7;index++){
    nomeDiaSemana = nomesDiaSemana[index];
    console.log(nomeDiaSemana);
}

//for in
console.log("\nfor in\n")

for (const key in nomesDiaSemana){
    const elemento = nomesDiaSemana[key];
    console.log(key," - ",elemento);
}

const carro = {
    modelo: "Opala",
    ano: 1986,
    cor: "Preto"
}

for(const key in carro){
    const elemento = carro[key];
    console.log(`${key} - ${elemento}`);
    console.log(`Tipo do elemento: ${typeof(elemento)}`)
}

//while
console.log("\nwhile\n")
let i = 0;
while(i < 7){
    console.log(nomesDiaSemana[i]);
    i++;
}

i = 0;
do{
    console.log(nomesDiaSemana[i]);
    i++;
}while(i < 7);

//Exercício 01 - Faça um algoritmo que imprime uma matriz A e sua transposta.
console.log("Exercício 01 - Faça um algoritmo que imprime uma matriz e sua transposta.");

const matrizA1 = [[1,2],[3,4],[5,6]];
for(let c1 = 0; c1 < 2; c1++){
    for(let l1 = 0; l1 < 3; l1++){
        console.log(matrizA1[l1][c1]);
    }
    console.log("");
}


//Exercício 02 - Faça um algoritmo de multiplicação de matrizes: A X B = C.
console.log("Exercício 01 - Faça um algoritmo de multiplicação de matrizes: A X B = C.");

const matrizA2 = [[1,3],[2,5]];
const matrizB2 = [[2,2],[0,1]];
const matrizC2 = [[],[]];
l2 = 0;
for(let c2 = 0; c2 < 2; c2++){
    matrizC2[l2][c2] = matrizA2[l2][c2] * matrizB2[l2][c2] + matrizA2[l2][c2+1] * matrizB2[l2+1][c2];
}
console.log(matrizC2[0]);