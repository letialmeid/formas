function calcular_triangulo(){
    base = parseInt(prompt("Qual a base do triangulo?"))
    altura = parseInt(prompt("Qual a altura do triangulo?"))

    area = (base * altura)/2

    alert(area)
    document.getElementById("texto-triangulo").innerText=area.toFixed(1)
}