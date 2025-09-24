import React, { useState } from "react";
import playerCertonImg from "../../assets/Group.png";
import countryFlag from "../../assets/Vector.png";
import toast from "react-hot-toast";

const PlyaerCard = ({
  player,
  setAvaileableBalance,
  availeableBalance,
  puechacedPlayer,
  setPuechacedPlayer,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const allPlayerPrice = (plyerData) => {
    const playerPrice = parseInt(
      plyerData.price.split("$").join("").split(",").join("")
    );
    if (availeableBalance < playerPrice) {
      toast.error("Your Coun is not Available..!!");
      return;
    }
    if (puechacedPlayer.length === 6) {
      toast.error("you already selected 6 player");
      return;
    }
    setIsSelected(true), setAvaileableBalance(availeableBalance - playerPrice);
    setPuechacedPlayer([...puechacedPlayer, player]);
    toast.success("Player Purchased");
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4 mt-2.5  ">
      <figure>
        <img
          className="w-[full] h-[350px] object-cover rounded-2xl"
          src={player.player_img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-4">
          <span>
            <img src={playerCertonImg} alt="" />
          </span>
          <h2 className="card-title">{player.player_name}</h2>
        </div>

        <div className="flex justify-between border-b-2 pb-2 border-b-gray-200">
          <div className="flex gap-2.5 mb-3 items-center">
            <img src={countryFlag} alt="" />
            <h3>{player.player_country}</h3>
          </div>
          <button className="btn">{player.player_role}</button>
        </div>

        <div className="flex justify-between">
          <p className="font-bold">Rating</p>
          <span className="font-semibold">{player.rating}</span>
        </div>
        <div className="flex justify-between card-actions mt-2">
          <h3 className="font-bold">{player.batting_style}</h3>
          <h3>{player.bowling_style}</h3>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">{player.price}</span>
          <button
            disabled={isSelected}
            onClick={() => allPlayerPrice(player)}
            className="btn"
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlyaerCard;
