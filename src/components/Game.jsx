import { Link } from "react-router-dom";

const Game = ({ game }) => {
  return (
    <div className="gameResult">
      <img src={game.background_image} />
      <p>{game.metacritic}</p>
      <Link to={"/game/" + game.slug}>
        <h1>{game.name}</h1>
      </Link>
      <p>{game.added}</p>
      <p>Released Date: {game.released}</p>
      <p>Genre: </p>
    </div>
  );
};

export default Game;
