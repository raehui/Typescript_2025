import { useState } from "react";
import Fortune from "./components/Fortune";
import Friends from "./components/Friends";

// 부모가 전달해서 자식이 수행해서 
function App9() {

    const [friends, setFriends] = useState<string[]>(["김구라", "해골", "원숭이"]);

    const handleDelete = (idx:number) =>{
        // idx 는 자식에서 넣어줌 
        setFriends(friends.filter((item, index)=> index !== idx));
    } 

    return (
        <div>
            <h1>외부 component 사용하기</h1>
            {/* fortune 은 인터페이스로 정해진 props  */}
            <Fortune fortune="비가 내리기" />
            <Fortune fortune="강쥐 만남" />
            
            <Friends list={friends} onDelete={handleDelete}/>
        </div>
    );
}

export default App9;