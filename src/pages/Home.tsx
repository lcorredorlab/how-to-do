import { useState, useEffect } from "react";
import Button from "../components/button";
import RetroLoading from "../components/loading";
import Tooltip from "../components/tooltip";
import infoIcon from "/icons/info.png";
import playIcon from "/icons/play.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    navigate("/user");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      {loading && <RetroLoading />}
      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000 ease-in-out w-full flex gap-2 justify-center items-center mb-5`}
      >
        <Tooltip
          text="Luis, I'm not supposed to help you like this, so say something about what we do here :)"
          position="top"
          witdh="300"
        >
          <img
            src={infoIcon}
            className="filter invert brightness-100 h-6 w-6"
            alt="icon how to doit"
          />
        </Tooltip>

        <p className="text-white text-2xl">
          Welcome to the adventure of how to do...
        </p>
      </div>

      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000 ease-in-out w-full justify-center items-center flex`}
      >
        <Button onClick={handleStartClick} variant="primary">
          Press Start
          <img src={playIcon} className="h-4 w-4 ilter invert brightness-100" alt="play icon button" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
