import { CardType } from "@components/ui/Desktop/CardListDesktop";
import { CategoryItemType } from "@components/ui/Desktop/CategoryMenuDesktop";
import React from "react";
import CardItemMobile from "./CardItemMobile";

interface CardListMobileProps {
  className: string;
  items: CardType[];
  onCategoryClick: (category: CategoryItemType) => void;
}

const CardListMobile: React.FC<CardListMobileProps> = ({
  items,
  className,
  onCategoryClick,
}) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <CardItemMobile
          onCategoryClick={onCategoryClick}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default CardListMobile;
