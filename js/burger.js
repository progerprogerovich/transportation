document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
        document.querySelector("main").classList.toggle("open")
        document.querySelector("body").classList.toggle("lock")
    })
})