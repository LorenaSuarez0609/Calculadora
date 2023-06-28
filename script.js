
//Este codigo agrega a la pantalla los valores y signos opraciones
function agregar(valor){
    document.getElementById('pantalla').value += valor;


}

//esta funcion limpia la pantalla
function borrar(){
    document.getElementById('pantalla').value ='';

}

// esta accion toma el valor de la pantalla y ejecuta los calculoa
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
