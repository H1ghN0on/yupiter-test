import { CardType } from "@appTypes/CardTypes";
import React from "react";

interface CardItemProps {
  item: CardType;
  className?: String;
  onClick?: (card: CardType) => void;
  onCategoryClick: (card: CardType) => void;
}

const CardItem: React.FC<CardItemProps> = ({
  item,
  className,
  onClick,
  onCategoryClick,
}) => {
  const categoryRef = React.useRef(null);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === categoryRef.current) {
      onCategoryClick(item);
    } else {
      onClick && onClick(item);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`relative rounded-md ${className} cursor-pointer`}
    >
      <img className="w-full h-full rounded-md" src={item.img} alt="card" />
      <div className="absolute bottom-8 left-8">
        <div
          ref={categoryRef}
          className="inline-block bg-white pl-4 pr-5 py-1 rounded-full pt-2 text-[#391400]"
        >
          {item.category.label}
        </div>
        <div className="mt-4">
          <span className="text-white text-4xl">{item.name}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
