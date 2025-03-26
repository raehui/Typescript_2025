import { FC } from "react";
import { v4 as uuid } from "uuid";

export interface FriendsProps {
    list: string[]
    onDelete: (idx: number) => void 
}

// 구조 분해 할당??? 자식
const Friends: FC<FriendsProps> = ({ list, onDelete }) => {


    return (
        <>
            <h2>친구 목록</h2>
            <ul>
                {list.map((item, index) =>
                    <li key={uuid()}>
                        {item}
                        {/* e 때문에 onDelete 만 쓰는 거 안됨 */}
                        {/* 그냥 쓰면 걍 void 로 들어감 */}
                        <button onClick={()=>onDelete(index)}>x</button>
                    </li>
                )}
            </ul>
        </>
    );
}

export default Friends;