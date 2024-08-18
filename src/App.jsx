import React, { useRef, useState } from 'react'
import circle_icon from './icon/circle.png'
import cross_icon from './icon/cross.png'

let data = ["", "", "", "", "", "", "", "", ""];
let lock_array = [false, false, false, false, false, false, false, false, false];

const App = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const winner = useRef(null);

  const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const reset = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setLock(false);
    setCount(0);
    box_array.map((e) => {
      e.current.innerHTML = "";
    })
    lock_array.map((e,ind) => {
      lock_array[ind] = false;
    })
    winner.current.innerHTML = "";
  }

  const checkWin = () => {
    const won = (win) => {
      setLock(true);
      if (win === "x") {
        winner.current.innerHTML = `<img src=${cross_icon}> WON!`;
      }
      else if (win === "o") {
        winner.current.innerHTML = `<img src=${circle_icon}> WON!`;
      }
    }

    if (data[0] === data[1] && data[1] === data[2] && data[2] != "") {
      won(data[2]);
    }
    else if (data[3] === data[4] && data[4] === data[5] && data[5] != "") {
      won(data[5]);
    }
    else if (data[6] === data[7] && data[7] === data[8] && data[8] != "") {
      won(data[8]);
    }
    else if (data[0] === data[3] && data[3] === data[6] && data[6] != "") {
      won(data[6]);
    }
    else if (data[1] === data[4] && data[4] === data[7] && data[7] != "") {
      won(data[7]);
    }
    else if (data[2] === data[5] && data[5] === data[8] && data[8] != "") {
      won(data[8]);
    }
    else if (data[0] === data[4] && data[4] === data[8] && data[8] != "") {
      won(data[8]);
    }
    else if (data[2] === data[4] && data[4] === data[6] && data[6] != "") {
      won(data[6]);
    }
  }

  const toggle = (e, ind) => {
    if (lock) {
      return 0;
    }
    if (lock_array[ind] == false) {
      lock_array[ind] = true;
      if (count % 2 === 0) {
        e.target.innerHTML = `<img src='${cross_icon}'>`
        data[ind] = 'x';
        setCount(++count);
      }
      else {
        e.target.innerHTML = `<img src='${circle_icon}'>`
        lock_array[ind] = true;
        data[ind] = 'o';
        setCount(++count);
      }
    }

    checkWin();
  }

  return (
    <div className='flex flex-col bg-gray-800 h-screen'>
      <h1 className='pt-8 pb-8 text-4xl text-center text-white'>Tic Tac Toe</h1>
      <div className='flex justify-center my-1 mt-1'>
        <div className='flex justify-center bg-gray-700 mx-1 p-5 rounded-md w-16 sm:w-32 h-16 sm:h-32' ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
        <div className='flex justify-center bg-gray-700 mx-1 p-5 rounded-md w-16 sm:w-32 h-16 sm:h-32' ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
        <div className='flex justify-center bg-gray-700 mx-1 p-5 rounded-md w-16 sm:w-32 h-16 sm:h-32' ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
      </div>
      <div className='flex justify-center my-1'>
        <div className='flex justify-center bg-gray-700 mx-1 p-5 rounded-md w-16 sm:w-32 h-16 sm:h-32' ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
        <div className='flex justify-center bg-gray-700 mx-1 p-5 rounded-md w-16 sm:w-32 h-16 sm:h-32' ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
        <div className='flex justify-center bg-gray-700 mx-1 p-5 rounded-md w-16 sm:w-32 h-16 sm:h-32' ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
      </div>
      <div className='flex justify-center my-1'>
        <div className='flex justify-center bg-gray-700 mx-1 p-5 rounded-md w-16 sm:w-32 h-16 sm:h-32' ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
        <div className='flex justify-center bg-gray-700 mx-1 p-5 rounded-md w-16 sm:w-32 h-16 sm:h-32' ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
        <div className='flex justify-center bg-gray-700 mx-1 p-5 rounded-md w-16 sm:w-32 h-16 sm:h-32' ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
      </div>
      <div className='flex justify-center mt-2 py-8'>
        <button className='bg-white rounded-md w-20 h-12 font-semibold text-gray-950 text-xl' onClick={reset}>Reset</button>
      </div>
      <div className='flex flex-row justify-center'>
        <div ref={winner} className='flex flex-row justify-center gap-3 w-6 sm:w-10 h-6 sm:h-10 text-center text-md text-white sm:text-2xl'></div>
      </div>
    </div>
  )
}

export default App