const DARK_THEME_CSS = "css/dark_theme.css";
const TRANSITION_TIME_MS = 100;

let head = document.getElementsByTagName("head")[0];

const TRANSITION_CSS = "*{transition: color, background-color " + TRANSITION_TIME_MS + "ms}";

let dark_theme_link = null;
let transition_style = null;

updateTheme(true);

function swapTheme() {
    if (dark_theme_link != null) {
        localStorage.setItem("theme", "light")

        updateTheme();
        return;
    }

    localStorage.setItem("theme", "dark")
    updateTheme();
}

function updateTheme(just_loaded = false) {
    // let params = new URLSearchParams(location.search);

    switch (localStorage.getItem("theme")) {
        case "dark":
            let link_css = document.createElement("link");
            link_css.rel = "stylesheet";
            link_css.type = "text/css";
            link_css.href = DARK_THEME_CSS;

            dark_theme_link = link_css;

            head.appendChild(link_css);

            if (!just_loaded) {
                placeTransitionCSS();
                window.setTimeout(removeTransitionCSS, TRANSITION_TIME_MS * 2);
            }
            break;
        case "light":
            if (dark_theme_link != null) {
                head.removeChild(dark_theme_link);
                dark_theme_link = null;
                
                if (!just_loaded) {
                    placeTransitionCSS();
                    window.setTimeout(removeTransitionCSS, TRANSITION_TIME_MS * 2);
                }
            }
            break;

        default:
            break;
    }
}

function placeTransitionCSS() {
    transition_style = document.createElement("style");
    head.appendChild(transition_style);
    transition_style.textContent = TRANSITION_CSS;
}

function removeTransitionCSS() {
    if (transition_style != null) {
        head.removeChild(transition_style);
        transition_style = null;

        return;
    }
}