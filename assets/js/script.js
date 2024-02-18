let aEl = document.querySelector('.a')
let bEl = document.querySelector('.b')
let cEl = document.querySelector('.c')
let calcular = document.querySelector('.btn')
let deltaAlert = document.querySelector('.result')
let x1El = document.querySelector('.x1')
let x2El = document.querySelector('.x2')

aEl.addEventListener('input', checkInputs);
bEl.addEventListener('input', checkInputs);
cEl.addEventListener('input', checkInputs);

function checkInputs() {
    const allFieldsFilled = aEl.value.trim() !== '' && bEl.value.trim() !== '' && cEl.value.trim() !== '';

    calcular.disabled = !allFieldsFilled;
}


calcular.addEventListener('click', () => {
    let a = parseFloat(aEl.value)
    let b = parseFloat(bEl.value)
    let c = parseFloat(cEl.value)

    let delta = (b ** 2) - (4 * a * c)

    if (delta < 0) {
        deltaAlert.innerHTML = 'Esta equação não possui raízes reais, pois delta é negativo'
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)

        deltaAlert.innerHTML = 'As raízes da equação sao: '
        x1El.innerHTML = `X1 = ${x1.toFixed(2)}`
        x2El.innerHTML = `X2 = ${x2.toFixed(2)}`
    }
})