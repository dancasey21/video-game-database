import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <h1>RAWG</h1>
        </Link>
        <Search />
        <Link to={"/account"}>Account</Link>
      </div>
    </>
  );
};

export default Header;
