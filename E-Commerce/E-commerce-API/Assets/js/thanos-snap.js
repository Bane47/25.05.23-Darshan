
var images = ["./Assets/images/thanosidle.png", "./Assets/images/snap-3.png", "./Assets/images/snap-2.png"];
var currentIndex = 0;
var count = 0;


function Snap() {

    if (count < 3) {
      $('#image1').attr('src', images[currentIndex]);
      // $('#image2').attr('src','Image'+(currentIndex+1));
      // $('#image3').attr('src','Image'+(currentIndex+1));
      currentIndex = (currentIndex + 1) % images.length;
      count++;
      
      setTimeout(Snap, 1000);
    }
 
    if (count == 3) {
   
      $('body').css("filter", 'brightness(500%)');
    
      setTimeout(function () {
        $('body').css('filter', 'none'); /* Remove the filter effect after one second */
                                    
            }, 1000);
    }


    setTimeout(function (){
      document.getElementById("fade1").scrollIntoView({behaviour:"Smooth"})
      $('.snap-item1').fadeOut(3000);
  

    },5000)
    setTimeout(function(){
      document.getElementById("fade2").scrollIntoView({behaviour:"Smooth"})
      $('.snap-item2').fadeOut(3000);
    },8000)
    setTimeout(function(){
      document.getElementById("fade3").scrollIntoView({behaviour:"Smooth"})
      $('.snap-item3').fadeOut(3000);
      if(count<=3){
      showSweetAlert()
    }
    },15000)

  //   setTimeout(function () {
  //     var targetSection1 = $('#fade1');
  //     if (targetSection1.length) {
  //       $('html, body').animate({
  //         scrollTop: targetSection1.offset().top
  //       }, 200, function() {
  //         $('.snap-item1').fadeOut(3000);
  //       });
  //     }
  
  //     var targetSection2 = $('#fade2');
  //     if (targetSection2.length) {
  //       $('html, body').delay(4000).animate({
  //         scrollTop: targetSection2.offset().top
  //       }, 200, function() {
  //         $('.snap-item2').fadeOut(3000);
  //       });
  //     }
  //     // document.getElementById("fade2").scrollIntoView({behaviour:"Smooth"})

  //     var targetSection3 = $('#fade3');
  //     if (targetSection3.length) {
  //       $('html, body').delay(9000).animate({
  //         scrollTop: targetSection3.offset().top
  //       }, 100, function() {
  //         $('.snap-item3').fadeOut(3000);
  //         // 
  //       });
  //     }
  //   }, 4000);
  }
  
 
  
  function showSweetAlert() {
    console.log("thest");
    count++;
    Swal.fire({
      showConfirmButton: true,
      html: '  <div>    <img class="col-lg-6 rounded-6" src="https://cdn.wallpapersafari.com/14/48/YjOibp.jpg" alt="">    <h4>Thanos Snap</h4>    <h6>"With a thunderous snap, Thanos unleashed his wrath, reducing people to mere dust. And just as cruel fate would have it, the very page elements that once adorned our screens met the same fiery demise."</h6>  </div>',
      confirmButtonText: "Go back in time",
      willOpen: () => {},
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    });
  }
 