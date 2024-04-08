import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectSingleGame } from "../redux/gameSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const GameInfo = () => {
  const [gameDetails, setGameDetails] = useState();
  const { slug } = useParams();
  const game = useSelector(selectSingleGame(slug));

  useEffect(() => {
    getMoreData();
  }, []);

  const getMoreData = async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${slug}?key=d50450bacf1c40d58c3986a58d69e95e`
    );
    setGameDetails(data);
  };
  return (
    <div className="gameInfo">
      <div>
        <Link to={"/"}>
          <span>HOME</span>
        </Link>
        <span> / {game.slug.toUpperCase()}</span>
      </div>
      <div>
        <span>{game.released}</span>

        <span> AVERAGE PLAYTIME: {game.playtime} HOURS</span>
      </div>
      <div className="gameTitle">
        <h1>{game.name}</h1>
      </div>

      <div className="scroll-container">
        {game.short_screenshots.map((item) => {
          return <img key={item.id} src={item.image} alt={game.slug} />;
        })}
      </div>

      <div className="aboutGame">
        <h3>About</h3>
        <p>{gameDetails && gameDetails.description}</p>
      </div>
      <div>
        <div>
          <h3>Metascore</h3>
          <p>{game.metacritic}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>
            {game.genres.map((item) => {
              return item.name;
            })}
          </p>
        </div>
        <div>
          <h3>Tags</h3>
          <p>
            {game.tags.map((item) => {
              return item.name;
            })}
          </p>
        </div>
        <div>
          <h3>Website</h3>
          <a href={gameDetails.website}>{gameDetails.website}</a>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
