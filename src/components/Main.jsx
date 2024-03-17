import { useSelector } from "react-redux";
import { selectGameData, selectSearchTerm } from "../redux/gameSlice";
import GameInfo from "./GameInfo";
import Game from "./Game";
import Search from "./Search";
import { Routes, Route } from "react-router";

const Main = () => {
  const gameData = useSelector(selectGameData);
  const searchTerm = useSelector(selectSearchTerm);

  if (!gameData) {
    return <p>Loading....</p>;
  }

  let filteredData = [...gameData];
  if (searchTerm) {
    filteredData = filteredData.filter((game) => {
      return game.name.toLowerCase().includes(searchTerm);
    });
  }

  return (
    <>
      <Search />

      <div className="gameResults">
        {filteredData.map((game) => {
          return <Game key={game.id} game={game} />;
        })}
        ;
      </div>
    </>
  );
};

export default Main;
