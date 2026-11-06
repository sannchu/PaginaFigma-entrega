document.addEventListener("DOMContentLoaded", () => {
  const addIcon = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>';
  const savedIcon = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4.2 4.2L19 6.8"></path></svg>';
  const menuIcon = '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="19" cy="12" r="1.5"></circle></svg>';
  const cards = Array.from(document.querySelectorAll(".movie-card"));
  const library = document.querySelector("[data-library-movies]");
  const menu = document.getElementById("movie-actions-menu");
  const featuredSave = document.querySelector("[data-featured-save]");
  let activeTrigger = null;

  function closeMenu(returnFocus = false) {
    menu.hidden = true;
    if (activeTrigger) {
      activeTrigger.setAttribute("aria-expanded", "false");
      if (returnFocus) activeTrigger.focus();
    }
    activeTrigger = null;
  }

  function openMenu(button, keyboard = false) {
    if (activeTrigger === button && !menu.hidden) {
      closeMenu(true);
      return;
    }
    closeMenu();
    activeTrigger = button;
    button.setAttribute("aria-expanded", "true");
    menu.hidden = false;
    const bounds = button.getBoundingClientRect();
    const left = Math.max(8, Math.min(bounds.right - menu.offsetWidth, window.innerWidth - menu.offsetWidth - 8));
    const top = Math.max(8, Math.min(bounds.top - menu.offsetHeight - 6, window.innerHeight - menu.offsetHeight - 8));
    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
    if (keyboard) menu.querySelector("button").focus();
  }

  cards.forEach(card => {
    const image = card.querySelector(".movie-poster");
    const poster = document.createElement("div");
    poster.className = "movie-poster-wrap";
    image.before(poster);
    poster.append(image);

    const isNew = Boolean(card.closest("#nuevas"));
    if (isNew) {
      const badge = document.createElement("span");
      badge.className = "movie-badge movie-badge-new";
      badge.textContent = "Nuevo";
      badge.setAttribute("aria-hidden", "true");
      poster.append(badge);
    }

    const save = document.createElement("button");
    save.type = "button";
    save.className = "movie-list-toggle";
    const titleText = card.querySelector("h3").textContent.trim();
    const initiallySaved = Boolean(library);
    save.classList.toggle("is-saved", initiallySaved);
    save.innerHTML = initiallySaved ? savedIcon : addIcon;
    save.setAttribute("aria-pressed", String(initiallySaved));
    save.setAttribute("aria-label", `${initiallySaved ? "Quitar" : "Marcar"} ${titleText}`);
    save.addEventListener("click", () => {
      const checked = save.classList.toggle("is-saved");
      save.innerHTML = checked ? savedIcon : addIcon;
      save.setAttribute("aria-pressed", String(checked));
      save.setAttribute("aria-label", `${checked ? "Desmarcar" : "Marcar"} ${titleText}`);
      if (library && !checked) {
        card.closest(".library-card-item").remove();
      }
    });
    poster.append(save);

    const title = card.querySelector("h3");
    const titleRow = document.createElement("div");
    titleRow.className = "movie-title-row";
    title.before(titleRow);
    titleRow.append(title);
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "movie-menu-toggle";
    trigger.innerHTML = menuIcon;
    trigger.setAttribute("aria-label", `Más opciones para ${title.textContent}`);
    trigger.setAttribute("aria-haspopup", "menu");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", "movie-actions-menu");
    trigger.addEventListener("click", event => openMenu(trigger, event.detail === 0));
    titleRow.append(trigger);
  });

  menu.addEventListener("keydown", event => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const items = Array.from(menu.querySelectorAll("button"));
    const index = items.indexOf(document.activeElement);
    items[(index + (event.key === "ArrowDown" ? 1 : items.length - 1)) % items.length].focus();
  });
  document.addEventListener("click", event => {
    if (!menu.hidden && !menu.contains(event.target) && !event.target.closest(".movie-menu-toggle")) closeMenu();
  });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !menu.hidden) closeMenu(true); });
  window.addEventListener("resize", () => closeMenu());
  window.addEventListener("scroll", () => closeMenu(), true);
  featuredSave?.setAttribute("aria-pressed", "false");
  featuredSave?.addEventListener("click", () => {
    const checked = featuredSave.getAttribute("aria-pressed") !== "true";
    featuredSave.setAttribute("aria-pressed", String(checked));
    featuredSave.textContent = checked ? "✓ En mi lista" : "+ Mi lista";
  });

  document.querySelectorAll(".movie-section").forEach(section => {
    const row = section.querySelector(".movie-grid");
    const previous = section.querySelector("[data-carousel-prev]");
    const next = section.querySelector("[data-carousel-next]");
    const update = () => {
      previous.disabled = row.scrollLeft <= 1;
      next.disabled = row.scrollLeft + row.clientWidth >= row.scrollWidth - 1;
    };
    const move = direction => row.scrollBy({ left: direction * Math.max(row.clientWidth * 0.8, 160), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    previous.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    row.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });

});
