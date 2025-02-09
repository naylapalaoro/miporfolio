import { proyects } from "./proyects.js";

const cardConteiner = document.getElementById("card-conteiner");

// Renderizar las tarjetas
function renderCards(proyects) {
  proyects.forEach((proyect) => {
    const card = document.createElement("div");
    card.className = "card";

    const nombre = document.createElement("h3");
    nombre.textContent = proyect.nombre;

    const typo = document.createElement("h4");
    typo.textContent = `Tipo: ${proyect.typo}`;

    const tegnologias = document.createElement("h4");
    tegnologias.textContent = `Tecnologías: ${proyect.tegnologias}`;

    const baseDatos = document.createElement("h4");
    baseDatos.textContent = `Base de datos: ${proyect.baseDatos}`;

    const descripcion = document.createElement("p");
    descripcion.textContent = proyect.descripcion;

    const enlace = document.createElement("a");
    enlace.href = proyect.url;
    enlace.textContent = "Ver proyecto";
    enlace.target = "_blank";
    enlace.className = "project-link";

    card.appendChild(nombre);
    card.appendChild(typo);
    card.appendChild(tegnologias);
    card.appendChild(baseDatos);
    card.appendChild(descripcion);
    card.appendChild(enlace);

    cardConteiner.appendChild(card);
  });
}

renderCards(proyects);
