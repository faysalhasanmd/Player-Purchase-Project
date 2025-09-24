import React, { use } from "react";
import PlyaerCard from "../PlayerCard/PlyaerCard";

const AvailablePlayers = ({
  responseData,
  setAvaileableBalance,
  availeableBalance,
  puechacedPlayer,
  setPuechacedPlayer,
}) => {
  const playerData = use(responseData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {playerData.map((player) => (
        <PlyaerCard
          puechacedPlayer={puechacedPlayer}
          setPuechacedPlayer={setPuechacedPlayer}
          availeableBalance={availeableBalance}
          setAvaileableBalance={setAvaileableBalance}
          player={player}
        ></PlyaerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
