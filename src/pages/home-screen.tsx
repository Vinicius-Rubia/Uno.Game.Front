import { CardBack } from "@/components/cards/card-back";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import UnoLogo from "../assets/images/uno.svg";

export const HomeScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full gap-40 relative">
      <img
        src={UnoLogo}
        alt="Uno"
        className="max-w-[150px] absolute top-5 left-5"
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center [&>svg]:cursor-pointer">
          {Array.from({ length: 7 }).map((_, index) => (
            <CardBack
              key={index}
              className="hover:shadow-card-hover bg-white w-[121px] h-[200px] rounded-2xl -mx-4 group-hover:mx-2 group-hover:scale-[1.07] group-hover:-translate-y-4 transition-all"
            />
          ))}
        </div>
        <Button className="w-[150px] mx-auto" asChild>
          <Link to="/game-mode">Começar</Link>
        </Button>
      </div>
    </div>
  );
};
