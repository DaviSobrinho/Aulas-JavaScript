/*Exercício 1 
Implemente um objeto calculadora que possua 4 funções: somar,
subtrair, multiplicar e dividir.
Cada função recebe 2 parâmetros numéricos e retorna o valor da
operação equivalente ao nome da função.*/
let n1 = 1;
let n2 = 2;
let numeroFatorial;
let bool = false;
let resultado;
const calculadora1 = {
    somar(n1, n2){
        return n1 + n2;   
    },
    multiplicar(n1, n2){
        return n1 * n2;
    },
    subtrair(n1, n2){
        return n1 - n2;
    },
    dividir(n1 , n2){
        return n1 / n2;
    }
}
resultado = calculadora1.dividir(n1,n2);
console.log(resultado);

/*Exercício 2
Na calculadora criada no exercício 1, adicione a função fatorial
(recursiva) que recebe 1 parâmetro numérico e retornar o valor do
seu fatorial.*/

const calculadora2 = {
    somar(n1, n2){
        return n1 + n2;   
    },
    multiplicar(n1, n2){
        return n1 * n2;
    },
    subtrair(n1, n2){
        return n1 - n2;
    },
    dividir(n1 , n2){
        return n1 / n2;
    },
    fatorial: function(n1){
        if (n1 > 0){
            console.log(n1);
            fatorial(n1-1);
        }
    }
}
// Ficou feio demais, porém está funcional
function fatorial(n1){
    if(bool == false){
        n1Holder = n1;
        numeroFatorial = n1
        bool = true;
    }
    if(n1 > 0){
        console.log(n1);
        fatorial(n1-1);
        if(n1 != n1Holder){
            numeroFatorial = numeroFatorial * n1;
        }
        console.log(numeroFatorial);
    }
}
fatorial(5);
console.log(numeroFatorial);

/*Exercício 3
Crie uma função que recebe uma String e retorna um Array com as
palavras distintas da String recebida.*/

let frase;
let array = [];
let marcadorInicial = 0;
let marcadorFinal = 0;
let substring;
frase = "Crie uma função que recebe uma String e retorna um Array com as palavras distintas da String recebida";
console.log(frase.length)
for(let contador = 0 ; contador < frase.length;){
    if(frase.charAt(contador == '')){
        array.
    }
}