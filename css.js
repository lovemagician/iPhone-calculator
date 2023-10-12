function changeBtn(event) {
  let btns = document.querySelectorAll(".orangeBtnChange");
  btns.forEach((btn) => {
    if (event.currentTarget === btn) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}
/*
function numAfterEqual(event) {
  let btn = document.querySelector("#btn-equal");
  if (event.cureentTarget === btn) {
    btn.classList.add(".numAfterEqual");
  }
}
*/
