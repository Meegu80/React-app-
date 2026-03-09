import {useState} from "react";

function App() {
    const a = 10;
    let b = 20;

    // const todo  = useState("");
    // 화면을 실행해서 그냥 끝내는 것이였다면 useState를 let으로 했을텐데, const로
    // 유저가 무엇을 하고 있는지 계속 지켜보고 있는 함수가 useState다?
    // 상태(state)를 관리하는 함수
    // useState는 인자를 하나만 받는다, 사용자가 아무것도 치지않은 것을 가정하면
    // 인자로 ""을 넣어줌
    const [ todo, setTodo] = useState("");


    return (
        <div>
            <h1>My ToDo</h1>
            <form>
                <input placeholder={"Write your to do ..."}/>
                {/*원래 html태그에서는 {}을 안하고 그냥 " "만 했는데 react에서는 {}을 해주게 됨,
                추가로 닫힘 태그 /를 꼭 쓰게되었다. */}
                <button>Add To Do</button>
            </form>
        </div>
    )
}

export default App
