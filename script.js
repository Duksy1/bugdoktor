const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
const searchInput = document.querySelector("#searchInput");
const adviceCards = document.querySelectorAll(".advice-card");
const copyButtons = document.querySelectorAll(".copy-button");

menuButton?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

searchInput?.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();

  adviceCards.forEach((card) => {
    const text = `${card.textContent} ${card.dataset.keywords}`.toLowerCase();
    card.classList.toggle("is-hidden", query.length > 0 && !text.includes(query));
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy || button.textContent;
    const original = button.textContent;

    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Kopirano ✓";
    } catch (error) {
      button.textContent = "Označi ručno";
    }

    setTimeout(() => {
      button.textContent = original;
    }, 1400);
  });
});
