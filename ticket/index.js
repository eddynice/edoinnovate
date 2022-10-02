
function update_seats_num() {
    var seats = document.getElementsByClassName("seat");
    var sc = document.getElementById("s_count");
    var g = 0;

    for (var x = 0; x < seats.length; x++) {
        seat = seats[x];
        if (seat.getAttribute("is") == "selected") {
            g += 1;
        }
    }
    sc.innerText = g;
}

function click_seat(id) {
    var e = document.getElementById(id);
    if (e.getAttribute("is") == "selected") {
        e.setAttribute("is", "")
    } else {
        e.setAttribute("is", "selected")
    }

    update_seats_num();

}
$("#transfer").click(() => {
    $("#overlay").fadeIn()
        .animate({
            display: 'inline'
        }, 800, function() {
            $("#modal1").animate({
                height: '450px'
            }, 300, function() {

            });
        });
});


function clear_modal() {
    $("#modal1").animate({
        height: '0px'
    }, 300, function() {
        $("#overlay").fadeOut()
            .animate({
                display: 'None'
            }, 300, function() {

            });
    });
}