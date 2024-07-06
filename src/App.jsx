import React, { useRef, useState } from 'react'
import circle_icon from './icon/circle.png'
import cross_icon from './icon/cross.png'

let data=["","","","","","","","",""];

const App = () => {

  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);

  const box1=useRef(null);
  const box2=useRef(null);
  const box3=useRef(null);
  const box4=useRef(null);
  const box5=useRef(null);
  const box6=useRef(null);
  const box7=useRef(null);
  const box8=useRef(null);
  const box9=useRef(null);

  const winner=useRef(null);

  const box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const reset = () => {
    data=["","","","","","","","",""];
    setLock(false);
    setCount(0);
    box_array.map((e) => {
      e.current.innerHTML="";
    })
    winner.current.innerHTML="";
  }

  const checkWin = () => {
    const won = (win) => {
      setLock(true);
      if(win==="x"){
        winner.current.innerHTML=`<img src=${cross_icon}> WON!`;
      }
      else if(win==="o"){
        winner.current.innerHTML=`<img src=${circle_icon}> WON!`;
      }
    }

    if(data[0]===data[1] && data[1]===data[2] && data[2]!=""){
      won(data[2]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=""){
      won(data[5]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=""){
      won(data[8]);
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=""){
      won(data[6]);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=""){
      won(data[7]);
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=""){
      won(data[8]);
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=""){
      won(data[8]);
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=""){
      won(data[6]);
    }
  }

  const toggle = (e,ind) => {
    if(lock){
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML = `<img src='${cross_icon}'>`
      data[ind]='x';
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img src='${circle_icon}'>`
      data[ind]='o';
      setCount(++count);
    }

    checkWin();
  }

  return (
    <div className='bg-gray-800 h-screen flex flex-col'>
      <h1 className='text-4xl text-white text-center pt-8 pb-8'>Tic Tac Toe</h1>
      <div className='flex justify-center mt-1 my-1'>
        <div className='bg-gray-700 h-16 w-16 sm:w-32 sm:h-32 mx-1 rounded-md flex justify-center p-5' ref={box1} onClick={(e) => {toggle(e,0)}}></div>
        <div className='bg-gray-700 h-16 w-16 sm:w-32 sm:h-32 mx-1 rounded-md flex justify-center p-5' ref={box2} onClick={(e) => {toggle(e,1)}}></div>
        <div className='bg-gray-700 h-16 w-16 sm:w-32 sm:h-32 mx-1 rounded-md flex justify-center p-5' ref={box3} onClick={(e) => {toggle(e,2)}}></div>
      </div>
      <div className='flex justify-center my-1'>
        <div className='bg-gray-700 h-16 w-16 sm:w-32 sm:h-32 mx-1 rounded-md flex justify-center p-5' ref={box4} onClick={(e) => {toggle(e,3)}}></div>
        <div className='bg-gray-700 h-16 w-16 sm:w-32 sm:h-32 mx-1 rounded-md flex justify-center p-5' ref={box5} onClick={(e) => {toggle(e,4)}}></div>
        <div className='bg-gray-700 h-16 w-16 sm:w-32 sm:h-32 mx-1 rounded-md flex justify-center p-5' ref={box6} onClick={(e) => {toggle(e,5)}}></div>
      </div>
      <div className='flex justify-center my-1'>
        <div className='bg-gray-700 h-16 w-16 sm:w-32 sm:h-32 mx-1 rounded-md flex justify-center p-5' ref={box7} onClick={(e) => {toggle(e,6)}}></div>
        <div className='bg-gray-700 h-16 w-16 sm:w-32 sm:h-32 mx-1 rounded-md flex justify-center p-5' ref={box8} onClick={(e) => {toggle(e,7)}}></div>
        <div className='bg-gray-700 h-16 w-16 sm:w-32 sm:h-32 mx-1 rounded-md flex justify-center p-5' ref={box9} onClick={(e) => {toggle(e,8)}}></div>
      </div>
      <div className='flex justify-center mt-2 py-8'>
        <button className='rounded-md bg-white h-12 w-20 text-xl font-semibold text-gray-950' onClick={reset}>Reset</button>
      </div>
      <div className='flex flex-row justify-center'>
        <div ref={winner} className='flex flex-row justify-center gap-3 text-center text-md sm:text-2xl text-white h-6 w-6 sm:h-10 sm:w-10'></div>
      </div>
    </div>
  )
}

export default App