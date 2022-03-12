// declaration de variable

var age;
age = 34

var name;
name = "ali"

// constante est pareille comme le variable, mais on ne peut pas modifier les constantes

const TVA = 66;
console.log("salut");

var hello = " bonjour Mr/Mme";
var firstname = "TATA"
var lastname = " ALI"
var age = 78;

var concat = hello+" "+firstname+" "+lastname+". vous avez "+age+" ans";

console.log(concat);

// les structures conditionnelles

var age = prompt();

if(age > 18){
    console.log("vous étes majeur");
}
else{
    console.log("vous étes mineur");
}
// conditionnelles switch

var age = prompt();
age = parseInt(age)

switch (age) {
    case 25:
        console.log("vous avez 25 ans");
        break;
    case 18:
        console.log("vous avez 18 ans");
        break;
    case 15:
        console.log("vous avez 15 ans");
        break;

    default:
        console.log("désolé aucune reponse");
        break;
}

// les boucles for

for (var index = 1; index < 5; index++) {
    console.log("Tour de boucle for n° "+index);
    
}

// les boucles whiles 

var index = 0; 
while (index < 5) {
    console.log("Tour de boucle while n° "+index);

    index++;
}

// les boucles dowhile

var index = 0 
do {
    console.log("Tour de boucle dowhile n° "+index);
    index++;
    
} while (index <5);



