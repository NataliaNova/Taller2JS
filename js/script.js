/* Ejercicio 1

var edad1= prompt("Digite edad número 1");
var edad2= prompt("Digite edad número 2");



console.log("La edad número 1 digitada es"+ " " + edad1);
console.log("La edad número 2 digitada es"+ " " +edad2);


/* if (edad1>edad2) {
 console.log("La edad mayor es"+ " " + edad1);
}

else{
    console.log("La edad mayor es"+ " " +edad2);
} */

/* //Ejercicio 2

let promedio = 0;
let notas = [];
for (let i = 0; i < 5; i++) {
    notas[i] = parseFloat(prompt("Digite las cinco notas a promediar"));
    promedio = promedio + notas[i];
}
document.write("El promedio de notas es = " + (promedio / 5)); */

/* //Ejericicio 3


let pass="Dom";
let passSolictada= prompt("Digite su contraseña");

if (pass == passSolictada.toUpperCase) {
    console.log("Bienvenido a la pagina de los Magios ")
    
}
else {

    console.log("Contraseña incorrecta, parece que no eres un Magio, no puedes ingresar");
} */

/* //Ejercicio 4

        
            let vacunado = prompt("Digite 1 si esta vacunado y 2 si no esta vacunado")

            if( parseInt(vacunado) == 1){
                console.log("Puedes ver la funcion de Batman");
                
            }else if( parseInt(vacunado) == 2){
                console.log("No puedes ver la función de Batman, por favor ve a vacunarte");

            }else{
                console.log("No digitaste ninguna opción valida")
            } */

/* //Ejercicio 5

let born = parseInt(prompt("Porfavor ingrese el año de su nacimiento"));
if (born <= 2022) {
    console.log("Su edad es de " + (2022 - born) + " años")
}  */

/* //Ejercicio 6:

let capital = parseInt( prompt(
  "Digite el número según la capital que desea conocer de los paises de: \n 1. Colombia \n 2.Argentina \n 3. Perú \n 4.Japón \n 5.Alemania"
));

switch (capital) {
  case 1:
    alert("Bogota");
    break;
  case 2:
    alert("Buenos Aires");
    break;

  case 3:
    alert("Lima");
    break;
  case 4:
    alert("Tokyo");
    break;

  case 5:
    alert("Berlin");
    break;

  default:
    alert("No digitó ningun numero");
} */

/* //Ejercicio7:

let tabla=8;
let limite=100;

for (let i = 1; i <= limite; i++) {
    let multi=i*10;
  
  document.write(tabla + "x" + i + "=" + multi + "<br>");
} */

/* // Ejercicio 8:

function traduccion(){
    let opcion = document.getElementById('opcion').value;
    switch (parseInt(opcion)) {
        case 1:
            resultado = "Presupuesto";
            break;
        case 2:
            resultado = "Resistente";
            break;
        case 3:
            resultado = "Alcanzar";
            break;
        case 4:
            resultado = "Rechazando";
            break;
        case 5:
            resultado = "Tranquilizando";
            break;
        default:
            resultado = "No ingresaste ningun numero";
            break;
    }
    document.getElementById('traduccion').value = resultado;
} */
