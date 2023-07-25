/* eslint-disable react/prop-types */
//import { deleteItem, toggleLike } from "../counterSlice";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";
import Like from "./Like";

const Character = (props) => {
  const { character, quote, image, id, characterDirection, liked } = props.item;

  //Make the character face the correct direction changing the order of the components
  if (characterDirection === "Left") {
    return (
      <div className="characterContainer">
        <Name
          character={character}
          //  togglelike={togglelike}
          id={id}
          //liked={liked}
        />
        <Quote quote={quote} />
        <Image image={image} />
       
        <div className="buttonContainer">
        <Like liked={liked} id={id} />
        <Delete
          // deleteItem={deleteItem}
          id={id}
        />
        </div>
      </div>

    );
  }

  return (
    <div className="characterContainer">
      <Name
        character={character}
        // togglelike={togglelike}
        id={id}
        //liked={liked}
      />
      <Quote quote={quote} />
      <Image image={image} />

      <div className="buttonContainer">
        <Like liked={liked} id={id} />
        <Delete
          //deleteItem={deleteItem}
          id={id}
        />
      </div>
    </div>
  );
};

export default Character;
