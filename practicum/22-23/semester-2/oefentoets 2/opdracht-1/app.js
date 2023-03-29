
score = 0

//student uitwerking
let tegelOnClick = function (event) {
//student uitwerking
    $(this).addClass('tegelDraaien');
    scoreVerhogen();
//student uitwerking
    console.log('tegel geklikt');
    return 'tegel geklikt';

}


let scoreVerhogen = () => {
    score ++

    document.querySelector(".score").innerHTML = score.toString();
}

//document ready
$(() => {

    $(".tegel").on('click' , tegelOnClick)
    });
//student uitwerking

