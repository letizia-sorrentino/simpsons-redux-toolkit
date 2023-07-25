const Image = (props) => {
  const { image, character } = props;
  return <img className="characterImage" src={image} alt={character} />;
};

export default Image;