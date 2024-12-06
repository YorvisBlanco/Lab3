//javascript

function realizarOperaciones(){
    let num1 = Number (document.getElementById('num1').value);
    let num2 = Number (document.getElementById('num2').value);
    let operacion = document.getElementById('operaciones').value;

    switch(operacion){

        case "suma":
            alert("la suma de los dos numeros es :" + (num1+num2));
        break;
        case "resta":
            alert("la resta de los dos numeros es :" + (num1-num2));
             break;
        case "multiplicacion":
            alert("la multipliacion de los dos numeros es :" + (num1*num2));
            break;
        case "division":
            if (num2 === 0){
                alert("no esta permitido la division entre cero:");
            }else{
                alert("la division de los dos numeros es: " + (num1/num2));
            }
        break;


    }
}