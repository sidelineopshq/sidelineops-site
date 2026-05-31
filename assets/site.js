(function () {
  var topbar = document.querySelector(".topbar");
  var navActions = document.querySelector(".nav-actions");
  var menuToggle = document.querySelector(".menu-toggle");

  if (topbar) {
    window.addEventListener("scroll", function () {
      topbar.classList.toggle("scrolled", window.scrollY > 8);
    });
  }

  if (menuToggle && navActions) {
    menuToggle.addEventListener("click", function () {
      var isOpen = navActions.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navActions.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navActions.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  document.querySelectorAll(".faq-question").forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.closest(".faq-item");
      var isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
