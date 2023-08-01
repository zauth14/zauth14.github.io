const MyModule = (function() {
    "use strict";
 
    var img = id('img');
    var slides = ['community_work.jpeg','penn_engineering.jpg','basketball.jpeg','basketball2.jpeg','news_clipping.jpeg','bioplastics.jpeg','bioplastics_poster.jpg'];
    var Start=0;

    function init(){
        addClickEventListenersToLinks();
        smoothScrolling();
    }

    function smoothScrolling() {
      qsa('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(event) {
      event.preventDefault();
      qs(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
      });
      });
      });
    }

    function slider(){
      if(Start<slides.length){
          Start=Start+1;
      }
      else{
          Start=1;
      }
      console.log(img);
      img.innerHTML = "<img src="+slides[Start-1]+">";
     
    }
    setInterval(slider,3000);

    function addClickEventListenersToLinks() {
      const navLinks = qsa('nav ul li a');
      const sections = qsa('main section');

      navLinks.forEach(link => {
      link.addEventListener('click', e => {
      e.preventDefault();
      sections.forEach(section => section.classList.remove('active'));
      const href = link.getAttribute('href');
      const section = qs(href);
      section.classList.add('active');
      });
      });
    }
 
    init();
})();
 
