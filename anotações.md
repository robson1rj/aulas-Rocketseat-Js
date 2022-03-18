# Scope let e const

* Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.


# Nomeando variáveis 

* Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações. Em um nome de variável em JS você pode: Iniciar com caracteres especiais, iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. Em contraste, você não pode: Iniciar com números e colocar espaços vazios. Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, e usar nomes em inglês.

## Para criar nomes 

* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode 

- Posso: 
    * Iniciar com esses caracteres especiais: $ _
    * Iniciar com letras 
    * Colocar acentos 
    * Letras Maiúscula e minúscula fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome 

- Ideal: 
    * Criar nome que fazem sentido 
    * Que explique a variável é ou faz 
    * snake_case
    * Escrever em inglês 

# Concatenando e interpolando variáveis    

* É possível concatenar strings com o operador +, por exemplo: console.log('o ' + name + ' tem ' + age + ' anos.') desta maneira as variáveis serão convertidas em texto e o que será mostrado será um texto com o nome e a idade que foram estabelecidas no código. Uma outra maneira de escrever um texto com variáveis é por meio da interpolação com template literals, usando crase para o texto e ${} para denotar uma variável, por exemplo console.log(O ${name} tem ${age} anos.) o resultado deste comando será o mesmo texto do anterior.