import { CardType } from "@appTypes/CardTypes";
import React from "react";

const useCardList = (cards: CardType[]) => {
  const MAXIMUM_NUMBER_OF_CARDS = 9;
  const getCurrentActiveNumber = React.useCallback((): number => {
    return cards.length < MAXIMUM_NUMBER_OF_CARDS
      ? cards.length
      : MAXIMUM_NUMBER_OF_CARDS;
  }, [cards.length]);

  const [activeNumber, setActiveNumber] = React.useState<number>(
    getCurrentActiveNumber()
  );

  React.useEffect(() => {
    setActiveNumber(getCurrentActiveNumber());
  }, [cards, getCurrentActiveNumber]);

  React.useEffect(() => {
    if (activeNumber > cards.length) {
      setActiveNumber(cards.length);
    }
  }, [activeNumber, cards]);

  const onLoadMoreClick = () => {
    setActiveNumber(activeNumber + MAXIMUM_NUMBER_OF_CARDS);
  };

  return {
    cards,
    onLoadMoreClick,
    activeNumber,
  };
};

export default useCardList;
