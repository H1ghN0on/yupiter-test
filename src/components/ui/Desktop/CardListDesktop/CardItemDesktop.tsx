import CardItem from "@components/ui/Common/CardItem";
import React from "react";
import { CardType } from ".";
import { CategoryItemType } from "../CategoryMenuDesktop";

interface CardItemDesktopProps {
  item: CardType;
  onClick: (item: CardType) => void;
  active: Boolean;
  onCategoryClick: (category: CategoryItemType) => void;
}

const CardItemDesktop: React.FC<CardItemDesktopProps> = ({
  active,
  item,
  onClick,
  onCategoryClick,
}) => {
  const activeStyle = active && "shadow-activeCard";

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(item);
  };

  return (
    <CardItem
      onCategoryClick={onCategoryClick}
      className={activeStyle}
      onClick={handleCardClick}
      item={item}
    />
  );
};

export default CardItemDesktop;
