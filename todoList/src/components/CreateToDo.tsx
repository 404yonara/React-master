import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, formState, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
    setToDos((oldToDos) => [
      { text: data.toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", {
          required: { value: true, message: "Please write a To Do" },
        })}
        placeholder="Write a to do"
      />
      <span>{formState.errors?.toDo?.message}</span>
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
