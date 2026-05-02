
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "dark") {
        if (btn) btn.innerHTML = "☀️";
    }

    if (btn) {
        btn.addEventListener("click", function () {

            document.documentElement.classList.toggle("dark-mode");

            if (document.documentElement.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                this.innerHTML = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                this.innerHTML = "🌙";
            }

        });
    }

});
