// ========== Menu Toggle ==========
$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    // Scroll-to-top button visibility
    if (window.scrollY > 60) {
      document.querySelector('#scroll-top')?.classList.add('active');
    } else {
      document.querySelector('#scroll-top')?.classList.remove('active');
    }
  });
});

// ========== Page Visibility Change ==========
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
    document.title = "Projects | Vishnu Babu Jaiswal";
    $("#favicon").attr("href", "./assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "./assets/images/favhand.png");
  }
});

// ========== Tawk.to Live Chat ==========
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

// ========== Disable Developer Tools ==========
document.onkeydown = function (e) {
  if (e.keyCode == 123) return false; // F12
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};

// ========== Typing Animation ==========
document.addEventListener("DOMContentLoaded", function () {

  const typingElement = document.querySelector(".typing-text");

  if (typingElement) {
    typingElement.textContent = ""; // prevent overlap

    new Typed(".typing-text", {
      strings: [
        "Cybersecurity Enthusiast",
        "Software Development",
        "Web Development",
        "Python & Java",
        "Open Source"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }

});