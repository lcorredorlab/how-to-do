import { useState, useEffect } from "react";
import Tooltip from "../components/tooltip";
import ideaIcon from "/icons/idea.png";
import UserBadge from "../components/userBadge";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const [loading, setLoading] = useState(true);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);

    setHighlightedIndex(Math.floor(Math.random() * 10));
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    navigate("/resource");
  };

  return (
    <div
      className={`${
        loading ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000 ease-in-out h-screen w-full flex pt-[200px] px-[150px] flex-col`}
    >
      <UserBadge playerHearts={3} />
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h1 className="text-white text-3xl">
          So... what are we going to learn to do?
        </h1>
        <p className="text-white text-2xl">1. The idea</p>

        <div className="flex gap-4 mt-20">
          {Array.from({ length: 10 }).map((_, index) => (
            <Tooltip
              key={index}
              text={
                index === highlightedIndex
                  ? "WOOO there's something interesting here!"
                  : "This idea is repeated or not relevant"
              }
              position="top"
              witdh={"300"}
            >
              <img
                src={ideaIcon}
                className={` ${
                  index === highlightedIndex ? "border animate-pulse hover:animate-bounce rounded-full cursor-pointer h-9 w-9 border-amber-400 bg-amber-200 p-1" : "h-7 w-7 cursor-not-allowed filter invert brightness-100"
                }`}
                alt="idea icon"
                onClick={index === highlightedIndex ? handleImageClick : undefined}
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
