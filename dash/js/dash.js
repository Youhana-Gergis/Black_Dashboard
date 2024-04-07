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
    $(".profile_admin").mousemove(function(){
        $(".dropdown-profile").css({"transform":"translateY(100px)"});
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


    $("#purple").click(function (){
        $(".color-top").css("background","#e14eca");
        $(".sidebar").css({background: 'linear-gradient(0deg,#ba54f5,#e14eca)'});
        $(".sidebar-mini").css({background: 'linear-gradient(0deg,#ba54f5,#e14eca)'});
    });
    $("#blue").click(function (){
        $(".color-top").css("background","#1d8cf8");
        $(".sidebar").css({background: 'linear-gradient(0deg,#3358f4,#1d8cf8)'});
        $(".sidebar-mini").css({background: 'linear-gradient(0deg,#3358f4,#1d8cf8)'});
    });
    $("#green").click(function (){
        $(".color-top").css("background","#00f2c3");
        $(".sidebar").css({background: 'linear-gradient(0deg,#0098f0,#00f2c3)'});
        $(".sidebar-mini").css({background: 'linear-gradient(0deg,#0098f0,#00f2c3)'});
    });
    $("#orange").click(function (){
        $(".color-top").css("background","#ff8d72");
        $(".sidebar").css({background: 'linear-gradient(0deg,#ff6491,#ff8d72)'});
        $(".sidebar-mini").css({background: 'linear-gradient(0deg,#ff6491,#ff8d72)'});
    });
    $("#red").click(function (){
        $(".color-top").css("background","#fd5d93");
        $(".sidebar").css({background: 'linear-gradient(0deg,#ec250d,#fd5d93)'});
        $(".sidebar-mini").css({background: 'linear-gradient(0deg,#ec250d,#fd5d93)'});
    });




    $(".color").on('click', function (){
        $(this).addClass('active').siblings('span').removeClass('active');
    });


    $(".nav-item").on('click', function (){
        $(this).addClass('active').siblings('.nav-item').removeClass('active');
    });


    /*sidebar-min*/
    $(".icon-nav-left").click(function () {
        $(".sidebar-mini").css("left","0px");
    });

    $(".exit").click(function () {
        $(".sidebar-mini").css("left","-260px");
    });

    /*sidebar-min*/


    /*navbar-min*/
    $("#list").click(function () {
        $(".navbar-mini").slideToggle();
    });
    $(".title-notification").click(function () {
        $(".notification-info").fadeToggle();
    });
    $(".profile-setting").click(function () {
        $(".dropdown-nav-profile").fadeToggle();
    });
    /*navbar-min*/

    $(".icon-toggle").click(function () {
        $(".setting-cardTasks-ManageTable").css("display","block");
        $(".setting-cardTasks-ManageTable").css("display","flex");
        $(".setting-cardTasks-ManageTable").css({transform:"translateY(40px)"});
        $(".setting-cardTasks-ManageTable").animate({top: '-20px'});
    });
    $(".setting-cardTasks-ManageTable").mouseleave(function () {
        $(".setting-cardTasks-ManageTable").css("display","none");
    });



    $(".icon-client-table").click(function () {
        $(".manage-clientTable").css("display","block");
        $(".manage-clientTable").css("display","flex");
        $(".manage-clientTable").css({transform:"translateY(40px)"});
        $(".manage-clientTable").animate({top: '-20px'});
    });
    $(".manage-clientTable").mouseleave(function () {
        $(".manage-clientTable").css("display","none");

    });


});





function MyFunction(x){
    if(x.matches){
        but1.innerHTML = "<i class='fa-regular fa-user'></i>";
    }else{
        but1.innerHTML = "Accounts";
    }
    if(x.matches){
        but2.innerHTML = "<i class='fa-solid fa-gift'></i>";
    }else{
        but2.innerHTML = "Purchases";
    }
    if(x.matches){
        but3.innerHTML = "<i class='fa-regular fa-hand-point-up'></i>";
    }else{
        but3.innerHTML = "Sessions";
    }
}

var x = window.matchMedia("(max-width:575px)");
MyFunction(x);
x.addListener(MyFunction);




function disable(e){
    if(e.matches){
        document.getElementById("disable").style.cursor = "pointer"; 
    }else{
        document.getElementById("disable").style.cursor = "default"; 
    }
}
var e = window.matchMedia("(max-width:1200px)");
disable(e);
e.addListener(disable);



