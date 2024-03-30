import { useSelector } from "react-redux";
import { selectGameData, selectSearchTerm } from "../redux/gameSlice";

import Game from "./Game";
import Search from "./Search";
import Header from "./Header";

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
