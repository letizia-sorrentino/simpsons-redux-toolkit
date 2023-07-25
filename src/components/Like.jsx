import { useDispatch } from "react-redux";
import { toggleLike } from "../features/counter/counterSlice";

const Like = (props) => {
  const { liked, id } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleLike(id))}>
        {liked ? "Liked" : "Not liked"}
      </button>{" "}
    </div>
  );
};

export default Like;
