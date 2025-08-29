const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()
// Hover preview for #page3 items
(function () {
  const preview = document.getElementById('fixed-image');
  if (!preview) return;

  const items = document.querySelectorAll('#elem-container .elem');

  items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const url = item.getAttribute('data-image');
      if (!url) return;
      preview.style.backgroundImage = `url('${url}')`;
      preview.style.display = 'block';
    });

    item.addEventListener('mousemove', (e) => {
      // follow cursor a bit (optional)
      const x = e.clientX + 20;
      const y = e.clientY - 100;
      preview.style.left = x + 'px';
      preview.style.top = y + 'px';
    });

    item.addEventListener('mouseleave', () => {
      preview.style.display = 'none';
      preview.style.backgroundImage = '';
    });
  });
})();
