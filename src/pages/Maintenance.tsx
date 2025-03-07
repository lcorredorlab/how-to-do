import { useEffect, useState } from "react";
import UserBadge from "../components/userBadge";
import userIcon from "/icons/person.png";
import ideaIcon from "/icons/idea.png";
import Button from "../components/button";
import playIcon from "/icons/play.png";
import { useNavigate } from "react-router-dom";

const Maintenance = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleStartGameClick = () => {
    navigate("/questions");
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
        <p className="text-white text-2xl">
          4. Maintenance and constant evolutionary improvements
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 mb-10">
          <div className="border border-white rounded-lg p-4">
            <img
              src={userIcon}
              alt="user icon"
              className="h-30 w-30 text-white filter invert brightness-100"
            />
          </div>
          <div className="border border-white rounded-lg p-4 ">
            <img
              src={ideaIcon}
              alt="idea icon"
              className="h-30 w-30 text-white filter invert brightness-100"
            />
          </div>
        </div>

        <Button onClick={handleStartGameClick} variant="primary">
          I want to play a game
          <img
            src={playIcon}
            className="h-4 w-4 ilter invert brightness-100"
            alt="play icon button"
          />
        </Button>
      </div>
    </div>
  );
};

export default Maintenance;
