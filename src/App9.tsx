import { useState } from "react";
import Fortune from "./components/Fortune";
import Friends from "./components/Friends";

// 부모가 전달해서 자식이 수행해서 
function App9() {

    const [friends, setFriends] = useState<string[]>(["김구라", "해골", "원숭이"]);

    const handleDelete = (idx:number) =>{
        setFriends(friends.filter((item, index)=> index !== idx));
    } 

    return (
        <div>
            <h1>외부 component 사용하기</h1>
            <Fortune fortune="비가 내리기" />
            <Fortune fortune="강쥐 만남" />
            <Friends list={friends} onDelete={handleDelete}/>
        </div>
    );
}

export default App9;