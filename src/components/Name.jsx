// import {useDispatch} from "react-redux";
//import {toggleLike} from "../features/counter/counterSlice";

const Name = (props) => {
  const {character} = props;
  // const { liked, character, id } = props;
  // const dispatch = useDispatch();

  return (
    <div>
      <h1 className="characterName">{character}</h1>
      {/* <button onClick={() => dispatch(toggleLike(id))}>
        {liked ? "Liked" : "Not liked"}
      </button> */}
    </div>
  );
};

export default Name;