import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSingleGame } from "../redux/gameSlice";

const GameInfo = () => {
  const { slug } = useParams();
  const game = useSelector(selectSingleGame(slug));

  return (
    <div className="gameInfo">
      <img src={game.background_image} />
      <p>{game.metacritic}</p>
      <h1>{game.name}</h1>
      <p>{game.added}</p>
      <p>Released Date: {game.released}</p>
      <p>Genre: </p>
    </div>
  );
};

export default GameInfo;
