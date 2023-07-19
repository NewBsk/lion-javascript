/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');
// console.log(first.className);

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

console.log(first.hasAttribute('title'));

console.log(first.getAttribute('size'));

first.setAttribute('title', '메세지');
// first.setAttribute('title',' ');

first.removeAttribute('title');

console.log(first.attributes);

first.getAttribute('id'); // message

function getAttr(node, prop) {
  // 1. 넘어온 대상이 문자인지를 체크
  // 2. 체크 후 element node로 변경해 줘야함!
  // '.first'.getAttribute('id'); 실행 안됨

  // const node = '.first';
  // const prop = 'id'

  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

// first.setAttribute('title','메세지')

//          '.first','title','인사멘트'
function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!
  if (typeof prop !== 'string') {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }
  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

// getAttr()
// setAttr()

// 작은 함수를 만들고 보다 큰 함수로

const arrowAttr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);

function attr(node, prop, value) {
  //   if (!value) {
  //     return getAttr(node, prop);
  //   } else {
  //     setAttr(node, prop, value);
  //   }

  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

// attr('.first','class') // getter
// attr('.first','class','second') // setter

// getAttr('.second', 'class');

setAttr('.first', 'class', 'playing');
/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

// console.log(first.dataset.tabIndex); // getter

// console.log((first.dataset.animation = 'paused')); // setter
