function validte(){
        let x = document.forms["validate"]["name"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
$(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(4800).fadeOut('fast'); // will fade out the white DIV that covers the website. 
        $('body').delay(10).css({'overflow':'visible'});
      })
