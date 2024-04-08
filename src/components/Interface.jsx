import Header from "./Header";
import Main from "./Main";
import GameInfo from "./GameInfo";
import { Routes, Route } from "react-router";
import Index from "./account";


const Interface = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/game/:slug" element={<GameInfo />} />
          <Route path="/" element={<Main />} />
          <Route path="/account" element={<Index />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default Interface;
