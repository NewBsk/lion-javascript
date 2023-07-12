/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
//                  rest parameter
let calcAllMoney = (a, b, ...args) => {
  console.log(args);
  //   let total = 0;

  //   args.forEach((item) => {
  //     total += item;
  //   });

  //   return args.reduce(function (acc, item) {
  //     return acc + item;
  //   }, 0);

  return args.reduce((acc, item) => acc + item, 0);

  // return total;
};

const result = calcAllMoney(1000, 500, 200, 2000);

// console.log(result);

// 화살표 함수와 this

// 함수선언문
function normalFunction() {
  //  console.log(this);
}

window.normalFunction();

// 함수표현식
const expressionFunction = function () {
  //  console.log(this);
};

// 화살표함수식
const arrowFunction = () => {
  //  console.log(this);
};

arrowFunction();

// 객체 안에서 this

// 객체의 메서드를 정의할때는 화살표 함수보다 일반 함수가 더 좋은거 아닌가요? 맞습니다.
// 메서드 안에서 함수를 호출할때는 화살표 함수가 더 좋아요

//일반함수 : 나를 호출한 대상을 'this로' 바인딩한다.
//화살표함수 : this를 바인딩 하지 않음. 부모요소의 값을 가지고 온다.

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    console.log(this);
  },
};
