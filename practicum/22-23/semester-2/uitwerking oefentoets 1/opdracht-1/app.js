let rijdenOfStoppen = function () {

    //#student-start
    $('#rijden').toggleClass('rijden');
    $('#verkeerslicht__rood').toggleClass('rood')
    $('#verkeerslicht__rood').toggleClass('zwart')
    $('#verkeerslicht__groen').toggleClass('groen')
    $('#verkeerslicht__groen').toggleClass('zwart')
    //#student-end

}

//document ready
$(() => {


//#student-start
    $('#rijdenBtn').on('click', () => {
        rijdenOfStoppen();
    });
//#student-end


});

