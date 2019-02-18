$('#font').change(function() {
    $("#editeur").css("font-family", $(this).val());
});

$('#size').change(function() {
    $('#editeur').css("font-size", $(this).val());
});
    
$('#bold').click(function() {
    $('#editeur').css("font-weight", 'bold');
});

$('#italic').click(function() {
    $('#editeur').css("font-style", 'italic');
});

$('#underline').click(function() {
    $('#editeur').css("text-decoration", 'underline');
});
