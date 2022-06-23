import CardItem from "@components/ui/Common/CardItem";
import { CardType } from "@components/ui/Desktop/CardListDesktop";
import { CategoryItemType } from "@components/ui/Desktop/CategoryMenuDesktop";
import React from "react";

interface CardItemMobileProps {
  item: CardType;
  onCategoryClick: (category: CategoryItemType) => void;
}

const CardItemMobile: React.FC<CardItemMobileProps> = ({
  item,
  onCategoryClick,
}) => {
  return <CardItem onCategoryClick={onCategoryClick} item={item} />;
};

export default CardItemMobile;
