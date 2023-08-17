    // Get the button
    let mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 16 || document.documentElement.scrollTop > 16) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }



    // typed js 

    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Ui/Ux Developer', 'Web Designer'],
        typeSpeed: 40,
        loop: true
    });



// preloader //

setTimeout(function(){
  $('.loader-bg').fadeToggle();
},5000);
