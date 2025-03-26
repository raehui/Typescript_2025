import { useState } from "react";

function App() {
  //기본 type 익히기

  //1. number, string, boolean;

  const age: number = 25;
  const name: string = "kimgura";
  const isMan: boolean = true;

  // type 이 맞이 않아서 들어가지 않는다.
  // let age2: number = name; 

  // data type 을 선언하지 않으면 type 을 infer (추론) 한다
  const myName = "superman";
  let yourName:string = myName;
  // myName 은 string type 으로 이미 추론되어서 결정되어 있다.
  // let myNum:number = myName;

  // useState 에서 사용하는 type 을 강제할 수 있다.
  const [msg, setMsg] = useState<string>("rain");
  const [count , setCount] = useState<number>(0);

  return (
    <div>
      <h1>인덱스 페이지</h1>
      <button onClick={()=>{
        setMsg("sunny");
      }}>{msg}</button>
      <button onClick={()=>{
        setCount(count+1);
      }}>{count}</button>
    </div>
  )
}

export default App
