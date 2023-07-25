/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import axios from "axios";
import Header from './components/Header'
import Loading from "./components/Loading";
import Controls from "./components/Controls";
import Simpsons from "./components/Simpsons";
import { setSimpsons, selectSimpsons, selectSearchInput, selectLikeInput, setSearchInput, setLikeInput, deleteItem, toggleLike } from "./features/counter/counterSlice";
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";

const App = () => {
  //state hooks
  const simpsons = useSelector(selectSimpsons);
  const searchInput = useSelector(selectSearchInput);
  const likeInput = useSelector(selectLikeInput);

  const dispatch = useDispatch();

  //get data from API
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
      );
      console.log(data);

      //fixed the api data to have unique id
      data.forEach((element, index) => {
        element.id = index + Math.random();
      });
      console.log(data);

      const dataAsObject = data;
      //await data.json();
      dispatch(setSimpsons(dataAsObject));// now the data is in the store
      console.log(dataAsObject);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); //[] means it runs once

  //Search box
  const onSearchInput = (e) => {
    setSearchInput(e.target.value);
    dispatch(setSearchInput(e.target.value));
  };

  //sort by like
  const onLikeInput = (e) => {
    setLikeInput(e.target.value);
    dispatch(setLikeInput(e.target.value));
  };

  //below is the return
  if (!simpsons) return <Loading />;
  if (simpsons.length === 0) return <p>You deleted all the characters!</p>;

  //calculate the total likes
  let total = 0;
  simpsons.forEach((char) => {
    if (char.liked) {
      total++;
    }
  });

  //filter the result
  let filteredList = [...simpsons];

  //filtered by search
  if (searchInput) {
    filteredList = filteredList.filter((char) => {
      //console.log(char.character, searchInput);
      if (char.character.toLowerCase().includes(searchInput.toLowerCase()))
        return true;
    });
  }
  //sort by liked / not liked
  if (likeInput === "liked") {
    filteredList.sort((itemOne, itemTwo) => {
      if (itemOne.liked === true) return -1;
      if (!itemTwo.liked) return 1;
    });
  } else if (likeInput === "notLiked") {
    filteredList.sort((itemOne, itemTwo) => {
      if (itemTwo.liked === true) return -1;
      if (!itemOne.liked) return 1;
    });
  }

  return (
    <>
    <div className="App"> 
      <Header />
      <h1>Total no of liked chars #{total}</h1>

      <Controls onSearchInput={onSearchInput} onLikeInput={onLikeInput} />

      <Simpsons
        simpsons={filteredList}
        deleteItem={deleteItem}
        toggleLike={toggleLike}
      />
      </div>
    </>
  );
};

export default App;
