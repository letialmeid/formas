function calcular_cubo(){
    lado = parseInt(prompt("Um cubo tem 6 faces. Qual o valor do lado de uma das faces do cubo?"))

    area = (lado * lado) 
    cubo = area * 6

    alert(cubo)
    document.getElementById("texto-cubo").innerText=area.toFixed(1)
}

