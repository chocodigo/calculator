// 숫자 버튼들
const number_btns = document.getElementsByClassName("number_btn");
// 연산(주황) 버튼
const calc_btns = document.getElementsByClassName("calc_btn");
// 기능(회색) 버튼
const func_btns = document.getElementsByClassName("func_btn");

// 계산결과
let result = "0";
// 연산버튼을 눌렀는지 여부
let isClickCalc = false;
// 직전 연산자
let preOperator = "";
// 오류 여부
let isError = false;
// 플러스 마이너스 여부
let isMinus = false;
// 마지막 숫자
let lastNumber = "0";

const result_text_width = document
  .querySelector(".result-text")
  .getBoundingClientRect().width;
let result_width = document
  .querySelector(".result")
  .getBoundingClientRect().width;

document.querySelector(".result").innerHTML = `<span>${result}</span>`;

function resetCalculator() {
  result = "0";
  isError = false;
  isMinus = false;
  preOperator = "";
  document.querySelector(".result").innerHTML = `<span>${result}</span>`;
  document.querySelector(".result").style.fontSize = `67px`;
}

// 숫자 버튼 클릭 이벤트
function clickNumber(event) {
  if (!isError) {
    let number = event.target.value;
    if (preOperator === "=") {
      resetCalculator();
    }
    if (preOperator === "/" && number === "0") {
      document.querySelector(".result").innerHTML = `<span>오류</span>`;
      isError = true;
    } else if (result === "0" || isClickCalc) {
      if (result === "0" && number === ".") {
        number = "0.";
      }
      if (isMinus) {
        number = `-${number}`;
      }
      isMinus = false;
      document.querySelector(".result").innerHTML = `<span>${number}</span>`;

      if (result === "0") {
        result = number;
      } else {
        result += number;
      }
      isClickCalc = false;
    } else {
      document.querySelector(".result").innerHTML += `<span>${number}</span>`;
      result += event.target.value;
    }
    lastNumber = number;
    resizeFontSize();
  }
}

// 숫자 텍스트가 결과를 벗어날 경우 폰트 사이즈 줄임
function resizeFontSize() {
  result_width = document
    .querySelector(".result")
    .getBoundingClientRect().width;

  while (result_width > result_text_width) {
    const result_style = getComputedStyle(document.querySelector(".result"));
    const fontSize =
      result_style.fontSize.split("px")[0] * 1 - 1 > 10
        ? result_style.fontSize.split("px")[0] * 1 - 1
        : 10;
    document.querySelector(".result").style.fontSize = `${fontSize}px`;
    if (fontSize <= 10) {
      document.querySelector(".result").style.wordBreak = "break-all";
    }
    result_width = document
      .querySelector(".result")
      .getBoundingClientRect().width;
  }
}

//result 계산하기
function calculate(array, calc) {
  const _result = eval(array);
  lastNumber = _result;
  if (calc === "=") {
    result = _result + "";
  }
  document.querySelector(".result").innerHTML = `<span>${_result}</span>`;
}
// 연산버튼 클릭이벤트
function clickCalc(event) {
  if (!isError) {
    const calc = event.target.value;

    if (!isClickCalc || preOperator === "=") {
      result += calc;
      isClickCalc = true;
    } else if (calc === "=") {
      result = result.slice(0, result.length - 1);

      result += preOperator + lastNumber + calc;

      isClickCalc = false;
    }
    preOperator = calc;
    calculate(result.slice(0, result.length - 1), calc);
    resizeFontSize();
  }
}

// 기능버튼 클릭 이벤트
function clickFunc(event) {
  const func = event.target.value;
  switch (func) {
    case "C":
      resetCalculator();
      break;
    case "plus_minus":
      isMinus = !isMinus;
      break;
    case "percent":
      const _result = result.match(/[0-9.0-9]+/g);
      document.querySelector(".result").innerHTML = `<span>${
        _result[_result.length - 1] / 100
      }</span>`;

      result =
        result.split(_result[_result.length - 1])[0] +
        _result[_result.length - 1] / 100;

      break;
  }
}

function init() {
  [...number_btns].forEach((number_btn) => {
    number_btn.addEventListener("click", clickNumber);
  });
  [...calc_btns].forEach((calc_btn) => {
    calc_btn.addEventListener("click", clickCalc);
  });
  [...func_btns].forEach((func_btn) => {
    func_btn.addEventListener("click", clickFunc);
  });
}

init();
