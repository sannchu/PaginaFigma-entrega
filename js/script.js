document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") document.documentElement.classList.add("using-keyboard");
  });
  document.addEventListener("pointerdown", () => {
    document.documentElement.classList.remove("using-keyboard");
  });
  const page = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const loginForm = document.getElementById("login-form");
  const loginModal = document.getElementById("loginModal");
  const contactForm = document.getElementById("contact-form");
  const filterToggle = document.querySelector(".filter-toggle");
  const filterOptions = document.getElementById("filter-options");
  filterToggle?.addEventListener("click", () => {
    const open = filterToggle.getAttribute("aria-expanded") !== "true";
    filterToggle.setAttribute("aria-expanded", String(open));
    filterOptions.classList.toggle("is-collapsed", !open);
  });
  const themeKey = "movieapp.theme";

  let savedTheme = page.dataset.defaultTheme === "light" ? "light" : "dark";
  try {
    const preference = window.localStorage.getItem(themeKey);
    if (preference === "light" || preference === "dark") savedTheme = preference;
  } catch {
    // La página sigue funcionando si el navegador bloquea el almacenamiento local.
  }

  function setTheme(theme) {
    page.setAttribute("data-bs-theme", theme);
    if (themeToggle) {
      if (themeToggle.classList.contains("theme-toggle")) {
        themeToggle.innerHTML = theme === "dark"
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42M6.35 17.65l-1.42 1.42"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"/></svg>';
      } else {
        themeToggle.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
      }
      themeToggle.title = theme === "dark" ? "Cambiar al modo claro" : "Cambiar al modo oscuro";
      themeToggle.setAttribute("aria-label", `Cambiar al modo ${theme === "dark" ? "claro" : "oscuro"}`);
      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  setTheme(savedTheme);

  themeToggle?.addEventListener("click", () => {
    const nextTheme = page.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      window.localStorage.setItem(themeKey, nextTheme);
    } catch {
      // El cambio visual se conserva durante esta visita aunque no haya almacenamiento.
    }
  });

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    loginForm.classList.add("was-validated");

    if (!loginForm.checkValidity()) {
      return;
    }

    bootstrap.Modal.getOrCreateInstance(loginModal).hide();
  });

  loginModal?.addEventListener("hidden.bs.modal", () => {
    loginForm.reset();
    loginForm.classList.remove("was-validated");
  });

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.classList.add("was-validated");

    if (contactForm.checkValidity()) {
      window.alert("¡Formulario enviado con éxito!");
    }
  });
});
