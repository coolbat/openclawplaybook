(function () {
  const root = document.body;

  const langBtns = document.querySelectorAll("[data-lang-btn]");
  const themeBtns = document.querySelectorAll("[data-theme-btn]");

  const defaultTheme = root.getAttribute("data-theme-default") || "light";
  const savedLang = localStorage.getItem("oc101-lang") || "zh";
  const savedTheme = localStorage.getItem("oc101-theme") || defaultTheme;

  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    localStorage.setItem("oc101-lang", lang);
    langBtns.forEach((btn) => {
      btn.classList.toggle("is-on", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("oc101-theme", theme);
    themeBtns.forEach((btn) => {
      btn.classList.toggle("is-on", btn.getAttribute("data-theme-btn") === theme);
    });
  }

  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang-btn")));
  });

  themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.getAttribute("data-theme-btn")));
  });

  applyLang(savedLang);
  applyTheme(savedTheme);
})();
