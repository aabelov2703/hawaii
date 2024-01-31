import { useAppContext } from "@/context/appContext";
import Button from "../../global/button/button";

const FilterBtn: React.FC = () => {
  const { toggleFilter, setToggleFilter } = useAppContext();

  return (
    <Button label="Filter" onClick={() => setToggleFilter(!toggleFilter)} />
  );
};

export default FilterBtn;
