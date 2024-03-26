const languages = {
    en: {
        cTitle: "Business will more more profitable",
        description: "This is the English version of the landing page."
    },
    bn: {
        title: "ব্যাবসা হবে আরো বেশি লাভজনক",
        description: "Ceci est la version française de la page d'accueil."
    }
};


const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang');

function resolve(lang, key) {
    if (lang === 'en') {
        return languages.en[key]
    } else {
        return languages.bn[key]
    }
}

document.getElementById("cTitle").innerText = resolve(lang, "cTitle")
