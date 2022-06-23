import { CardType } from "@appTypes/CardTypes";
import CardItem from "@components/ui/Common/CardItem";
import React from "react";

interface CardItemDesktopProps {
  item: CardType;
  onClick: (item: CardType) => void;
  active: Boolean;
  onCategoryClick: (card: CardType) => void;
}

const CardItemDesktop: React.FC<CardItemDesktopProps> = ({
  active,
  item,
  onClick,
  onCategoryClick,
}) => {
  const activeStyle = active && "shadow-activeCard";

  return (
    <CardItem
      onCategoryClick={onCategoryClick}
      className={activeStyle}
      onClick={onClick}
      item={item}
    />
  );
};

export default CardItemDesktop;
