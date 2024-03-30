import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectMessage, setGameData, setMessage } from "./redux/gameSlice";
import Interface from "./components/Interface";
import "./css/App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);

  useEffect(() => {
    console.log(message);
    if (!message) return;
    toast(message);
    setTimeout(() => {
      dispatch(setMessage(""));
    }, 300);
  }, [message]);

  const getIntialGames = async () => {
    let allResults = [];
    for (let i = 1; i < 5; i++) {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?page=${i}&page_size=40&key=d50450bacf1c40d58c3986a58d69e95e`
      );
      console.log(data.results);
      allResults = [...allResults, ...data.results];
    }

    dispatch(setGameData(allResults));

    console.log(allResults);
  };

  useEffect(() => {
    getIntialGames();
  }, []);

  return (
    <>
      <ToastContainer />
      <Interface />
    </>
  );
};

export default App;
