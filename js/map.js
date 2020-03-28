$(document).ready(function() {
    var states = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila","Colima","Chiapas","Chihuahua","Cdmx","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];
    $('.points').click(function() {
        var id = $(this).attr('id');

        var element = $(this).first();
        var position = element.position();
        console.log("left: " + position.left + ", top: " + position.top);

        var styles = {
            top : (position.top - 80),
            left: (position.left + 20)
        };
        $('.state').text(states[(id-1)]);
        $('.bussiness-card').removeClass('hide').css(styles);
        
        // alert(id);
    });

    $('.btn-access').click(function() {
        location.href = "products.html";
    });
});