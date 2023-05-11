const registerForm = document.querySelector("#register-form");
const loginForm = document.querySelector("#login-form");
const repeatPasswordForm = document.querySelector("#forgot-password-form");

const loginPopupWindow = document.querySelector("#login-window");
const loginPopup = document.querySelector("#login-popup");
const toggleLoginPopupBtn = document.querySelector("#header__login-btn");
const toggleRegisterPopupBtn = document.querySelector("#header__register-btn");
const closePopupBtns = document.querySelectorAll(".popup__close-btn");

const goRepeatPasswordPopupBtn = document.querySelector("#go-repeat-password-btn");
const repeatPasswordGoBackBtn = document.querySelector("#repeat-password-go-btn");
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

function resetActivityForm() {
  document.querySelector(".popup__form--active").classList.remove("popup__form--active");
}

function setActiveForm(form) {
  form.classList.add("popup__form--active");
}

toggleRegisterPopupBtn.addEventListener("click", () => {
  openPopup(loginPopupWindow, "popup-window--hidden");
  resetActivityForm();
  setActiveForm(registerForm);
});

closePopupBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closePopup(loginPopupWindow, "popup-window--hidden");
  });
});

toggleLoginPopupBtn.addEventListener("click", () => {
  openPopup(loginPopupWindow, "popup-window--hidden");
  resetActivityForm();
  setActiveForm(loginForm);
});

goRegisterPopupBtn.addEventListener("click", () => {
  resetActivityForm();
  setActiveForm(registerForm);
});

goLoginPopupBtn.addEventListener("click", () => {
  resetActivityForm();
  setActiveForm(loginForm);
});

goRepeatPasswordPopupBtn.addEventListener("click", () => {
  resetActivityForm();
  setActiveForm(repeatPasswordForm);
});

repeatPasswordGoBackBtn.addEventListener("click", () => {
  resetActivityForm();
  setActiveForm(loginForm);
});
