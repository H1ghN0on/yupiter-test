import { CategoryItemType } from "@appTypes/CategoryTypes";
import React from "react";

export interface CategoryItemProps {
  item: CategoryItemType;
  active: Boolean;
  onClick: (item: CategoryItemType) => void;
}

const CategoryItemDesktop: React.FC<CategoryItemProps> = ({
  item,
  active,
  onClick,
}) => {
  const textStyle = active
    ? "text-categoryActive"
    : "text-textPrimary opacity-[.64]";

  const handleItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick(item);
  };

  return (
    <li className="cursor-pointer" onClick={handleItemClick}>
      <span className={textStyle}>{item.label}</span>
    </li>
  );
};

export default CategoryItemDesktop;
