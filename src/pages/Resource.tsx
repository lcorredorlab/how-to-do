import { useState, useEffect } from "react";
import Tooltip from "../components/tooltip";
import UserBadge from "../components/userBadge";
import { useNavigate } from "react-router-dom";
import badIcon from "/icons/close.png";
import checkIcon from "/icons/verified.png";

const badResponses = [
  "You're a horrible person :(",
  "Are you sure about this answer?",
  "Come on... I expected more from you, you almost seem like a good person",
  "This is a no no no",
];

const Response = ({ icon, text, tooltipText, onClick }: { icon: string; text: string; tooltipText: string; onClick?: () => void }) => (
  <Tooltip text={tooltipText} position="top" witdh={"200"}>
    <div 
      onClick={onClick}
      className={`border rounded-lg p-4 border-white cursor-not-allowed transition ease-in-out hover:bg-gray-700 hover:border-lime-500 flex gap-2 ${onClick ? 'cursor-pointer' : ''}`}
    >
      <img
        src={icon}
        alt="response icon"
        className="h-6 w-6 filter invert brightness-100"
      />
      <p className="text-white">{text}</p>
    </div>
  </Tooltip>
);

const Resource = () => {
  const [loading, setLoading] = useState(true);
  const [randomBadText, setRandomBadText] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const availableBadResponses = [...badResponses];
    
    setRandomBadText(
      Array.from({ length: 3 }).map(() => {
        const randomIndex = Math.floor(Math.random() * availableBadResponses.length);
        const selectedResponse = availableBadResponses[randomIndex];
        availableBadResponses.splice(randomIndex, 1);
        return selectedResponse;
      })
    );

    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const handleOptionGridClick = () => {
    navigate("/marketing");
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
        <p className="text-white text-2xl">2. Set resources, team, and budget</p>

        <div className="grid grid-cols-2 gap-4 mt-20">
          <Response 
            icon={badIcon} 
            text="Only the money is important" 
            tooltipText={randomBadText[0]} 
          />

          <Response 
            icon={badIcon} 
            text="I just need one person who is both a programmer and a designer." 
            tooltipText={randomBadText[1]} 
          />

          <Response 
            icon={checkIcon} 
            text="Team, planification, time and technologies are important." 
            tooltipText="This is the key" 
            onClick={handleOptionGridClick} 
          />

          <Response 
            icon={badIcon} 
            text="I have a nephew who knows how to do all of that." 
            tooltipText={randomBadText[2]} 
          />
        </div>
      </div>
    </div>
  );
};

export default Resource;
