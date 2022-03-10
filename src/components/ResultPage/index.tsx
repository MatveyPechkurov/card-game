import { useSelector } from "react-redux";
import { StateType } from "../../redux/types";

export const ResultPage = () => {
  function refreshPage() {
    window.location.href = "/";
  }
  const { name, count } = useSelector((state: StateType) => state);

  return (
    <div className={"container"}>
      Congratulations {name}! You are your result: {count}
      <button onClick={refreshPage}>start new game</button>
    </div>
  );
};
