function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };
  let gravity = 10;

  return function (value) {
    // console.log( apple );
    gravity = value;
    console.log(gravity, water);
  };

  // return tiger
}

const ufo = earth();

ufo(5);

// 가비지 컬렉터가 수집이 되지 않도록 막는걸 closure라고 부른다.

// 보통 외부 function에는  변수를 지정하고 내부function에는 실행시킬내용을 지정

const button = document.querySelector('button');

// let isClicked = true; // 전역 오염 ...

function handleClick() {
  let isClicked = true;

  return function () {
    if (isClicked) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }

    isClicked = !isClicked;
  };
}

button.addEventListener('click', handleClick());

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(overValue) {
    value = overValue;
  }

  return [read, write];
}

// setClick()
// const [click,setClick] = useState(true);
