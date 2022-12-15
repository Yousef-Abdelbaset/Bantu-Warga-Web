/**
 * Back to top button
 */


  let backtotop = document.querySelector(".back-to-top");

  window.onscroll = function() {
    if (this.scrollY >= 100){
        backtotop.classList.add("active");
    }
    else {
        backtotop.classList.remove("active");
    }

  };



