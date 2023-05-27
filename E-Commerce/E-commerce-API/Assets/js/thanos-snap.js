
var images = ["./Assets/images/thanosidle.png","./Assets/images/snap-3.png","./Assets/images/snap-2.png"];
var currentIndex = 0;
    var count = 0;

function Snap(){
if(count<3){
$('#image1').attr('src',images[currentIndex]);
// $('#image2').attr('src','Image'+(currentIndex+1));
// $('#image3').attr('src','Image'+(currentIndex+1));
currentIndex = (currentIndex + 1) % images.length;
count++;
setTimeout(Snap,1000);
}
$('body').css("filter",'grayscale(100%)');
setTimeout(function() {
    $('body').css('filter', 'none'); /* Remove the filter effect after one second */
  }, 1000);


setTimeout(function(){
    // event.preventDefault();
    // var target = $(this.getAttribute('href'));
    var targetSection = $('#fade1');
    if(targetSection.length){
        $('html, body').animate({
            scrollTop : targetSection.offset().top
        },500);
    }

$('.snap-item1').delay(2000).fadeOut(3000);
var targetSection = $('#fade2');
if(targetSection.length){
    $('html, body').animate({
        scrollTop : targetSection.offset().top
    },500);
}
$('.snap-item2').delay(6000).fadeOut(3000);
var targetSection = $('#fade3');
if(targetSection.length){
    $('html, body').animate({
        scrollTop : targetSection.offset().top
    },500);
}
$('.snap-item3').delay(8000).fadeOut(3000);
},4000)
}