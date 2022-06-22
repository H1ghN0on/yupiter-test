import React from "react";
import { CategoryItemType } from "./CategoryMenuDesktop";

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
  const textStyle = active ? "text-[#16CD53]" : "text-[#391400] opacity-[.64]";

  const handleItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick(item);
  };

  return (
    <li onClick={handleItemClick}>
      <span className={textStyle}>{item.label}</span>
    </li>
  );
};

export default CategoryItemDesktop;
