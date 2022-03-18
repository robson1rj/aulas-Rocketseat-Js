// 1. Declare uma variável de nome Weight 
let weigth

// 2. Que tipo de dado é a variável acima? 
console.log(typeof weigth)

/* 3. Declare uma variável e atribua valores para cada um dos dados:
       * name: string 
       * age: Number (integer)
       * stars: Number (float)
       * isSubscribed: Boolean 
    
*/ 

/*
let name, age, stars, isSubscribed;

name = "Robson"
age = 21
stars = 4.9
isSubscribed = true
*/


/*
4. A variável studant abaixo é de que tipo de dados? 
    R= Object

4.1 Atribua valores a ela as mesmas propriedades e atributos do exercício 3. 

4.2 Mostre no console a seguinte mensagem:

       <name> de idade <age> pesa <weigth> kg. 
       
       Atenção, substitua <name> <age> e <weigth> pelos valores de cada propriedade do objeto. 
*/ 

let studant = {
    name: 'Robson',
    age: 21,
    weigth: 78.5 
}

console.log(`${studant.name} de idade ${studant.age} pesa ${studant.weigth} kg.`)

// 5. Declare uma variável do tipo Array, de nome studants e atribua a ela nenhum valor, ou seja, somente o Array vazio.
     // studants = []

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto studant da questão 4. (Não copiar e o colar o objeto, mas usar o objeto criado e inserir ele no Array).
     studants = [
         studant
    ]

console.log(studants)

// 7. Coloque no console o valor da posição zero do Array acima.
console.log(studants[1])

// 8. Crie um novo studant e coloque na posição 1 do Array studants 
let estudante = {
    name: 'Gabigol',
    age: 24,
    weigth: 82.5 
}

studants = [
    studant,
    estudante
]

console.log(studants)

// 9. Sem rodar o código responda qual é a resposta do código abaixo e por quê? após sua resposta, rode o código e veja se você acertou.

// console.log(a)
// var a = 1 

// R= Udefined, porque a variável foi declarada abaixo do console.log. 






