import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((item) => item.id === id);
      const newToDo = { text: text, id: id, category: name as any };
      return name !== "DELETE"
        ? [
            ...oldToDos.slice(0, targetIndex),
            newToDo,
            ...oldToDos.slice(targetIndex + 1),
          ]
        : [
            ...oldToDos.slice(0, targetIndex),
            ...oldToDos.slice(targetIndex + 1),
          ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button name="DELETE" onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

export default ToDo;
