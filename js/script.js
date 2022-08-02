const monedaElUno = document.getElementById('moneda-uno');
const monedaElDos = document.getElementById('moneda-dos');
const cantidadElUno = document.getElementById('cantidad-uno');
const cantidadElDos = document.getElementById('cantidad-dos');
const tazaEl = document.getElementById('taza');
const cambioEl = document.getElementById('cambio');


//Fetch
function calcular(){

    const moneda_uno = monedaElUno.value;
    const moneda_dos = monedaElDos.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_uno}`)
    .then(res => res.json())
    .then(data => {
        const taza = data.rates[moneda_dos]

        cambioEl.innerText= `1 ${moneda_uno} = ${taza} ${moneda_dos}`

        cantidadElDos.value = (cantidadElUno.value * taza).toFixed(2);
    }
        );
}

//event listener
monedaElUno.addEventListener('change', calcular);
cantidadElUno.addEventListener('input', calcular);
monedaElDos.addEventListener('change', calcular);
cantidadElDos.addEventListener('input', calcular);

taza.addEventListener('click' ,() => {
    const temp = monedaElUno.value;
    monedaElUno.value = monedaElDos.value;
    monedaElDos.value = temp;
    
    calcular();
})

calcular();