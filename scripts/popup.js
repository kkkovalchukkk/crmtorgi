const loginPopupWindow = document.querySelector("#login-window");
const loginPopup = document.querySelector("#login-popup");
const toggleLoginPopupBtn = document.querySelector("#header__login-btn");
const closePopupBtns = document.querySelectorAll(".popup__close-btn");

function openPopup(popup, className) {
  window.addEventListener("click", closePopupByClickOnOverlay);
  window.addEventListener("keydown", closePopupByClickOnEsc);
  popup.classList.remove(className);
}

function closePopup(popup, className) {
  window.removeEventListener("keydown", closePopupByClickOnEsc);
  window.removeEventListener("click", closePopupByClickOnOverlay);

  popup.classList.add(className);
}

function closePopupByClickOnOverlay(e) {
  if (e.target === loginPopupWindow) {
    closePopup(loginPopupWindow, "popup-window--hidden");
  }
}

function closePopupByClickOnEsc(e) {
  if (e.key === "Escape") {
    closePopup(loginPopupWindow, "popup-window--hidden");
  }
}

closePopupBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closePopup(loginPopupWindow, "popup-window--hidden");
  });
});

toggleLoginPopupBtn.addEventListener("click", () => {
  openPopup(loginPopupWindow, "popup-window--hidden");
});
