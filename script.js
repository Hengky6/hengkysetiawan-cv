window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section");
  const scrollPos = window.scrollY + window.innerHeight;

  elements.forEach((element) => {
    if (scrollPos > element.offsetTop + element.offsetHeight / 3) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  });
});
