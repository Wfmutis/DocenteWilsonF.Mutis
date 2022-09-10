document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp() {
    subir();
    mostrarMenu();
    mostrarSubMenu();
}

function subir() {
    const subirP = document.querySelector(".btnSubir");

    subirP.addEventListener("click", function(e) {
        e.preventDefault();
        
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    });

    window.onscroll = () => {
        if (window.scrollY < 600) {
            subirP.classList.remove ("btnSubirOn")
        }else {
            subirP.classList.add ("btnSubirOn")
        }
    }
}

function mostrarMenu() {
    const btnMenu = document.querySelector("#btnMenu");
    const menu = document.querySelector("#menu");

    btnMenu.addEventListener("click", function(){
        menu.classList.toggle("mostrar");
    });
}

function mostrarSubMenu() {

    const subMenuBtn = document.querySelectorAll(".submenu-btn");

    for ( let i = 0; i < subMenuBtn.length; i++) {
        subMenuBtn[i].addEventListener("click", function(){
            if(window.innerWidth < 768) {
                const subMenu = this.nextElementSibling;
                const height = subMenu.scrollHeight;

                if(subMenu.classList.contains("desplegar")) {
                    subMenu.classList.remove("desplegar");
                    subMenu.removeAttribute("style");
                } else {
                    subMenu.classList.add("desplegar");
                    subMenu.style.height = height + "px";
                }
            }
        });
    }

}