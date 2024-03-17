import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setGameData } from "./redux/gameSlice";
import Interface from "./components/Interface";
import "./css/App.css";

const App = () => {
  const dispatch = useDispatch();

  const getIntialGames = async () => {
    const { data } = await axios.get(
      "https://api.rawg.io/api/games?page=1&page_size=40&key=d50450bacf1c40d58c3986a58d69e95e"
    );
    dispatch(setGameData(data.results));
    console.log(data);
  };

  useEffect(() => {
    getIntialGames();
  }, []);

  return <Interface />;
};

export default App;
