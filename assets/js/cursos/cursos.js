"use strict";

import getData from "../modules/getData.js";
import getDataUser from "../userData/userData.js";
import agregarEventos from "../modules/eventsCursosButtons.js";
import { renderizarCarrousel } from "../modules/carrouselMethods.js";

window.addEventListener("load", async () => {
  const { mycourses, cursoEnCurso, favoritos } = await getData(
    "https://edu4all-serverless.vercel.app/api/users/mycourses"
  );
  const top = await getData(
    "https://edu4all-serverless.vercel.app/api/cursos/top"
  );
  await getDataUser();
  document.querySelector('#loading').remove()
  document.querySelector('#loading2').remove()

  const $seguirViendo = document.getElementById("owl-slider-2");
  const $recomendadoParaTi = document.getElementById("owl-slider-3");
  const $favoritos = document.getElementById("owl-slider-4");
  const $top = document.getElementById("owl-slider-5");

  if (cursoEnCurso.length > 0) {
    document.querySelector("#line-header-1").innerHTML = '<span class="header-text">Continuar viendo</span>';
    renderizarCarrousel(cursoEnCurso, "#owl-slider-2", $seguirViendo);
    agregarEventos($seguirViendo, cursoEnCurso);
  } else {
    document.querySelector("#content-line-1").remove();
  }

  if (mycourses.length > 0) {
    document.querySelector("#line-header-2").innerHTML = '<span class="header-text">Recomendado para ti</span>';
    renderizarCarrousel(mycourses, "#owl-slider-3", $recomendadoParaTi);
    agregarEventos($recomendadoParaTi, mycourses);
  } else {
    document.querySelector("#content-line-2").remove();
  }

  if (favoritos.length > 0) {
    document.querySelector("#line-header-3").innerHTML = '<span class="header-text">Favoritos</span>';
     renderizarCarrousel(favoritos, "#owl-slider-4", $favoritos);
    agregarEventos($favoritos, favoritos);
  } else {
    document.querySelector("#content-line-3").remove();
  }

  if (top.length > 0) {
    document.querySelector("#line-header-4").innerHTML = '<span class="header-text">Top</span>';
    renderizarCarrousel(top, "#owl-slider-5", $top);
    agregarEventos($top, top);
  }else{
    document.querySelector("#content-line-4").remove();
  }
});
