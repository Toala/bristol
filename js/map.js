$(document).ready(function() {
    $('.points').click(function() {
        var id = $(this).attr('id');

        console.log(id);
        alert(id);
    });
});