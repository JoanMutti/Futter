function listNo() {
    document.getElementById('listYesNo').style.display = "none";
    document.getElementById('listOff').style.display = "none"
    document.getElementById('listOn').style.display = "block"
}

function listYes() {
    document.getElementById('listYesNo').style.display = "block";
    document.getElementById('listOff').style.display = "block"
    document.getElementById('listOn').style.display = "none"
}

function chatYes() {
    document.getElementById('chatSiNo').style.display = "block";
    document.getElementById('chatOff').style.display = "block";
    document.getElementById('chatOn').style.display = "none";
}

function chatNo() {
    document.getElementById('chatSiNo').style.display = "none";
    document.getElementById('chatOff').style.display = "none";
    document.getElementById('chatOn').style.display = "block";
}


function noteYes() {

    document.getElementById('noteSiNo').style.display = "block";
    document.getElementById('noteOff').style.display = "block";
    document.getElementById('noteOn').style.display = "none";
}

function noteNo() {

    document.getElementById('noteSiNo').style.display = "none";
    document.getElementById('noteOff').style.display = "none";
    document.getElementById('noteOn').style.display = "block";
}