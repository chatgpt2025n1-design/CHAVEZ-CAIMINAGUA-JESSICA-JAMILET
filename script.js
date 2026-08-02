document.addEventListener("DOMContentLoaded", () => {
    const particlesContainer = document.getElementById("particlesContainer");
    const particleCount = 28;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        
        const size = Math.random() * 16 + 6 + "px";
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + "vw";
        
        const duration = Math.random() * 8 + 6 + "s";
        const delay = Math.random() * 5 + "s";
        particle.style.animationDuration = duration;
        particle.style.animationDelay = delay;
        
        particlesContainer.appendChild(particle);
    }
});

function toggleAcordeon(boton) {
    boton.classList.toggle("active");
    const contenido = boton.nextElementSibling;
    
    if (contenido.style.maxHeight) {
        contenido.style.maxHeight = null;
        contenido.style.padding = "0 25px";
    } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
        contenido.style.padding = "10px 25px 25px 25px";
    }
}

function abrirModalImagen(urlImagen) {
    document.getElementById("imagenAmpliadaModal").src = urlImagen;
    document.getElementById("modalZoom").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalZoom").style.display = "none";
}