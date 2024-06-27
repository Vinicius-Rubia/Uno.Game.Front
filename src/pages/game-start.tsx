import { CardBack } from "@/components/cards/card-back";
import { DisplayCard } from "@/components/display-card";
import { usePlay } from "@/hooks/use-play";
import React, { useState } from "react";

interface Rotation {
  [key: number]: number;
}

export const GameStart: React.FC = () => {
  const { deck, playedCards, noPlayableCards, playCard, buyCard } = usePlay();
  const [rotations, setRotations] = useState<Rotation>({});

  const getRotation = (index: number) => {
    if (rotations[index] === undefined) {
      const newRotation = Math.random() * 360;
      setRotations((prevRotations) => ({
        ...prevRotations,
        [index]: newRotation,
      }));
      return newRotation;
    }
    return rotations[index];
  };
  
  return (
    <div>
      <div className="flex items-center justify-center select-none absolute bottom-5 left-0 right-0 z-20">
        {deck.map((card , index) => (
          <button key={index} disabled={noPlayableCards.includes(card)} onClick={() => playCard(card)} className={`[&>div>div>svg]:!outline-none [&>div>div>svg]:hover:shadow-card-hover [&>div>div>svg]:hover:border-none ${noPlayableCards.includes(card) && "[&>div>div>svg]:hover:brightness-75 [&>div>div>svg]:focus:brightness-75 [&>div>div>svg]:cursor-not-allowed"}`}>
            <DisplayCard card={card} />
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center -space-x-4 select-none absolute top-5 left-0 right-0">
        <CardBack />
        <CardBack />
        <CardBack />
        <CardBack />
        <CardBack />
        <CardBack />
        <CardBack />
        <CardBack />
        <CardBack />
      </div>

      <div className="flex items-center justify-center gap-40 absolute inset-0 -ml-[240px]">
        <div className="-space-x-[70px] flex" onClick={() => buyCard()}>
          <CardBack />
          <CardBack />
          <CardBack />
        </div>
        <div className="flex items-center relative">
          {playedCards.map((card, index) => (
            <div key={index} className="[&>div>div]:!pointer-events-none absolute" style={{ rotate: `${getRotation(index)}deg` }}>
              <DisplayCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
