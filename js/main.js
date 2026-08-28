// ========================================
// RR INFRA HOMES - MAIN JAVASCRIPT
// ========================================

// Navigation scroll effect
window.addEventListener("scroll", () => {
    const nav = document.getElementById("main-nav");

    if (!nav) return;

    if (window.scrollY > 50) {
        nav.classList.add("bg-surface/90");
        nav.classList.remove("bg-surface/60");
    } else {
        nav.classList.add("bg-surface/60");
        nav.classList.remove("bg-surface/90");
    }
});

// ========================================
// MOBILE MENU
// ========================================

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {

    mobileMenuButton.addEventListener("click", () => {

        const isOpen = !mobileMenu.classList.contains("hidden");

        mobileMenu.classList.toggle("hidden");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        const icon = mobileMenuButton.querySelector(
            ".material-symbols-outlined"
        );

        if (icon) {
            icon.textContent = isOpen ? "menu" : "close";
        }

    });


    // Close menu after clicking a navigation link
    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.add("hidden");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon = mobileMenuButton.querySelector(
                ".material-symbols-outlined"
            );

            if (icon) {
                icon.textContent = "menu";
            }

        });

    });

}
// ========================================
// PROJECTS PAGE - IMAGE HOVER EFFECT
// ========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.classList.add("project-hover");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("project-hover");
    });

});
