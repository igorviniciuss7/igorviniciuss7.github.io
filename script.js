const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
});


document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});


const nome = "Igor Vinícius";
const elemento = document.getElementById('nome-digitado');
let i = 0;

function digitar() {
    if (i < nome.length) {
        elemento.textContent += nome[i];
        i++;
        setTimeout(digitar, 100);
    }
}

digitar();