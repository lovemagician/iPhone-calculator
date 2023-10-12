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
let saveNum = "";

const numberHandler = (event) => {
  const num = event.target.textContent.trim();
  // = 입력 끝난 후 누르는 버튼들은 새롭게 firstNum에 들어갈 수 있게 구현하자
  if (result.textContent === "0" && firstNum === "") {
    result.textContent = num;
    firstNum += num;
  } else if (firstNum.charAt(firstNum.length - 1) === "+") {
    result.textContent = num;
    firstNum += num;
  } else if (result.textContent.length === 11) {
  } else {
    let tempNum = "";
    tempNum = result.textContent.split(",").join("") + num;
    result.textContent = tempNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    firstNum += num;
  }
  console.log(`퍼스트넘버 :${firstNum}`);
  console.log(`세컨넘버 :${secondNum}`);
  console.log(`세이브넘버:${saveNum}`);
};
const allClear = () => {
  result.textContent = "0";
  firstNum = "";
  secondNum = "";
  ///숫자 입력했을때 AC에서 C로 바뀌는거 구현하자
};

const minusOperator = () => {
  console.log("");
};
const plusOperator = () => {
  if (firstNum.charAt(firstNum.length - 1) !== "+" && firstNum !== "") {
    result.textContent = Number(eval(firstNum.replace("@", "")))
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    firstNum = firstNum.replace("@", "");
    firstNum = eval(firstNum);
    firstNum += "@+";
  }
  console.log(Number(firstNum.charAt(firstNum.length - 1)));
  console.log(`퍼스트넘버 :${firstNum}`);
  console.log(`세컨넘버 :${secondNum}`);
};

const eqaulOperator = () => {
  if (Number(firstNum.charAt(firstNum.length - 1)) !== NaN && firstNum !== "") {
    if (firstNum.search(["@"]) >= 1) {
      saveNum = firstNum.split("@");
      saveNum = saveNum[saveNum.length - 1];
      firstNum = firstNum.replace("@", "");
      secondNum = eval(firstNum);
      result.textContent = Number(secondNum)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      secondNum = "";
      firstNum = result.textContent.replace(",", "");
      console.log("1st if if");
      //기호가 눌린 상태
    } else if (firstNum.search(["@"]) === -1) {
      firstNum += saveNum;
      secondNum = eval(firstNum);
      result.textContent = Number(secondNum)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      secondNum = "";
      firstNum = result.textContent.replace(",", "");
      console.log("2nd if if");
      //= 버튼 누른 후 계산 결과 값 나온 상태
    }
  } /*오류발생*/ else if (
    Number(firstNum.charAt(firstNum.length - 1)) === NaN
  ) {
    saveNum = firstNum.split("@");
    saveNum = saveNum[saveNum.length - 2];
    firstNum = firstNum.replace("@", "");
    firstNum += saveNum;
    console.log(firstNum);
    secondNum = eval(firstNum);
    result.textContent = Number(secondNum)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    secondNum = "";
    firstNum = result.textContent.replace(",", "");
    console.log("1st else if");
    //숫자입력 이후 기호 눌린 상태 구현 요망
  } else if (firstNum === "" && result.textContent === "0") {
    //올클리어 상태
  }
  /*else {
    saveNum = firstNum.split("");
    saveNum = saveNum[saveNum.length - 2] + saveNum[saveNum.length - 1];
    firstNum += saveNum;
    secondNum = eval(firstNum.replace("@", ""));
    result.textContent = Number(secondNum)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    secondNum = "";
  }*/

  console.log("out");
  console.log(`세이브넘버${saveNum}`);
  console.log(`퍼스트넘버 :${firstNum}`);
  console.log(`세컨넘버 :${secondNum}`);
};

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
