import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser, setScreen } from "../../redux/accountSlice";
import AccountForm from "./AccountForm";
import axios from "axios";

const SignUp = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(setNewUser(userInput));
    const { data } = await axios.post("http://localhost:6001/user", userInput);

    dispatch(setScreen(1));
  };

  console.log(userInput);
  return (
    <>
      <h2>Sign Up</h2>
      <form onInput={onInput} onSubmit={onSubmit}>
        <AccountForm name="SignUp" />
      </form>
    </>
  );
};

export default SignUp;
