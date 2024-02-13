import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { toDoState } from "../atoms";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
