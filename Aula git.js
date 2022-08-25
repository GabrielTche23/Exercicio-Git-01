var nome = prompt("Digite seu nome: ")
var cpf = prompt("Digite seu CPF: ")
var saldoTotal = 100;
var continuar = true
var maiorValor = 0;
while(continuar){
    var opcao = prompt("Digite 1 para Saque e 2 para Sacar: ")
    var valor = parseFloat(prompt("Digite um valor: "))
    if(opcao == 1 ){
        saldoTotal = saldoTotal - valor
    }
    else if (opcao == 2 ){
        saldoTotal = saldoTotal + valor
    }
    var desejaContinuar = prompt("Deseja continuar? Se Sim digite 1 se caso deseja encerrar Digite 2")
    if(desejaContinuar = 2){
        continuar = false
    }
    maiorValor = maiorValor + valor
}
console.log ("O saldo total foi: ", saldoTotal)
console.log("O maior valor inserido foi: ", maiorValor)