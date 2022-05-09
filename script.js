


function calcularBissex() {
    
    let ano = document.getElementById("ano").value
    
    //window.alert(ano)
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){

        document.getElementById('resultado').innerText = "É Bissexto" 
      

    }
    else {
        document.getElementById('resultado').innerText = "Não É bissexto"
    }
    
 

    
    
   


}