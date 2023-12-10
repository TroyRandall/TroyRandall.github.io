(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    document.querySelector("#contactMe").addEventListener("click", () => {
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector("#contactToggle").classList.add("active-btn");
        document.querySelector('.active').classList.remove("active")
        document.querySelector("#contact").classList.add("active")
    })

    document.querySelector("#testimonials").addEventListener("click", () => {
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector("#testimonialsToggle").classList.add("active-btn");
        document.querySelector('.active').classList.remove("active")
        document.querySelector("#blogs").classList.add("active")
    })
})();
