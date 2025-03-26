import React, { ChangeEvent, useRef, useState } from "react";

function App6() {
    // 열거형 type
    // 아무것도 작성하지 않으면 숫자로 인식 0 1 2...
    // 상태값의 범주가 정해져 있을 때 열거형 type 을 생각하기
    enum Weapon {
        SWORD,
        GUN,
        ARROW
    }
    
    const [weaponState, setWeaponState] = useState<Weapon>(Weapon.SWORD);
    /*
        select 요소에 change 이벤트가 발생했을 때 발생하는 이벤트 객체의 type 은
        ChangeEvent<HTMLSelectElement> 이다.
    */
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        // 문자를 숫자로 바꾸어서 Weapon type 으로 만든다.
        setWeaponState(Number(e.target.value) as Weapon);
    }
    // 버튼을 클릭했을 때 발생하는 이벤트 객체의 type 은 React.MouseEvent<HTMLButtonElement> 이다.
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (weaponState === Weapon.SWORD) {
            /*
                pRef.current 는 null 일 가능성이 있기 때문에 확인을 해서 .innerText 를 참조해야 한다.
            */
            if (pRef.current !== null) {
                pRef.current!.innerText = "칼로 공격";
            }
        } else if (weaponState === Weapon.GUN) {
            // ! 는 null 일 가능성이 전혀 없다는 단언, 즉 그냥 강제로 참조해! 라는 의미
            pRef.current!.innerText = "총으로 공격";
        } else if (weaponState === Weapon.ARROW) {
            pRef.current!.innerText = "활로 공격";
        }
    }
    // p 요소의 참조값을 useRef() 를 이용해서 관리 하고 싶으면 generic 를 HTMLParagraphElement 로 선언
    const pRef = useRef<HTMLParagraphElement>(null);

    return (
        <div>
            <select onChange={handleChange} value={weaponState}>
                <option value={Weapon.SWORD}>칼</option>
                <option value={Weapon.GUN}>총</option>
                <option value={Weapon.ARROW}>활</option>
            </select>
            <button onClick={handleClick}>공격하기</button>
            <p ref={pRef}></p>
        </div>
    );
}

export default App6;