// =================================
// LA PLAGA TJA
// JAVASCRIPT
// =================================


// =================================
// CONFIGURACIÓN DE WHATSAPP
// =================================

// Número de WhatsApp de La Plaga Tja
// Bolivia = 591

const WHATSAPP_NUMERO = "59171694776";


// =================================
// MENÚ MÓVIL
// =================================

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("show");

  if (
    navLinks.classList.contains("show")
  ) {

    menuToggle.textContent = "✕";

  } else {

    menuToggle.textContent = "☰";

  }

});


// =================================
// CERRAR MENÚ
// AL HACER CLICK EN UN ENLACE
// =================================

document
  .querySelectorAll(".nav-links a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

      }
    );

  });


// =================================
// FORMULARIO DE CONTACTO
// WHATSAPP
// =================================

const contactForm =
  document.getElementById("contactForm");

const formNote =
  document.getElementById("formNote");


contactForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    // Obtener información

    const nombre =
      document
        .getElementById("nombre")
        .value
        .trim();


    const tipo =
      document
        .getElementById("tipo")
        .value;


    const mensaje =
      document
        .getElementById("mensaje")
        .value
        .trim();


    // Verificar datos

    if (
      !nombre ||
      !tipo ||
      !mensaje
    ) {

      formNote.textContent =
        "Completa todos los campos antes de enviar.";

      return;

    }


    // Verificar número

    if (
      WHATSAPP_NUMERO ===
      "59100000000"
    ) {

      formNote.textContent =
        "Primero cambia WHATSAPP_NUMERO en script.js por tu número real de WhatsApp.";

      return;

    }


    // Crear mensaje

    const texto = [

      "Hola, La Plaga Tja.",

      `Soy ${nombre}.`,

      `Estoy interesado/a en: ${tipo}.`,

      `Mi idea: ${mensaje}`

    ].join("\n");


    // Crear enlace

    const url =
      `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;


    // Abrir WhatsApp

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );


    formNote.textContent =
      "Abriendo WhatsApp...";

  }
);


// =================================
// AÑO AUTOMÁTICO DEL FOOTER
// =================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// =================================
// VISOR DE DISEÑOS
// =================================

const designModal =
  document.getElementById("designModal");

const designModalImage =
  document.getElementById("designModalImage");

const designModalTitle =
  document.getElementById("designModalTitle");

const designModalClose =
  document.getElementById("designModalClose");

const designButtons =
  document.querySelectorAll(".design-image");


// =================================
// ABRIR DISEÑO
// =================================

function openDesign(image, title) {

  designModalImage.src = image;

  designModalImage.alt = title;

  designModalTitle.textContent = title;

  designModal.classList.add("open");

  designModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow = "hidden";
}


// =================================
// CERRAR DISEÑO
// =================================

function closeDesign() {

  designModal.classList.remove("open");

  designModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";
}


// =================================
// BOTONES DE DISEÑOS
// =================================

designButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      openDesign(
        button.dataset.image,
        button.dataset.title
      );

    }
  );

});


// =================================
// BOTÓN CERRAR
// =================================

designModalClose.addEventListener(
  "click",
  closeDesign
);


// =================================
// CERRAR AL HACER CLICK FUERA
// =================================

designModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target.hasAttribute(
        "data-close-design"
      )
    ) {

      closeDesign();

    }

  }
);


// =================================
// CERRAR CON ESC
// =================================

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      designModal.classList.contains("open")
    ) {

      closeDesign();

    }

  }
);
