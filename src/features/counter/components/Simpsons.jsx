/* eslint-disable no-unused-vars */
import Character from "./Character";

const Simpsons = (props) => {
  const { simpsons } = props;

  return (
      simpsons.map((item) => {
        return (
          <Character
            item={item}
            key={item.id}
            />
        );
      })
  );
};

export default Simpsons;