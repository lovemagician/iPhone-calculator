const watch = document.getElementById("watch");
const getClock = () => {
  const today = new Date();
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  watch.textContent = `${hours}:${minutes}`;
};
setInterval(getClock, 1000);
//watch
const result = document.getElementById("result");
const num0 = document.getElementById("btn-0");
const num1 = document.getElementById("btn-1");
const num2 = document.getElementById("btn-2");
const num3 = document.getElementById("btn-3");
const num4 = document.getElementById("btn-4");
const num5 = document.getElementById("btn-5");
const num6 = document.getElementById("btn-6");
const num7 = document.getElementById("btn-7");
const num8 = document.getElementById("btn-8");
const num9 = document.getElementById("btn-9");
const dot = document.getElementById("btn-dot");
const ac = document.getElementById("btn-ac");
const plus = document.getElementById("btn-plus");
const minus = document.getElementById("btn-minus");
const multiplication = document.getElementById("btn-multiplication");
const division = document.getElementById("btn-division");
const percent = document.getElementById("btn-percent");
const plusMinus = document.getElementById("btn-plusMinus");
const equal = document.getElementById("btn-equal");
//const btns

let firstNum = "";
let secondNum = "";
let tempNum = "";

const resultHandler = () => {
  let number = result.value;
  console.log(number + "라라라");
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  ///세자리 마다 콤마찍기 구현 안 됨.....
  //보이는 주머니 따로 만들기 & 버튼들 클릭으로 바꾸기
};

const numberHandler = (event) => {
  const num = event.target.textContent.trim();
  if (result.value === "0" || firstNum === "") {
    result.value = num;
    firstNum += result.value;
  } else if (result.value.length === 9) {
  } else {
    tempNum = result.value + num;
    console.log(tempNum);
    result.value = tempNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    firstNum += num;
  }
  console.log(`퍼스트넘버 :${firstNum}`);
  console.log(`세컨넘버 :${secondNum}`);
};
const allClear = () => {
  result.value = "0";
  firstNum = "";
  secondNum = "";
  ///숫자 입력했을때 AC에서 C로 바뀌는거 구현하자
};

const minusOperator = () => {
  console.log("");
};

const plusOperator = () => {
  if (firstNum !== "" && secondNum === "") {
    secondNum = firstNum += "+";
    firstNum = "";
  } else if (firstNum !== "" && secondNum !== "") {
    result.value = eval(secondNum + firstNum);
    secondNum = result.value + "+";
    firstNum = "";
  } else {
    secondNum = result.value + "+";
  }
  console.log(`퍼스트넘버 :${firstNum}`);
  console.log(`세컨넘버 :${secondNum}`);
};

const eqaulOperator = () => {
  if (firstNum !== "" && secondNum !== "") {
    result.value = eval(secondNum + firstNum);
    firstNum = "";
    secondNum = "";
  }
};

result.addEventListener("change", resultHandler);
num0.addEventListener("click", numberHandler);
num1.addEventListener("click", numberHandler);
num2.addEventListener("click", numberHandler);
num3.addEventListener("click", numberHandler);
num4.addEventListener("click", numberHandler);
num5.addEventListener("click", numberHandler);
num6.addEventListener("click", numberHandler);
num7.addEventListener("click", numberHandler);
num8.addEventListener("click", numberHandler);
num9.addEventListener("click", numberHandler);
ac.addEventListener("click", allClear);
plus.addEventListener("click", plusOperator);
equal.addEventListener("click", eqaulOperator);
minus.addEventListener("click", minusOperator);
