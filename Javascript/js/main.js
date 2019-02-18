function changeFont() {
    var police = document.getElementById('font').value;
    document.getElementById("editeur").style.fontFamily = police;
}

function changeSize() {
    var taille = document.getElementById('size').value;
    document.getElementById("editeur").style.fontSize = taille;
}

function changeBold() {
    document.getElementById("editeur").style.fontWeight = 'bold';
}

function changeItalic() {
    document.getElementById("editeur").style.fontStyle = 'italic';
}

function changeUnder() {
    document.getElementById("editeur").style.textDecoration = 'underline';
}