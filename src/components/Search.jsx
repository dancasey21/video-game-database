import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/gameSlice";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="search-wrapper">
        <form>
          <label htmlFor="search"></label>
          <input
            className="search-box"
            type="text"
            name="search"
            id="search"
            placeholder="Search Game"
            onInput={(e) => {
              dispatch(setSearchTerm(e.target.value));
            }}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
