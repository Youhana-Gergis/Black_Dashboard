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


    /*Sidebar Mini*/
    $(".list-icon").click(function () {
        $(".sidebar-mini").css("left","0px");
    });

    $(".exit").click(function () {
        $(".sidebar-mini").css("left","-260px");
    });

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



});


/*==============java script===============*/

/*==== upload image =====*/

var file = document.getElementById("inImage");
var img = document.getElementById("imgSelect");
function add() {
    file.addEventListener("change" , (e) => {
        img.src = URL.createObjectURL(e.target.files[0]);
    });
}


function removeImg(){
    img.src = "./img/image_placeholder.jpg"; 
}



/* form Steps */
const prevBtn = document.querySelectorAll(".btn-prev");
const nextBtn = document.querySelectorAll(".btn-next"); 
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".from-step");
const ProgressSteps = document.querySelectorAll(".progress-step");

let formStepNum = 0;

nextBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepNum++;
        updateFromSteps();
        updateProgressBar();
    });
});

prevBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepNum--;
        updateFromSteps();
        updateProgressBar();
    });
});

function updateFromSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove ("form-step-active");
    });
    formSteps[formStepNum].classList.add("form-step-active");
}


/*==== progress active =====*/

function updateProgressBar(){
    ProgressSteps.forEach((progressStep , idx) => {
        if(idx < formStepNum + 1){
            progressStep.classList.add('progressActive');
        }else{
            progressStep.classList.remove('progressActive');
        }
    });

    const progressStepActive = document.querySelectorAll(".progressActive");
    progress.style.width = ((progressStepActive.length - 1) / (ProgressSteps.length - 1)) * 100 + "%";
}
