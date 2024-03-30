import { useDispatch, useSelector } from "react-redux";
import SignUp from "./SignUp";
import {
  selectLoggedIn,
  selectScreen,
  setScreen,
} from "../../redux/accountSlice";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Index = () => {
  const screen = useSelector(selectScreen);
  const loggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {!loggedIn && (
          <>
            <button
              onClick={() => {
                dispatch(setScreen(0));
              }}
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                dispatch(setScreen(1));
              }}
            >
              Login
            </button>
          </>
        )}
      </div>
      {screen === 0 && <SignUp />}
      {screen === 1 && <Login />}
      {screen === 2 && <Dashboard />}
    </>
  );
};

export default Index;
