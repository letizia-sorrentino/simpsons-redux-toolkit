const Name = (props) => {
  const {character} = props;
  
  return (
    <div>
      <h1 className="characterName">{character}</h1>
    </div>
  );
};

export default Name;