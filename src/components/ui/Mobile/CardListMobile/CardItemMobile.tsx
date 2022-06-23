import CardItem from "@components/ui/Common/CardItem";
import { CardType } from "@components/ui/Desktop/CardListDesktop";
import React from "react";

interface CardItemMobileProps {
  item: CardType;
}

const CardItemMobile: React.FC<CardItemMobileProps> = ({ item }) => {
  return <CardItem item={item} />;
};

export default CardItemMobile;
