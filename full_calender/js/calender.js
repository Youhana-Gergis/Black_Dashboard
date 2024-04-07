$(document).ready(function () {
    $(".sidebar").mousemove(function(){
        $(".sidebar").css({
            width:'230px'
        });
        $('.sidebar-wrapper .nav li a p').css("display","block");
        $('.sidebar-wrapper .logo h3:nth-child(2)').css("display","block");
        $('.sidebar-wrapper .logo h3:nth-child(2)').css("transition","0.5s");
    });
    $(".sidebar").mouseleave(function(){
        $(".sidebar").css({
            width:'80px'
        });
        $('.sidebar-wrapper .nav li a p').css('display','none');
        $('.sidebar-wrapper .logo h3:nth-child(2)').css('display','none');
    });

    $(".nav-item").on('click', function (){
        $(this).addClass('active').siblings('.nav-item').removeClass('active');
    });

    $(".profile_admin").mousemove(function(){
        $(".dropdown-profile").css({"transform":"translateY(95px)"});
    });

    $(".profile_admin").mouseleave(function(){
        $(".dropdown-profile").css({"transform":"translateY(-110px)"});
    });


    $(".icon2_dropdown").mousemove(function(){
        $(".icon-dropdown-waves").css({"transform":"translateY(-5px)"});
    });

    $(".icon2_dropdown").mouseleave(function(){
        $(".icon-dropdown-waves").css({"transform":"translateY(-300px)"});
    });


    $(".fixed-plugin").mousemove(function(){
        $(".dropdown-show-dropdown").css({"transform":"translateY(-50px)", "transition":".5s"});
    });

    $(".fixed-plugin").mouseleave(function(){
        $(".dropdown-show-dropdown").css({"transform":"translateY(-550px)"});
    });

    /*sidebar-min*/
    $(".icon-nav-left").click(function () {
        $(".sidebar-mini").css("left","0px");
    });

    $(".exit").click(function () {
        $(".sidebar-mini").css("left","-260px");
    });
    /*sidebar-min*/



});