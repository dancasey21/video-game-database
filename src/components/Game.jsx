import { Link } from "react-router-dom";

const Game = ({ game }) => {
  return (
    <div className="gameResult">
      <img src={game.background_image} />
      <div className="gameDetails">
        <div className="metacritic">
          <p>{game.metacritic}</p>
        </div>
        <Link to={"/game/" + game.slug}>
          <h1>{game.name}</h1>
        </Link>

        <p>Released Date: {game.released}</p>
        <p>
          Genre:
          {game.genres.map((item) => {
            return item.name;
          })}
        </p>
      </div>
    </div>
  );
};

export default Game;
