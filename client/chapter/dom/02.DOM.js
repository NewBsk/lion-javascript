/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById

// const message = document.getElementById('message');

// document.querySelector('.first')
// console.log(message);

// document.getElementById

// - getElementsByTagName
// - getElementsByClassName

// el,els
// function getNode(node) {
//   if (typeof node != 'string') {
//     throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.');
//   }
//   return document.querySelector(node);
// }

getNode('.first'); // <span class="first"></span>

const first = getNode('.first');

// const first = document.querySelector('.first');
// const [firstSpan, secondSpan] = document.querySelectorAll('span');

// console.log(first)
// console.log(firstSpan);
// console.log(secondSpan);

// - querySelector
// - querySelectorAll
// - closest

console.log(first.closest('h1')); // event delegation(위임)

/* 문서 대상 확인 */
// - matches

// 선택자 안에 class | id를 가지고 있는 대상이 있어?
console.log(first.matches('#message'));

// - contains

// 선택자의 자식들 중에 해당 element가 있어?
// console.log(first.contains('secondSpan'));

// 클래스를 포함하고 있어?
// Node.classList.contains()
