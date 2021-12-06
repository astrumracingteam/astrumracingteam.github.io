//loader
let loader = document.querySelector(".loader");
let loaderbackground = document.querySelector(".loaderbackground");

window.addEventListener("load", function () {
    loader.parentElement.removeChild(loader);
});

window.addEventListener("load", function () {
    loaderbackground.parentElement.removeChild(loaderbackground);
});

