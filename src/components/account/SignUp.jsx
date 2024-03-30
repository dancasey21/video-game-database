import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUser, setScreen } from "../../redux/accountSlice";
import AccountForm from "./AccountForm";

const SignUp = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setNewUser(userInput));
    dispatch(setScreen(1));
  };

  console.log(userInput);
  return (
    <>
      <h2>Sign Up</h2>
      <form onInput={onInput} onSubmit={onSubmit}>
        <AccountForm />
      </form>
    </>
  );
};

export default SignUp;
