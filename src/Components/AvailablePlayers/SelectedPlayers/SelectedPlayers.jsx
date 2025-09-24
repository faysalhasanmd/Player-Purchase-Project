import React from "react";
import SelectedCard from "../../SelectedComponent/SelectedCard";

const SelectedPlayers = ({ puechacedPlayer, removePlayer }) => {
  console.log(puechacedPlayer);
  return (
    <div className="w-[1200px] mx-auto">
      {puechacedPlayer.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
