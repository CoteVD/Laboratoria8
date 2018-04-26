var counter = 0;
var question1 = prompt('¿Con cuántas egresadas cuenta Laboratoria?');
if(question1 === '+580'){
    counter++;
} else {
    counter;
}
var question2 = prompt('¿Con cuántas empresas empleadoras cuenta Laboratoria?');
if(question2 === '+200'){
    counter++;
} else {
    counter;
}
var question3 = prompt('¿Cuál es el % de inserción laboral de Laboratoria?');
if(question3 === '+80%'){
    counter++;
} else {
    counter;
}
var question4 = prompt('¿Cuál es la nota de satisfacción de las empresas con Laboratoria?');
if(question4 === '4.5'){
    counter++;
} else {
    counter;
}
var question5 = prompt('¿Cuál es el lenguaje de programación usado en Laboratoria?');
if(question5 === 'Javascript'){
    counter++;
} else {
    counter;
}
if(counter === 5){
    document.write('<p id="answer">¡Enhorabuena! ¡Haz respondido todas las respuestas correctas!' + '</p>');
} else {
    document.write('<p id="error">¡Lástima! Haz respondido sólo ' + counter + ' buenas. Vuelve a intentarlo.' + '</p>');
}