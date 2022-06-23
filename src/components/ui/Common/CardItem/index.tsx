import { CardType } from "@components/ui/Desktop/CardListDesktop";
import React from "react";

interface CardItemProps {
  item: CardType;
  className?: String;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const CardItem: React.FC<CardItemProps> = ({ item, className, onClick }) => {
  return (
    <div onClick={onClick} className={`relative rounded-md ${className}`}>
      <img className="rounded-md" src={item.img} alt="card" />
      <div className="absolute bottom-8 left-8">
        <div className="bg-white px-4 py-1 rounded-full flex items-center justify-start">
          <span className="mt-1 text-[#391400]">{item.category.label}</span>
        </div>
        <div className="mt-4">
          <span className="text-white text-4xl uppercase font-bold">
            {item.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
