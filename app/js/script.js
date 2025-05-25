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
    const selectorDesktop = document.getElementById("theme-selector");
    const selectorMobile = document.getElementById("theme-selector-mobile");
    const menuToggle = document.getElementById("menu-bar");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");

    function atualizarTema() {
        document.documentElement.style.setProperty('--text-color', temaEscuro ? '#ffffff' : '#000000');
        document.documentElement.style.setProperty('--primary-color', temaEscuro ? '#292727' : '#ffffff');
        document.documentElement.style.setProperty('--secondary-color', temaEscuro ? '#383737' : '#f0ecec');
        document.documentElement.style.setProperty('--image', temaEscuro ? "url('../../assets/img/backgrounds/backgroundDark.jpg')" : "url('../../assets/img/backgrounds/backgroundLigth.jpg')");
        document.querySelectorAll('.mysql img').forEach(img => {
            img.src = temaEscuro ? 'assets/icons/tech/mysqlWhite.png' : 'assets/icons/tech/mysqlBlack.png';
        });

        document.querySelectorAll('.tailwind img').forEach(img => {
            img.src = temaEscuro ? 'assets/icons/tech/tailwindWhite.png' : 'assets/icons/tech/tailwindBlack.png';
        });

        document.querySelectorAll('.expressJs img').forEach(img => {
            img.src = temaEscuro ? 'assets/icons/tech/expressWhite.png' : 'assets/icons/tech/expressBlack.png';
        });

        document.querySelectorAll('.prisma img').forEach(img => {
            img.src = temaEscuro ? 'assets/icons/tech/prismaWhite.png' : 'assets/icons/tech/prismaBlack.png';
        });

        document.querySelectorAll('.mongoDb img').forEach(img => {
            img.src = temaEscuro ? 'assets/icons/tech/mongoDbWhite.png' : 'assets/icons/tech/mongoDbBlack.png';
        });
    }

    function alternarTema() {
        temaEscuro = !temaEscuro;
        atualizarTema();
        selectorDesktop.classList.toggle("active");
        selectorMobile.classList.toggle("active");
    }

    function fecharMenu() {
        mobileMenu.classList.remove("active");
    }

    atualizarTema();

    selectorDesktop.addEventListener("click", alternarTema);
    selectorMobile.addEventListener("click", alternarTema);
    menuToggle.addEventListener("click", () => mobileMenu.classList.toggle("active"));
    closeMenu.addEventListener("click", fecharMenu);

    document.querySelectorAll(".mobile-menu .header__link").forEach(link => {
        link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest('.mobile-menu') && !event.target.closest('#menu-bar')) {
            fecharMenu();
        }
    });
});

(function () {
    emailjs.init("0NzRgS6NvyBq2d7AD");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const responseMessage = document.getElementById("response-message");

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_lked5ls", "template_3vgr7lc", formData)
        .then(() => {
            responseMessage.innerText = "Obrigado por entrar em contato!";
            document.getElementById("contact-form").reset();
        })
        .catch(error => {
            responseMessage.innerText = "Erro ao enviar o e-mail. Tente novamente mais tarde.";
            console.error("Erro:", error);
        });

    responseMessage.scrollIntoView({ behavior: 'smooth' });
});