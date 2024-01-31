import { useAppContext } from "@/context/appContext";
import Button from "../../global/button/button";

const FilterBtn: React.FC = () => {
  const { setToggleFilter } = useAppContext();

  return (
    <Button
      label="Filter"
      onClick={() => setToggleFilter((prev: boolean) => !prev)}
    />
  );
};

export default FilterBtn;
