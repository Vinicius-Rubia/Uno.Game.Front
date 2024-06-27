import { Card0 } from "@/components/cards/card-0";
import { Card1 } from "@/components/cards/card-1";
import { Card2 } from "@/components/cards/card-2";
import { Card3 } from "@/components/cards/card-3";
import { Card4 } from "@/components/cards/card-4";
import { Card5 } from "@/components/cards/card-5";
import { Card6 } from "@/components/cards/card-6";
import { Card7 } from "@/components/cards/card-7";
import { Card8 } from "@/components/cards/card-8";
import { Card9 } from "@/components/cards/card-9";
import { GetCard } from "@/interfaces/card";
import { ColorCardType } from "@/types/card";

export function displayCard(cardNumber: number, color: ColorCardType) {
  switch (cardNumber) {
    case 1:
      return {
        Card: Card1,
        color,
      };
    case 2:
      return {
        Card: Card2,
        color,
      };
    case 3:
      return {
        Card: Card3,
        color,
      };
    case 4:
      return {
        Card: Card4,
        color,
      };
    case 5:
      return {
        Card: Card5,
        color,
      };
    case 6:
      return {
        Card: Card6,
        color,
      };
    case 7:
      return {
        Card: Card7,
        color,
      };
    case 8:
      return {
        Card: Card8,
        color,
      };
    case 9:
      return {
        Card: Card9,
        color,
      };
    default:
      return {
        Card: Card0,
        color,
      };
  }
}

export function getCards(numCards: number) {
  const colors: ColorCardType[] = ["blue", "green", "yellow", "red"];
  const cards: GetCard[] = [];

  for (let i = 0; i < numCards; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const card: GetCard = {
      numberCard: randomNumber,
      color: colors[randomColorIndex],
    };
    cards.push(card);
  }

  return cards;
}
