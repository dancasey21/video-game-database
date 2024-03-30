import { setLoggedIn, setScreen } from "../../redux/accountSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>Dashboard</p>
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

export default Dashboard;
