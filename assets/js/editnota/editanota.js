
///Pagina de notas, Actualizar, editar, y recuperar nota. 
const buttonEdit = document.getElementById('Editar');
const buttonActualiza = document.getElementById('Actualizar');
const buttonDontSave = document.getElementById('DontSave');
const contentline = document.getElementsById('content-line');

function Editar() {

    buttonEdit.style.display = "none";
    buttonActualiza.style.display = "block";
    buttonDontSave.style.display = "block";
}

function Actualizar() {

    buttonEdit.style.display = "block";
    buttonActualiza.style.display = "none";
    buttonDontSave.style.display = "none";

}
function DontSave() {

    buttonEdit.style.display = "block";
    buttonDontSave.style.display = "none";
    buttonActualiza.style.display = "none";

}

const creaZonaNota = () => {
    const divEditable = document.createElement('div');
    divEditable.classList.add('lanota');
    divEditable.setAttribute('contenteditable', 'false');


}