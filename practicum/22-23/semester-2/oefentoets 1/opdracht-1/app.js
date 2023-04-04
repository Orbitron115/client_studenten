let rijdenOfStoppen = function () {
    debugger;
    $('#rijden').toggleClass('rijden');
}

//document ready
$(() => {

    $('#rijdenBtn').on('click', () => {
        rijdenOfStoppen();
    });

});