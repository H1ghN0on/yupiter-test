import CardItem from "@components/ui/Common/CardItem";
import React from "react";
import { CardType } from ".";

interface CardItemDesktopProps {
  item: CardType;
  onClick: (item: CardType) => void;
  active: Boolean;
}

const CardItemDesktop: React.FC<CardItemDesktopProps> = ({
  active,
  item,
  onClick,
}) => {
  const activeStyle = active && "shadow-activeCard";

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(item);
  };

  return (
    <CardItem className={activeStyle} onClick={handleCardClick} item={item} />
  );
};

export default CardItemDesktop;
