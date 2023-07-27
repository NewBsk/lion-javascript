/* global gsap */

import {
  getNode as $,
  insertLast,
  tiger,
  renderUserCard,
  changeColor,
  delayP,
  renderSpinner,
  renderEmptyCard,
  attr,
  clearContents,
} from './lib/index.js';

// 'https://jsonplaceholder.typicode.com/users'

// [phase-1]
// 1. tiger 함수를 사용해서 userData를 가져와 주세요.
// 2. 함수 안으로 넣어주세요.
// 3. userData 랜더링 하세요.
//  - html template을 만든다
//  - userData 넘겨주기
//  - insertLast를 사용해서 랜더링
// 4. 함수를 분리 해주세요.

// [phase-2]
// 1. 에러가 발생 했을 때
// 2. empty svg를 생성하고 랜더링 해주세요
// 3. 함수를 분리해주세요

// [phase-3]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear,render)

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP();

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    // $('.loadingSpinner').remove();
    // dom 자체를 제거

    const response = await tiger.get('http://localhost:3000/users');
    const userData = response.data;

    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor('.user-card');

    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
  } catch (err) {
    console.log(err);
    renderEmptyCard(userCardInner);
  }

  // 어디에 랜더링 할건데? -> userCardInner
  // 어떤 데이터를 랜더링 할건데? -> forEach에서 가져온 item 객체
}

renderUserList();

// 버튼을 클릭 했을 때 해당 article의 id 값을 가져옴.
// - 이벤트 위임
// - button 선택하기 -> 클릭한 대상의 가장 가까운... method
// - attr() , dataset

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!article || !button) return;

  // 만약 button 아닌 다른 곳을 클릭해서 console에 null이 나오면 함수 실행하지마!
  // button 눌렀을때만 article의 값을 가져와!

  const id = attr(article, 'data-index').slice(5);

  // console.log(article.dataset.index);
  // console.log(attr(article, 'data-index'));
  // 버튼 누를시 user-1, user-2, user-3, ... 나옴

  // console.log(id);
  // 버튼 누를시 1,2,3, ... 나옴

  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    // 컨텐츠 항목 전체 지우기
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);
