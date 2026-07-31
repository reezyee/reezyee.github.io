var cursor = document.querySelector(".cursor"),
  cursorScale = document.querySelectorAll(".cursor-scale");
((mouseX = 0), (mouseY = 0));
gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", function (e) {
  ((mouseX = e.clientX), (mouseY = e.clientY));
});

document.addEventListener("mousemove", (e) => {
  const target = e.target.closest(".cursor-scale");

  if (target) {
    cursor.classList.add("grow");
    if (target.classList.contains("small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-small");
    }
  } else {
    cursor.classList.remove("grow", "grow-small");
  }
});
