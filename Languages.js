const translations = {
    en: {
        welcome: "Welcome to Maharaja Cuisine",
        experience: "Experience the Authentic Taste of India",
        intro: "Join us for an exquisite dining experience with the best Indian flavors in Panama.",
        home: "Home",
        menu: "Menu",
        about: "About Us",
        contact: "Contact"
    },
    es: {
        welcome: "Bienvenido a Maharaja Cuisine",
        experience: "Experimenta el auténtico sabor de la India",
        intro: "Únase a nosotros para una experiencia gastronómica exquisita con los mejores sabores de la India en Panamá.",
        home: "Inicio",
        menu: "Menú",
        about: "Sobre Nosotros",
        contact: "Contacto"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("language-select");
    const savedLang = localStorage.getItem("lang") || "en";
    langSelect.value = savedLang;
    updateLanguage(savedLang);

    langSelect.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        localStorage.setItem("lang", selectedLang);
        updateLanguage(selectedLang);
    });
});

function updateLanguage(lang) {
    document.getElementById("welcome").textContent = translations[lang].welcome;
    document.getElementById("experience").textContent = translations[lang].experience;
    document.getElementById("intro").textContent = translations[lang].intro;
    document.getElementById("home-link").textContent = translations[lang].home;
    document.getElementById("menu-link").textContent = translations[lang].menu;
    document.getElementById("about-link").textContent = translations[lang].about;
    document.getElementById("contact-link").textContent = translations[lang].contact;
}
