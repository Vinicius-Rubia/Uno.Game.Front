import { GetCard } from "@/interfaces/card";
import { getCards } from "@/utils/cardUtils";
import { useState } from "react";

export const usePlay = () => {
  const defaultDeck = getCards(7);
  const [playedCards, setPlayedCards] = useState<GetCard[]>(getCards(1));
  const [deck, setDeck] = useState<GetCard[]>(defaultDeck);
  const [noPlayableCards, setNoPlayableCards] = useState<GetCard[]>(deck.filter((c) => c.color !== playedCards[playedCards.length -1].color && c.numberCard !== playedCards[playedCards.length -1].numberCard));

  const playCard = (card: GetCard) => {
    if (card.color === playedCards[playedCards.length -1].color || (card.numberCard === playedCards[playedCards.length -1].numberCard)) {
      setPlayedCards((prev) => [...prev, card]);
      setDeck((prev) => prev.filter((c) => c !== card));
      const noPlayableCardsFiltered = deck.filter((c) => c.color !== card.color && c.numberCard !== card.numberCard); 
      setNoPlayableCards(noPlayableCardsFiltered);
    }
  };

  const buyCard = (quantity = 1) => {
    const newDeck = [...deck, ...getCards(quantity)];
    setDeck(newDeck);
    const noPlayableCardsFiltered = newDeck.filter((c) => c.color !== playedCards[playedCards.length -1].color && c.numberCard !== playedCards[playedCards.length -1].numberCard);
    setNoPlayableCards(noPlayableCardsFiltered);
  };

  return { playedCards, playCard, deck, buyCard, noPlayableCards };
};
