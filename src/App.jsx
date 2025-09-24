import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/AvailablePlayers/SelectedPlayers/SelectedPlayers";
import Navbar from "./Components/NavBar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer/Footer";
import CopyRight from "./Components/CopyRight/CopyRight";

const fetchData = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const responseData = fetchData();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availeableBalance, setAvaileableBalance] = useState(6000000);
  const [puechacedPlayer, setPuechacedPlayer] = useState([]);

  const removePlayer = (removeItem) => {
    const removeData = puechacedPlayer.filter(
      (ply) => ply.player_name !== removeItem.player_name
    );
    setPuechacedPlayer(removeData);
    setAvaileableBalance(
      availeableBalance +
        parseInt(removeItem.price.split("$").join("").split(",").join(""))
    );
  };

  return (
    <>
      <Navbar availeableBalance={availeableBalance}></Navbar>
      <div className="w-[1200px] mx-auto flex justify-between">
        <h1 className="font-bold text-4xl">
          {toggle === true
            ? "Available Players"
            : `Selected Player (${puechacedPlayer.length}/6)`}
        </h1>
        <div className="flex">
          <button
            onClick={() => setToggle(true)}
            className={`font-semibold border-1 border-r-0 rounded-l-2xl py-2 px-3 border-green-300 ${
              toggle === true ? "bg-[#e7fe29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`font-semibold border-1 rounded-r-2xl border-l-0 py-2 px-3 border-green-300 ${
              toggle === false ? "bg-[#e7fe29]" : ""
            }`}
          >
            Selected <span>({puechacedPlayer.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-md"></span>}
        >
          <AvailablePlayers
            availeableBalance={availeableBalance}
            puechacedPlayer={puechacedPlayer}
            setPuechacedPlayer={setPuechacedPlayer}
            setAvaileableBalance={setAvaileableBalance}
            responseData={responseData}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          puechacedPlayer={puechacedPlayer}
        ></SelectedPlayers>
      )}
      <Footer></Footer>
      <CopyRight></CopyRight>
      <Toaster />
    </>
  );
}

export default App;
