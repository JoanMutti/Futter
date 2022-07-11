var oDoc, sDefTxt;

function initDoc(textBox) {
      oDoc = document.getElementById(textBox);
      sDefTxt = oDoc.innerHTML;
      // if (document.compForm.switchMode.checked) { setDocMode(true); }
  }
  
  function formatDoc(sCmd, sValue) {
      // if (validateMode()) {
        document.execCommand(sCmd, false, sValue);
        oDoc.focus();
      // }
  }

  function setDocMode(bToSource) {
    var oContent;
    if (bToSource) {
        oContent = document.createTextNode(oDoc.innerHTML);
        oDoc.innerHTML = "";
        var oPre = document.createElement("pre");
        oDoc.contentEditable = false;
        oPre.id = "sourceText";
        oPre.contentEditable = true;
        oPre.appendChild(oContent);
        oDoc.appendChild(oPre);
    } else {
        if (document.all) {
            oDoc.innerHTML = oDoc.innerText;
        } else {
            oContent = document.createRange();
            oContent.selectNodeContents(oDoc.firstChild);
            oDoc.innerHTML = oContent.toString();
        }
        oDoc.contentEditable = true;
    }
    oDoc.focus();
}

window.addEventListener('load', () => {
    initDoc('textBox')
})