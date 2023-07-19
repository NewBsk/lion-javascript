/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

const container = getNode('.container');

function handleDelegation(e) {
  //  console.log('this');
  let target = e.target;

  let li = target.closest('li');

  if (!li) return;

  let className = attr(li, 'class');
  let = dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }

  //   console.log(li);
  //   return;

  // console.log(className);

  // console.log(target.getAttribute('class'));

  //   if (target.getAttribute('class') === 'a') {
  //     console.log('A버튼 클릭!');
  //   }

  //   if (target.getAttribute('class') === 'b') {
  //     console.log('B버튼 클릭!');
  //   }

  //   if (target.getAttribute('class') === 'c') {
  //     console.log('C버튼 클릭!');
  //   }

  //   if (target.getAttribute('class') === 'd') {
  //     console.log('D버튼 클릭!');
  //   }
}

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
