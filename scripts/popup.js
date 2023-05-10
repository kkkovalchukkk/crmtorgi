const registerForm = document.querySelector("#register-form");
const loginForm = document.querySelector("#login-form");
const loginPopupWindow = document.querySelector("#login-window");
const loginPopup = document.querySelector("#login-popup");
const toggleLoginPopupBtn = document.querySelector("#header__login-btn");
const toggleRegisterPopupBtn = document.querySelector("#header__register-btn");
const closePopupBtns = document.querySelectorAll(".popup__close-btn");
const goRegisterPopupBtn = document.querySelector("#regitser-go-btn");
const goLoginPopupBtn = document.querySelector("#go-login-btn");

function noScroll(bool) {
  fullpage_api.setAllowScrolling(bool);
}
function openPopup(popup, className) {
  window.addEventListener("click", closePopupByClickOnOverlay);
  window.addEventListener("keydown", closePopupByClickOnEsc);
  popup.classList.remove(className);
  noScroll(false);
}

function closePopup(popup, className) {
  window.removeEventListener("keydown", closePopupByClickOnEsc);
  window.removeEventListener("click", closePopupByClickOnOverlay);
  popup.classList.add(className);
  noScroll(true);
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

toggleRegisterPopupBtn.addEventListener("click", () => {
  openPopup(loginPopupWindow, "popup-window--hidden");
  document.querySelector(".popup__form--active").classList.remove("popup__form--active");
  registerForm.classList.add("popup__form--active");
});

closePopupBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closePopup(loginPopupWindow, "popup-window--hidden");
  });
});

toggleLoginPopupBtn.addEventListener("click", () => {
  openPopup(loginPopupWindow, "popup-window--hidden");
  document.querySelector(".popup__form--active").classList.remove("popup__form--active");
  loginForm.classList.add("popup__form--active");
});

goRegisterPopupBtn.addEventListener("click", () => {
  document.querySelector(".popup__form--active").classList.remove("popup__form--active");
  registerForm.classList.add("popup__form--active");
});

goLoginPopupBtn.addEventListener("click", () => {
  document.querySelector(".popup__form--active").classList.remove("popup__form--active");
  loginForm.classList.add("popup__form--active");
});
