document.addEventListener("DOMContentLoaded", function () {
    updateFooterStatus();
});

document.addEventListener("resize", function () {
    updateFooterStatus();
});

function updateFooterStatus() {
    let navbar = document.getElementById("navbar");
    let main_content = document.getElementsByTagName("main")[0];
    let footer = document.getElementById("footer");
    
    let total_size = navbar.clientHeight + main_content.clientHeight + footer.clientHeight;
    
    let max_size = window.innerHeight;
    console.log(total_size, max_size);
    if (total_size > max_size) {
        console.log("Window is big enough, unfixing footer")
        footer.classList.remove("fixed");
    } else {
        if (footer.classList.contains("fixed")) {
            return;
        }
        console.log("Window not is big enough, fixing footer")
        footer.classList.add("fixed");
    }
}