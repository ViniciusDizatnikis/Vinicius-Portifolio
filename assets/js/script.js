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
    const selectorDesktop = document.getElementById("theme-selector"); // Cabeçalho
    const selectorMobile = document.getElementById("theme-selector-mobile"); // Menu Móvel

    function atualizarTema() {
        if (temaEscuro) {
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            document.documentElement.style.setProperty('--primary-color', '#292727');
            document.documentElement.style.setProperty('--secondary-color', '#383737');
            document.documentElement.style.setProperty('--image', "url('../img/backgroundDark.jpg')");
        } else {
            document.documentElement.style.setProperty('--primary-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#000000');
            document.documentElement.style.setProperty('--secondary-color', '#f0ecec');
            document.documentElement.style.setProperty('--image', "url('../img/backgroundLigth.jpg')");
        }
    }

    atualizarTema();


    function alternarTema() {
        temaEscuro = !temaEscuro; 
        atualizarTema();
        selectorDesktop.classList.toggle("active");
        selectorMobile.classList.toggle("active");
    }

    selectorDesktop.addEventListener("click", alternarTema);
    selectorMobile.addEventListener("click", alternarTema);

    const menuToggle = document.getElementById("menu-bar");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

    document.querySelectorAll(".mobile-menu .header__link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });
});

(function () {
    emailjs.init("0NzRgS6NvyBq2d7AD");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const response = document.getElementById("response-message");

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


    emailjs.send("service_lked5ls", "template_3vgr7lc", formData)
        .then(response => {
            response.innerText = "Obrigado por entrar em contato!";
            document.getElementById("contact-form").reset();
        })
        .catch(error => {
            response.innerText = "Erro ao enviar o e-mail. Tente novamente mais tarde.";
            console.error("Erro:", error);
        });
        response.scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu"); 

    document.addEventListener("click", function (event) {
        const clickedElement = event.target;
        
        if (!clickedElement.closest('.mobile-menu') && !clickedElement.closest('#menu-bar')) {
            mobileMenu.classList.remove("active");
        }
    });
    
    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

    document.querySelectorAll(".mobile-menu .header__link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });
});


