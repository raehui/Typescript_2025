import { FC, JSX } from "react";

function App8() {
    // FortuneComponent 에서 사용하는 props 의 type 을 미리 정의
    interface FortuneProps{
        fortune:string
    }
    
    // 함수형 컴포넌트 정의하기
    // 결과물은 JSX.Element 타입  
    // (props:FortuneProps) => JSX.Element
    const FortuneComponent: FC<FortuneProps> = (props) =>{
        return (
            <p>오늘의 운세: {props.fortune} </p>
        );
    }
    /*
        FC<FortuneProps> 는 (a:FortuneProps) => JSX.Element type 이기도 하다
        단 자식 컴포넌트가 없은 경우
    */
    const FortuneComponent2: (a:FortuneProps) => JSX.Element = (props) =>{
        return (
            <p>오늘의 운세: {props.fortune} </p>
        );
    }

    return (
        <div>
            <h1>함수형 component 를 불러서 사용하기</h1>
            <FortuneComponent fortune="비가 내려요!"/>
            <FortuneComponent2 fortune="로또 당첨!"/>
        </div>
    );
}

export default App8;