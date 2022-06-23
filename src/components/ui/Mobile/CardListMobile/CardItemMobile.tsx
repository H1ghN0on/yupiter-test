import { CardType } from "@appTypes/CardTypes";
import CardItem from "@components/ui/Common/CardItem";
import React from "react";

interface CardItemMobileProps {
  item: CardType;
  onCategoryClick: (card: CardType) => void;
}

const CardItemMobile: React.FC<CardItemMobileProps> = ({
  item,
  onCategoryClick,
}) => {
  return <CardItem onCategoryClick={onCategoryClick} item={item} />;
};

export default CardItemMobile;
