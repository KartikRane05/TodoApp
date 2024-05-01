import { useState } from "react";

function App(){
    const [todo,setTodo] = useState([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const tododata = todo.map((e,index)=>
    <div key={index}>
        <h3>{e.title}</h3>
        <h3>{e.description}</h3>
        <button>{e.completed == false ? "Mark As Done" : "Done!"}</button>
    </div>
)
    return <>
        <InputAndButton/>
        <hr />
        {tododata}
    </>
}
export default App;
function InputAndButton(){
    return <>
        <input type="text" placeholder="Enter Title"  onInput={(e)=>setTitle(e.target.value)}/>
        <br /><br />
        <input type="text" placeholder="Enter Description"  onInput={(e)=>setDescription(e.target.value)}/>
        <br /><br />
        <button>ADD TODO</button>
    </>
}