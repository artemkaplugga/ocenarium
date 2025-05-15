document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
   
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true, 
      centeredSlides: false,
      watchOverflow: true, 

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled' 
      },
 
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      },
      
 
      breakpoints: {
      
        576: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
     
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
   
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
 
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        },

        375: {
            slidesPerView: 1,
            spaceBetween: 10
        }
      },
      
    
      on: {
        init: function() {
          console.log('Swiper initialized');
        },
        slideChange: function() {
          console.log('Slide changed to: ', this.activeIndex);
        }
      }
    });
  });







document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeBtn = document.getElementById("closeBtn");

    if (burger && mobileMenu && closeBtn) {
        burger.addEventListener("click", () => {
            mobileMenu.classList.add("active");
            burger.style.display = 'none'; // Скрываем бургер
        });

        closeBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            burger.style.display = 'block'; // Показываем бургер
        });

        document.querySelectorAll(".mobile-menu-links a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
                burger.style.display = 'block'; // Показываем бургер при клике на ссылку
            });
        });
    }
});
const modal = document.getElementById("modal");
const btn = document.querySelector(".cta-btn");
const span = document.querySelector(".modal .close");

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const checkbox = document.getElementById('robotCheckbox');
    const errorMsg = document.getElementById('checkboxError');
    const modal = document.getElementById('modal');
    const openModalBtn = document.querySelector('.cta-btn');
    const closeModalBtn = document.querySelector('.modal-content .close');


    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });


    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });


    form.addEventListener('submit', function (e) {
        if (!checkbox.checked) {
            e.preventDefault();
            errorMsg.style.display = 'block'; 
        } else {
            errorMsg.style.display = 'none';
        }
    });
});



