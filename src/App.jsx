import { useState } from "react";

function App(){
    const [todo,setTodo] = useState([]);
    function Btnclick(index){
        const arr = [...todo];
        arr[index] = {...todo[index],
        completed:true}
        setTodo(arr);
    }

    const tododata = todo.map((e,index)=>
    <div key={index} className="grid grid-cols-4">
        <h3>{e.title}</h3>
        <h3>{e.description}</h3>
        <button onClick={()=>
            Btnclick(index)
        }>{e.completed == false ? "Mark As Done" : "Done!"}</button>
    </div>
)
    return <>
        <InputAndButton todo={todo} setTodo={setTodo}/>
        <hr />
        {tododata}
    </>
}
export default App;
function InputAndButton({setTodo,todo}){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    function Operation(){
        setTodo([...todo,{
            title:title,
            description:description,
            completed:false
        }])
    }
    return <>
        <input type="text" placeholder="Enter Title"  onInput={(e)=>setTitle(e.target.value)} className="caret-pink-500 ..."/>
        <br /><br />
        <input type="text" placeholder="Enter Description"  onInput={(e)=>setDescription(e.target.value)}/>
        <br /><br />
        <button onClick={Operation}>ADD TODO</button>
    </>
}