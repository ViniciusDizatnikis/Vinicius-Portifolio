AOS.init({
    duration: 1000,    
    once: true,          
    offset: 300,     
    anchor: 'top-center',
    easing: 'ease-in-out', 
    delay: 100,         
});


let temaEscuro = true;  

document.addEventListener("DOMContentLoaded", function () {
    const selector = document.getElementById("theme-toggle");

    if (temaEscuro) {
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--primary-color', '#292727');
        document.documentElement.style.setProperty('--image', "url('../img/backgroundDark.jpg')");
    }

    selector.addEventListener("click", function () {
        temaEscuro = !temaEscuro;  // Inverte o estado do tema

        if (temaEscuro) {
            // Tema escuro
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            document.documentElement.style.setProperty('--primary-color', '#292727');
            document.documentElement.style.setProperty('--secundary-color', '#383737');
            document.documentElement.style.setProperty('--image', "url('../img/backgroundDark.jpg')");
        } else {
            // Tema claro
            document.documentElement.style.setProperty('--primary-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#000000');
            document.documentElement.style.setProperty('--secundary-color', '#f0ecec');
            document.documentElement.style.setProperty('--image', "url('../img/backgroundLigth.jpg')");
        }

        this.classList.toggle("active");
    });
});
