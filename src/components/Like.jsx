import { useDispatch } from "react-redux";
import { toggleLike } from "../features/simpsonsManager/simpsonsManagerSlice";

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
