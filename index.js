document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            this.classList.toggle("active");
          
          let accContent = this.nextElementSibling;
          if (accContent.style.maxHeight) {
            accContent.style.maxHeight = null;
            accContent.style.padding = null;
          } else {
            accContent.style.maxHeight = (accContent.scrollHeight + 16)+ "px";
            accContent.style.padding = "1rem";
          }
          }  
          );
    });
});
