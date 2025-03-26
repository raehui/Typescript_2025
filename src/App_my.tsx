import { useRef, useState } from "react";

function App_my() {

    const [todo, setTodo ] = useState<string[]>([]);


    const add = (e:React.MouseEvent<HTMLButtonElement>)=>{
        setTodo([
            ...todo,

        ]);
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <form action="">
                <input type="text" placeholder="할 일을 입력하세요" />
                <button onClick={(e)=>{
                    
                    
                }}>추가하기</button>
            </form>
            <ul>
                {todo.map(item=><li>{item}</li>)}
            </ul>
        </div>
    );
}

export default App_my;