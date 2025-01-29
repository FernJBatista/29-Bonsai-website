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

    const footerToggles = document.querySelectorAll(".footer-toggle");

    footerToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
          this.classList.toggle("active");

        // Checking the next sibling element
        const nextSibling = this.nextElementSibling;
        if (nextSibling?.classList.contains("footer-panel")) {
          
          // Access the correct panel element
          const panel = nextSibling;

          // Toggle maxheight for the panel
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = (panel.scrollHeight)+ "px";
          }
        }
    })
});

const checkbox = document.getElementById('checkbox');
const monthlyPlan = document.querySelector('#monthly-plans');
const yearlyPlan = document.querySelector('#yearly-plans');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      monthlyPlan.style.opacity = '0';
      monthlyPlan.style.visibility = 'hidden'
      monthlyPlan.style.display = 'none'
      yearlyPlan.style.opacity = '1';
      yearlyPlan.style.visibility = 'visible'
      yearlyPlan.style.display = 'flex'
    } else {
      monthlyPlan.style.opacity = '1';
      monthlyPlan.style.visibility = 'visible'
      monthlyPlan.style.display = 'flex'
      yearlyPlan.style.opacity = '0';
      yearlyPlan.style.visibility = 'hidden'
      yearlyPlan.style.display = 'none'
    }
});

const hamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', function() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'flex';
  } else {
    mobileMenu.style.display = 'none';
  }
});

const closeMenu = document.getElementById('close');
closeMenu.addEventListener('click', function() {
  mobileMenu.style.display = 'none';
});

const mobileDropDown = document.getElementsByClassName('dropdown');
mobileDropDown.forEach((dropdown) => {
  addEventListener('click', function() {
    const nextSibling = this.nextElementSibling;

    if (nextSibling?.classList.contains("dropdown-section")) {
      const panel = nextSibling;

      if (panel.style.display === 'none') {
        panel.style.display = 'flex';
      } else {
        panel.style.display = 'none';
      }
    }
  });
});

});
