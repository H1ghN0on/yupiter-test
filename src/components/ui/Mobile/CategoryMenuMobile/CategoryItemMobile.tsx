import React from "react";
import { CategoryItemProps } from "../../Desktop/CategoryMenuDesktop/CategoryItemDesktop";

const CategoryItemMobile: React.FC<CategoryItemProps> = ({
  item,
  active,
  onClick,
}) => {
  const textStyle = "text-[#391400] opacity-[.64]";

  const handleItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick(item);
  };

  return (
    <li onClick={handleItemClick}>
      <span className={textStyle}>{item.label}</span>
    </li>
  );
};

export default CategoryItemMobile;
