import { CardType } from "@appTypes/CardTypes";
import LoadMoreButton from "@components/ui/Common/LoadMoreButton";
import useCardList from "@components/ui/hooks/CardListHook";
import React from "react";
import CardItemMobile from "./CardItemMobile";

interface CardListMobileProps {
  className: string;
  items: CardType[];
  onCategoryClick: (card: CardType) => void;
}

const CardListMobile: React.FC<CardListMobileProps> = ({
  items,
  className,
  onCategoryClick,
}) => {
  const { cards, onLoadMoreClick, activeNumber } = useCardList(items);

  return (
    <>
      <div className={`w-full grid grid-cols-1 gap-y-10 ` + className}>
        {cards.slice(0, activeNumber).map((item) => (
          <CardItemMobile
            onCategoryClick={onCategoryClick}
            item={item}
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

export default CardListMobile;
