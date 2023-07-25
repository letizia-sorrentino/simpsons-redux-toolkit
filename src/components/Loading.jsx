import spinner from "../assets/spinner.svg";

const Loading = () => {
  return <>
    <div className="loadingContainer">
      <img className="spinner" src={spinner} alt="spinner" />
      <h2>Loading...</h2>
    </div>
  
  </>;
};

export default Loading;
