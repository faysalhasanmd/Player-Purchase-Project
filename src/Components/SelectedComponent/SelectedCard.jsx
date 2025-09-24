import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);

  const removeHandle = () => {
    removePlayer(player);
  };

  return (
    <div className="border-2 border-gray-200 rounded-2xl p-3 mt-3 gap-2">
      <div className="flex justify-between items-center ">
        <div className="flex gap-4 items-center">
          <img
            className="w-[60px] h-[65px] rounded-full"
            src={player.player_img}
            alt=""
          />
          <div>
            <h1 className="font-bold text-[18px]">{player.player_name}</h1>
            <h1 className="text-[14px] font-semibold text-gray-500">
              Right Hand Bat
            </h1>
          </div>
        </div>
        <div>
          <img
            onClick={removeHandle}
            src="https://i.ibb.co.com/cX3jyJcr/Vector-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
