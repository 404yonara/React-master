import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

function CategorySelector() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };
  return (
    <select value={category} onInput={onInput}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
    </select>
  );
}

export default CategorySelector;
