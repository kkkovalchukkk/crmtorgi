$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
};

$(".popup__form-tel-input").mask("+7 999 999-99-99");
$(".popup__form-tel-input")
  .click(function () {
    $(this).setCursorPosition(3);
  })
  .mask("+7(999) 999-9999");
