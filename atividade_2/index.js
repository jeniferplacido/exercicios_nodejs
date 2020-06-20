let rs = require ("readline-sync")

let mascara = rs.question ("Seja Bem Vindo a Arbyte Prevencao ao COVID - 19, Voce esta usando mascara frequentemente?(Sim ou Nao)\n")

let maos = rs.question ("Voce esta lavando as maos frequentemente?(Sim ou Nao)\n")
console.log ("=========")

if (mascara==="Sim" && maos==="Sim") {
console.log ("Parabéns!!! Utilizando Mascara e lavando as maos frequentemente, voce protege a si mesmo e as pessoas ao seu redor.")
}
     else if (mascara==="Nao" && maos==="Nao") {

    console.log ("Voce é um irresponsavel, não utilizando mascara voce esta contribuindo para a propagacao do virus!")
     }
