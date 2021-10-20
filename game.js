let activeUser = 1;
let userScore1 = 0;
let userScore2 = 0;
$(function() {
    let data = [{
            Name: '1',
            Photo: "dice/1.png"
        },
        {
            Name: '2',
            Photo: "dice/2.png"
        },
        {
            Name: '3',
            Photo: "dice/3.png"
        },
        {
            Name: '4',
            Photo: "dice/4.png"
        },
        {
            Name: '5',
            Photo: "dice/5.png"
        },
        {
            Name: '6',
            Photo: "dice/6.png"
        }
    ];
    var score = 0;



    $('#rolldice').click(() => {
        $('#game').html('')
        let photo = []
        let random = Math.trunc(Math.random() * 6 + 1);
        photo = data.filter(function(item) {
            return item.Name == random;
        });
        $('#image').attr('src', photo[0].Photo);
        let randomnumber = random;


        let news = 0;
        if (random == 1) {
            $(`#currentscore${activeUser}`).html(news);


            if (activeUser == 1) {

                $(`#section${activeUser}`).removeClass('active-user');
                $(`#minibox${activeUser}`).removeClass('active-font');


                $(`#score${activeUser}`).html(0);

                //  userScore1 = 0;
                //  userScore2 = 0;

                userScore1 = 0;

                activeUser = 2;
                score = 0;

                $(`#section${activeUser}`).addClass('active-user');
                $(`#minibox${activeUser}`).addClass('active-font');


            } else {


                $(`#section${activeUser}`).removeClass('active-user');
                $(`#minibox${activeUser}`).removeClass('active-font');
                $(`#score${activeUser}`).html(0);

                activeUser = 1;
                score = 0;
                userScore2 = 0;

                $(`#section${activeUser}`).addClass('active-user');
                $(`#minibox${activeUser}`).addClass('active-font');


            }
            score = 0;
        } else {
            debugger
            $(`#currentscore${activeUser}`).html(randomnumber + score);
            score = randomnumber + score;

        }


    });
    $('#hold').click(() => {
        debugger;

        if (score >= 0) {


            if (activeUser == 1) {
                $(`#score${activeUser}`).html(score + userScore1);
                userScore1 = score + userScore1;
                $(`#minibox${activeUser}`).removeClass('active-font');
                $(`#section${activeUser}`).removeClass('active-user');

                activeUser = 2;

                $(`#minibox${activeUser}`).addClass('active-font');
                $(`#section${activeUser}`).addClass('active-user');



            } else {
                $(`#score${activeUser}`).html(score + userScore2);
                userScore2 = score + userScore2;

                $(`#minibox${activeUser}`).removeClass('active-font');
                $(`#section${activeUser}`).removeClass('active-user');

                activeUser = 1;

                $(`#minibox${activeUser}`).addClass('active-font');
                $(`#section${activeUser}`).addClass('active-user');
            }

        }
        $(`#currentscore1`).html(0);
        $(`#currentscore2`).html(0);
        $('#image').attr('src', 'dice/images.jpg');


        score = 0;


        if (userScore1 >= 25 || userScore2 >= 25) {
            if (activeUser == 1) {
                alert('Winner Player-- 2');
                $('#winner').html('Player 2 Won');

                $("#rolldice").prop("disabled", true);
                $("#hold").prop("disabled", true);

                $('#my-modal').modal('show')


                $('#mymodal').modal('show');
                $('#section1').addClass('active-user');
                $('#section2').removeClass('active-user');
                $('#rolldice').addClass('btn2');
                $('#hold').addClass('btn3');
                $("#rolldice").prop("disabled", true);
                $("#hold").prop("disabled", true);




            } else {
                alert('Winner Player -- 1')
                $('#winner').html('Player 1 Won');
                $("#rolldice").prop("disabled", true);
                $("#hold").prop("disabled", true);

                $('#my-modal').modal('show')


                $('#mymodal').modal('show');
                $('#section1').addClass('active-user');
                $('#section2').removeClass('active-user');
                $('#rolldice').addClass('btn2');
                $('#hold').addClass('btn3');
                $('#image').addClass('imagehide');
                $("#rolldice").prop("disabled", true);
                $("#hold").prop("disabled", true);
            }
        }

    });

    $('#newgame').click(() => {
        score = 0;
        userScore1 = 0;
        userScore2 = 0;
        $('#currentscore1').html(0);
        $('#currentscore2').html(0);
        $('#score1').html(0);
        $('#score2').html(0);

        $('#image').css("display", "block");
        $("#rolldice").prop("disabled", false);
        $("#hold").prop("disabled", false);
        $('#image').attr('src', 'dice/images.jpg');
        $('#game').html('Best Of Luck');
        $('#rolldice').removeClass('btn2');
        $('#hold').removeClass('btn3');

    });
    $('#modalbtn').click(() => {
        debugger
        $('#my-modal').modal('hide')
    });
});