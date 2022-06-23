import { CardType } from "@appTypes/CardTypes";
import LoadMoreButton from "@components/ui/Common/LoadMoreButton";
import useCardList from "@components/ui/hooks/CardListHook";
import React from "react";
import CardItemDesktop from "./CardItemDesktop";

interface CardListProps {
  className: string;
  items: CardType[];
  onCardClick: (item: CardType) => void;
  active: CardType;
  onCategoryClick: (card: CardType) => void;
}

const CardListDesktop: React.FC<CardListProps> = ({
  items,
  className,
  onCardClick,
  onCategoryClick,
  active,
}) => {
  const { cards, onLoadMoreClick, activeNumber } = useCardList(items);
  return (
    <>
      <div
        className={
          `w-full grid grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-10  ` +
          className
        }
      >
        {cards.slice(0, activeNumber).map((item) => (
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
        {activeNumber !== cards.length && (
          <LoadMoreButton onClick={onLoadMoreClick} />
        )}
      </div>
    </>
  );
};

export default CardListDesktop;
