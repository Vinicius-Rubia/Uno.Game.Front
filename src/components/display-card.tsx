import { GetCard } from "@/interfaces/card";
import { displayCard } from "@/utils/cardUtils";
import React from "react";

interface DisplayCardProps {
  card: GetCard;
}

export const DisplayCard: React.FC<DisplayCardProps> = ({ card }) => {
  const { Card, color } = displayCard(card.numberCard, card.color);

  return (
    <div>
      <Card color={color} />
    </div>
  );
};
