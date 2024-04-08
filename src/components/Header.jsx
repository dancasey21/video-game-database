import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <h1>RAWG</h1>
        </Link>

        <Link to={"/account"}>Sign Up / Login</Link>
      </div>
    </>
  );
};

export default Header;
