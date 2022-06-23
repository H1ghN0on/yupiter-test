import React from "react";
import { CategoryItemType } from "../CategoryMenuDesktop";
import CardItemDesktop from "./CardItemDesktop";

export interface CardType {
  category: CategoryItemType;
  name: string;
  img: string;
  id: number;
}

interface CardListProps {
  className: string;
  items: CardType[];
  onCardClick: (item: CardType) => void;
  active: CardType;
}

const CardListDesktop: React.FC<CardListProps> = ({
  items,
  className,
  onCardClick,
  active,
}) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <CardItemDesktop
          active={active.id === item.id}
          item={item}
          onClick={onCardClick}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default CardListDesktop;
