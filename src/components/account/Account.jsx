import { setLoggedIn, setScreen } from "../../redux/accountSlice";
import { useDispatch } from "react-redux";

const Account = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Account</p>
      <button
        onClick={() => {
          dispatch(setLoggedIn());
          dispatch(setScreen(1));
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Account;
