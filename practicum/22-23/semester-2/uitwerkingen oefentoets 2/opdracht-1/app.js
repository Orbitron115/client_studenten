
//#student-start
let score = 0;

let scoreOphogen = () => {

    score++;
    $('.score').text(score);

}
//#student-end



let tegelOnClick = function (event) {

    console.log(this);

    //#student-start
    $(this).addClass('tegelDraaien');
    //#student-end

    //#student-start
    scoreOphogen();
    //#student-end

    console.log('tegel geklikt');
    return 'tegel geklikt';

}

//document ready
$(() => {


//#student-start
    $('.tegel').on('click', tegelOnClick);
//#student-end


});

