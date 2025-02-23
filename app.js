document.querySelector(".bars_menu").addEventListener("click", animateBars);

var line1_bars = document.querySelector(".line1_bars-menu");
var line2_bars = document.querySelector(".line2_bars-menu");
var line3_bars = document.querySelector(".line3_bars-menu");

const menu = document.querySelector('.mc_items');
const menuItems = document.querySelectorAll('.mc_items a'); // Selecciona todos los enlaces del menú


function animateBars(){
    line1_bars.classList.toggle("activeline1_bars-menu");
    line2_bars.classList.toggle("activeline2_bars-menu");
    line3_bars.classList.toggle("activeline3_bars-menu");

    menu.classList.toggle("active"); // Alternar la clase 'active' en el menú

    // Cambiar la altura del header
    if (menu.classList.contains("active")) {
      if (screen.width <= 766.9) {
        document.querySelector("header").style.height = "59.53vw"; // Ajustar a la altura automática
      } else {
          document.querySelector("header").style.height = "30.7vw"; // Ajustar a la altura automática
      }
    } else {
        document.querySelector("header").style.height = ""; // Restablecer a la altura original
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('active'); // Eliminar la clase 'active' para cerrar el menú
            line1_bars.classList.remove("activeline1_bars-menu");
            line2_bars.classList.remove("activeline2_bars-menu");
            line3_bars.classList.remove("activeline3_bars-menu");

            document.querySelector("header").style.height = ""; // Restablecer a la altura original

        });
    });
}

//
// Animacion de secciones
//
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todas las secciones con cualquier clase que quieras animar
    const sections = document.querySelectorAll('.left_problems, .right_problems, .cs_img, .cs_title, .ss_title, .ss_svg, .ss_subtitle, .ssk_list, .sst_list, .ssa_list, .la_img, .la_title, .ra_mission, .ra_vision, .ts_title, .tsp_Daniela, .tsp_Samir, .cs_title, .cs_paragraph, .cs_button'); // Agrega todas las clases aquí
    
    sections.forEach(section => {
        new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Aplica la animación cuando la sección es visible
                Object.assign(entry.target.style, {
                    animation: 'fadeInBottom 1s forwards',
                    opacity: 1,
                    transform: 'translateY(0)',
                });
            }
        }, { threshold: 0.2 }).observe(section); // Observa cuando el 20% de cada sección es visible
    });
});

