const getNickName = "Escreva seu nickname aqui:";
let nickName = "Jurandir";
let wins = 90;
let defeats = 5;
let result = wins - defeats;
let elo = calculatorOfElo();

function calculatorOfElo(){
  if (result <= 0){
    return "unranked"; 
  
} else if (result >= 0 && result <= 10){
   return "ferro"
 
} else if (result >= 11 && result <= 20){
   return "bronze";

} else if (result >= 21 && result <= 50){
   return "prata";

} else if (result >= 51 && result <= 80){
   return "ouro";

} else if (result >= 81 && result <= 90){
   return "diamante";

} else if (result >= 91 && result <= 100){
   return "lendário";

} else {
   return "imortal";
}

}

console.log(getNickName + " " + nickName)
console.log("O herói tem de saldo: " + result + " vitórias e está no elo " + elo)