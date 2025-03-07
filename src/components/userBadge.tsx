import { useEffect, useState } from "react";
import personIcon from "/icons/person.png";
import heartColorIcon from "/icons/love-always-wins.png";
import heartIcon from "/icons/heart.png";

interface UserBadgeProps {
  playerHearts: number;
}

const UserBadge = ({ playerHearts }: UserBadgeProps) => {
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    if (storedName) setPlayerName(storedName);
  }, []);

  if (!playerName) return null;

  return (
    <div className="text-white flex gap-3 bg-gray-700 items-center w-fit rounded-full px-4 py-2 border-2 border-lime-500">
      <img src={personIcon} className="h-4 w-4 filter invert brightness-100" alt="player icon" />
      <p className="text-sm font-bold">{playerName}</p>

      {Array.from({ length: playerHearts }).map((_, index) => (
        <img key={index} src={heartColorIcon} className="h-4 w-4" alt="heart full" />
      ))}
      {Array.from({ length: 3 - playerHearts }).map((_, index) => (
        <img key={index} src={heartIcon} className="h-4 w-4 filter invert brightness-100" alt="heart empty" />
      ))}
    </div>
  );
};

export default UserBadge;
