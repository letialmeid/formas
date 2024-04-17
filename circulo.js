function calcular_circulo(){
    raio = parseInt(prompt("Qual o raio do circulo?"))

    area = (raio * raio) * Math.PI 
    document.getElementById("texto-circulo").innerText=area.toFixed(2)

}