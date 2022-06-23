import { CardType } from "@components/ui/Desktop/CardListDesktop";
import React from "react";
import CardItemMobile from "./CardItemMobile";

interface CardListMobileProps {
  className: string;
  items: CardType[];
}

const CardListMobile: React.FC<CardListMobileProps> = ({
  items,
  className,
}) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <CardItemMobile item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardListMobile;
