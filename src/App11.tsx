
import React, { useReducer, useRef, useState } from 'react';
import { v4 as uuid } from "uuid";
//action 에는 2가지의 정보(type, payload)를 담을 수 있다.

// 액션을 발행할때 해당 액션의 type 정의하기
interface Action {
    type: ActionType
    payload?: string // RESET 할 때는 payload 가 없으므로 optional 로 정의한다. optional 은 undefined 생각
}


// 액션객체에서 사용할 type 목록을 미리 enum 으로 정의해 놓기
enum ActionType {
    ADD,
    RESET,
    REMOVE
}

/*
const action1: Action = { type: ActionType.ADD, payload: "xxx" };

const action2: Action = { type: ActionType.REMOVE };

// undefinde 면 빈 문자열을 넣어라
const result1: string | undefined = action1.payload || "" ;

action2.payload // undefined
*/


// const [state, setState] = useState<initState>({
//     userName: "kimgura",
//     friends: []
// })



const reducer = (state: State, action: Action): State => {
    let newState: State;
    if (action.type === ActionType.ADD) {
        newState = {
            ...state,
            // name 의 타입은 string 이지만 action.payload 는 string 도 undefined 가 될 수 있기에 || 로 undefinde 면 "" 을 넣어라!
            friends: [...state.friends, { id: uuid(), name: action.payload || ""}] // 기존의 배열에 object를 요소로  하나 추가하기
        }
    } else if (action.type === ActionType.RESET) {
        newState = {
            ...state,
            friends: [] // 원하는 상태값 작성하기
        }
    } else if (action.type === ActionType.REMOVE) {
        //배열에서 특정 아이템을 제거되는 filter
        //item 은 friends 에 있는 오브젝트 요소
        newState = {
            ...state,
            friends: state.friends.filter(((item) => action.payload !== item.id))
        }
    }
    else {
        newState = state;
    }

    /*
        {
            userName: string;
            friends: { id: string; name: string }[];
        }
    */

    return newState;
}

interface Friend {
    id: string
    name: string
}

interface State {
    userName: string
    friends: Friend[]
}

//초기상태값
const initState: State = {
    userName: "kimgura",
    // 친구를 추가할 때마다 { id: string, name: string } 객체가 배열에 추가됨 
    friends: []
}


function Friends() {
    // useReducer(리듀서 함수, 초기 상태값)
    // 초기의 state 은 {userName: " ", friends:[ ]} 
    const [state, dispatch] = useReducer(reducer, initState);
    // 처음에는 입력값이 없으니 null 작성
    // 렌더링 input 요소를 아직 인식하지 못했기에 null로 설정해야 함
    const inputName = useRef<HTMLInputElement>(null);

    return (
        <div>
            <p>로그인된 userName : <strong>{state.userName}</strong></p>
            {/* 입력값을 useRef 의 훅 이용해서 inputName 상수에 넣기 */}
            <input ref={inputName} type="text" placeholder='친구 이름 입력...' />
            <button onClick={() => {
                // ! null 이 아닌 무조건 값이 있다고 생각함
                // 입력창에 아무것도 입력하지 않아도 null 로 보지 않음
                const name = inputName.current!.value;
                //발행할 action 을 object 로 만든다.
                //입력한 내용을 payload 라는 변수에 담고 
                const action: Action = { type: ActionType.ADD, payload: name };
                //action 발행하기
                //dispatch 로 action 에 담긴 type 과 payload 를 갖고 new state 를 만들겠다.
                dispatch(action);
            }}>추가</button>
            <button onClick={() => {
                // Action 객체의 payload 는 optional 이기 때문에 payload 를 담지 않아도 된다.
                const action: Action = { type: ActionType.RESET };
                dispatch(action);
            }}>리셋</button>
            <ul>
                {state.friends.map(item =>
                    // item item: { id: string, name: string }
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => {
                            //해당 아이템만을 삭제하는 action
                            const action: Action = { type: ActionType.REMOVE, payload: item.id };
                            //action 에는 type 과 payload 에 필요한 데이터가 담겼음
                            dispatch(action);
                        }}>x</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Friends;