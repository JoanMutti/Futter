"use strict";

import getData from "../modules/getData.js";
import getDataUser from "../userData/userData.js";
import { renderizarCarrousel } from "../modules/carrouselMethods.js";
import agregarEventos from "../modules/eventsCursosButtons.js";

window.addEventListener("load", async () => {
  const { cursoEnCurso, favoritos, cursosTerminados } = await getData(
    "https://edu4all-serverless.vercel.app/api/users/mycourses"
  );
  getDataUser();
  document.querySelector("#loading").remove();

  if(cursoEnCurso.length < 1 && favoritos.length < 1 && cursosTerminados.length < 1){
    const noCourses = `
                        <div class="dinamic-no-courses">
                            <h3>todavia no tienes cursos. <br> Empieza ahora, el curso que quieras <i
                                    class="far fa-grin-stars"></i></h3>
                            <button class="go-to-courses"><a href="./exploreCursos.html">Explorar cursos</a>
                        </div>
    `
    document.querySelector('.page-right-content').innerHTML = noCourses
  }else{
    if (cursoEnCurso.length > 0) {
      console.log("estoy");
      crearHeaderSlider("seguirViendo", "Continuar viendo");
      const $seguirViendo = document.querySelector("#seguirViendo");
      renderizarCarrousel(cursoEnCurso, "#seguirViendo", $seguirViendo);
      agregarEventos($seguirViendo, cursoEnCurso);
    }
  
    if (favoritos.length > 0) {
      crearHeaderSlider("favoritos", "Favoritos");
      const $favoritos = document.querySelector("#favoritos");
      renderizarCarrousel(favoritos, "#favoritos", $favoritos);
      agregarEventos($favoritos, favoritos);
    }
  
    if (cursosTerminados.length > 0) {
      crearHeaderSlider("terminados", "Cursos finalizados");
      const $terminados = document.querySelector("#terminados");
      renderizarCarrousel(cursosTerminados, "#terminados", $terminados);
      agregarEventos($terminados, cursosTerminados);
    }
  }

  

  
});

const crearHeaderSlider = (nombreSlider, encabezado) => {
  const $contentLine = document.createElement("div");
  const $lineHeader = document.createElement("div");
  const $headerText = document.createElement("span");
  const $slider = document.createElement("div");

  $contentLine.classList.add("content-line", "content-line-list");
  $lineHeader.classList.add("line-header");
  $headerText.classList.add("header-text");
  $slider.classList.add("slider-wrapper", "owl-carousel");

  $headerText.innerHTML = encabezado;

  $slider.id = nombreSlider;

  $lineHeader.appendChild($headerText);
  $contentLine.appendChild($lineHeader);
  $contentLine.appendChild($slider);

  document.querySelector(".page-right-content").appendChild($contentLine);
};
