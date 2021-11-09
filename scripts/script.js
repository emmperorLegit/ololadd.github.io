$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navBar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navBar').removeClass('nav-toggle');
      
      $('.login-form').removeClass('popup');

      $('section').each(function(){

        let top = $(window).scrollTop();
        let height = $(this).height();
        let id = $(this).attr('id');
        let offset = $(this).offset().top - 200;

        if(top > offset && top < offset + height){
            $('.navBar ul li a').removeClass('active');
            $('.navBar').find('[href="#${id}"]').addClass('active');
        }
      })
    });
})

var x = document.getElementById("student")
var y = document.getElementById("teacher")
var z = document.getElementById("btn-cover")

function teacher(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}


function student(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}