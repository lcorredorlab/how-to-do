import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import saw from "/icons/saw.png";

const GameOverBad = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    navigate("/questions");
  };

  return (
    <div
      className={`${
        loading ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000 ease-in-out h-screen w-full flex pt-[100px] px-[150px] flex-col`}
    >
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <img src={saw} alt="user icon" className="h-50 w-50 text-white" />
        <h1 className="text-white text-8xl">Game over!</h1>
        <p className="text-lime-700 text-2xl">
          It seems like you didn't survive, seriously, you answered wrong...
        </p>
        <p className="text-lime-700 text-2xl mb-10">
          I'll give you one more chance...
        </p>

        <Button onClick={handleStartClick} variant="primary">
          Back to Questions
        </Button>
      </div>
    </div>
  );
};

export default GameOverBad;
