import { useEffect, useState } from "react";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const GameOver = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    localStorage.removeItem("playerName");
    localStorage.removeItem("playerHearts");
    navigate("/home");
  };

  return (
    <div
      className={`${
        loading ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000 ease-in-out h-screen w-full flex pt-[200px] px-[150px] flex-col`}
    >
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h1 className="text-white text-8xl">Game over!</h1>
        <p className="text-lime-700 text-2xl mb-10">
          It looks like you've learned how to build software and survived.
        </p>

        <Button onClick={handleStartClick} variant="primary">
          Back to the start
        </Button>
      </div>
    </div>
  );
};

export default GameOver;
