import LoadMoreButton from "@components/Content/Common/LoadMoreButton";
import React from "react";
import { CategoryItemType } from "../CategoryMenuDesktop";
import CardItemDesktop from "./CardItemDesktop";

export interface CardType {
  category: CategoryItemType;
  name: string;
  img: string;
  id: number;
}

interface CardListProps {
  className: string;
  items: CardType[];
  onCardClick: (item: CardType) => void;
  active: CardType;
  onCategoryClick: (category: CategoryItemType) => void;
}

const CardListDesktop: React.FC<CardListProps> = ({
  items,
  className,
  onCardClick,
  onCategoryClick,
  active,
}) => {
  const MAXIMUM_NUMBER_OF_CARDS = 9;
  const getCurrentActiveNumber = React.useCallback((): number => {
    return items.length < MAXIMUM_NUMBER_OF_CARDS
      ? items.length
      : MAXIMUM_NUMBER_OF_CARDS;
  }, [items.length]);

  const [activeNumber, setActiveNumber] = React.useState<number>(
    getCurrentActiveNumber()
  );

  React.useEffect(() => {
    setActiveNumber(getCurrentActiveNumber());
  }, [items, getCurrentActiveNumber]);

  const onLoadMoreClick = () => {
    setActiveNumber(activeNumber + MAXIMUM_NUMBER_OF_CARDS);
  };

  return (
    <>
      <div className={className}>
        {items.slice(0, activeNumber).map((item) => (
          <CardItemDesktop
            onCategoryClick={onCategoryClick}
            active={active.id === item.id}
            item={item}
            onClick={onCardClick}
            key={item.id}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {activeNumber !== items.length && (
          <LoadMoreButton onClick={onLoadMoreClick} />
        )}
      </div>
    </>
  );
};

export default CardListDesktop;
