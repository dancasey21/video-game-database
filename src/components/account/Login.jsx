import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setLoggedIn, setScreen } from "../../redux/accountSlice";
import AccountForm from "./AccountForm";
import sha256 from "sha256";
import { setMessage } from "../../redux/gameSlice";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const hashedPassword = sha256(userInput.password + "gaming");

    if (user.password === hashedPassword) {
      dispatch(setMessage("Login Correct"));
      dispatch(setScreen(2));
      dispatch(setLoggedIn());
    } else {
      dispatch(setMessage("Password/Email Incorrect"));
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onInput={onInput} onSubmit={onSubmit}>
        <AccountForm />
      </form>
    </>
  );
};

export default Login;
