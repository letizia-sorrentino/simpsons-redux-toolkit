const Controls = (props) => {
  const { onSearchInput, onLikeInput } = props;
  return (
    <>
    <div className="controlsContainer"> 
      <input className="searchBar" onInput={onSearchInput} type="text" />
      <select className="selectButton" onInput={onLikeInput}>
        <option value=""></option>
        <option value="liked">Liked</option>
        <option value="notLiked">Not Liked</option>
      </select>
      </div>
    </>
  );
};

export default Controls;
