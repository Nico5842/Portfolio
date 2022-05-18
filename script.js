circulos = document.querySelectorAll(".circulos");

function ocultar(){
    this.style.visibility = "hidden";    

    setTimeout(() => {
        this.style.visibility = "visible";
    }, 600);
}

circulos.forEach(circulo => {
    circulo.addEventListener("mouseenter",ocultar);
});