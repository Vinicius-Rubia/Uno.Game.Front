import { Button } from "@/components/ui/button";
import { Check, Triangle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageForcePlay from "../assets/images/force-play.png";
import ImageJumpIn from "../assets/images/jump-in.png";
import ImageChangeDeck from "../assets/images/mode-change-deck.png";
import UnoLogo from "../assets/images/uno.svg";

type Mode = "mode-1" | "mode-2" | "mode-3";

interface ModesProps {
  mode: Mode;
  image: string;
  name: string;
  description: string;
}

interface ModeButtonProps {
  mode: Mode;
  isActive: boolean;
  onClick: () => void;
  imageSrc: string;
  description: string;
  setModeDescription: (description: string) => void;
  modeDescription: string;
}

const Modes: ModesProps[] = [
  {
    mode: "mode-1",
    name: "Jogada rápida",
    image: ImageJumpIn,
    description:
      "Jogue uma carta fora da vez se a última carta for idêntica à que você tem.",
  },
  {
    mode: "mode-2",
    name: "Jogada certa",
    image: ImageForcePlay,
    description:
      "Se você comprar uma carta no seu turno e ela for jogável, ela será jogada automaticamente.",
  },
  {
    mode: "mode-3",
    name: "Troca de Mãos",
    image: ImageChangeDeck,
    description: "Jogue um 7 para trocar mãos, jogue um 0 para passar as mãos.",
  },
];

const ScoreLimitData = ["1 rodada", "5", "10"];
const descriptionScoreLimit = "O limite de pontuação padrão pode ser reduzido. Também pode ser definido para apenas uma rodada.";

export const GameMode: React.FC = () => {
  const [modes, setModes] = useState<Mode[]>([]);
  const [scoreLimit, setScoreLimit] = useState(ScoreLimitData[0]);
  const [modeDescription, setModeDescription] = useState(descriptionScoreLimit);

  const handleSetMode = (mode: Mode) => {
    setModes((prevModes) =>
      prevModes.includes(mode)
        ? prevModes.filter((m) => m !== mode)
        : [...prevModes, mode]
    );
  };

  const handleNext = () => {
    setScoreLimit((prev) => {
      const currentIndex = ScoreLimitData.indexOf(prev);
      const nextIndex = (currentIndex + 1) % ScoreLimitData.length; // Loop back to start
      return ScoreLimitData[nextIndex];
    });
  };

  const handlePrevious = () => {
    setScoreLimit((prev) => {
      const currentIndex = ScoreLimitData.indexOf(prev);
      const prevIndex =
        (currentIndex - 1 + ScoreLimitData.length) % ScoreLimitData.length; // Loop to end
      return ScoreLimitData[prevIndex];
    });
  };

  useEffect(() => {

  }, [modeDescription]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-start pt-5 pl-5">
        <img src={UnoLogo} alt="Uno" className="max-w-[150px]" />

        <h3 className="text-2xl font-semibold bg-white/15 px-3 pb-1 ml-4 tracking-tighter rounded-md">
          Configuração da partida
        </h3>
      </div>

      <div>
        <div
          className={`flex items-center justify-between max-w-[700px] mx-auto px-6 py-3 rounded-md hover:shadow-card-hover hover:bg-[#FDF284] transition-all ${modeDescription === descriptionScoreLimit ? "shadow-card-hover bg-[#FDF284]" : "bg-white/30"}`}
          onMouseEnter={() => setModeDescription(descriptionScoreLimit)}
        >
          <h2 className="font-bold text-2xl text-black">Limite de pontuação</h2>

          <div className="flex items-center justify-between w-[200px]">
            <Button variant="ghost" size="icon" onClick={handlePrevious}>
              <Triangle className="fill-green-500 stroke-black -rotate-90 hover:fill-green-300 cursor-pointer" />
            </Button>
            <span className="font-bold text-2xl text-black">{scoreLimit}</span>
            <Button variant="ghost" size="icon" onClick={handleNext}>
              <Triangle className="fill-green-500 stroke-black rotate-90 hover:fill-green-300 cursor-pointer" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 gap-10">
        {Modes.map((item) => (
          <div key={item.mode}>
            <ModeButton
              mode={item.mode}
              isActive={modes.includes(item.mode)}
              onClick={() => handleSetMode(item.mode)}
              description={item.description}
              imageSrc={item.image}
              setModeDescription={setModeDescription}
              modeDescription={modeDescription}
            />
            <h4 className="text-center font-semibold mt-2">{item.name}</h4>
          </div>
        ))}
      </div>

      {modeDescription && (
        <div className="bg-gradient-to-r from-black/0 via-black/30 to-black/0 text-center w-[700px] m-auto py-16 flex justify-center items-center mt-20">
          {modeDescription}
        </div>
      )}

      <div className="flex items-end justify-center flex-1 mb-10 gap-10">
        <Button className="w-[150px]" asChild>
          <Link to="/game-start">Entrar no Lobby</Link>
        </Button>
        <Button className="w-[150px]" asChild>
          <Link to="/game-mode">Padrão</Link>
        </Button>
      </div>
    </div>
  );
};

const ModeButton = ({
  mode,
  isActive,
  onClick,
  imageSrc,
  description,
  setModeDescription,
  modeDescription,
}: ModeButtonProps) => (
  <div
    className={`relative w-[100px] h-[100px]  rounded-md flex items-center justify-center hover:shadow-card-hover hover:bg-[#FDF284] transition-all cursor-pointer ${modeDescription === description ? "shadow-card-hover bg-[#FDF284]" : "bg-white/30"}`}
    onClick={onClick}
    onMouseEnter={() => setModeDescription(description)}
  >
    <img src={imageSrc} alt={`Mode ${mode}`} className="size-[70px]" />
    {isActive && (
      <Check className="absolute -bottom-3 -right-4 text-green-500 w-10 h-10 stroke-[4]" />
    )}
  </div>
);
