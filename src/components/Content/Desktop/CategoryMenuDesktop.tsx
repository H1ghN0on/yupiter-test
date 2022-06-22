import React from "react";
import CategoryItemDesktop from "./CategoryItemDesktop";

export interface CategoryItemType {
  label: String;
  accessor: String;
}

export interface CatergoryMenuProps {
  active: CategoryItemType;
  items: CategoryItemType[];
  onChange: (item: CategoryItemType) => void;
}

const CategoryMenuDesktop: React.FC<CatergoryMenuProps> = ({
  items,
  active,
  onChange,
}) => {
  return (
    <ul className="flex items-center justify-between">
      {items &&
        items.map((item: CategoryItemType, index: number) => (
          <CategoryItemDesktop
            key={index}
            item={item}
            active={active.accessor === item.accessor}
            onClick={onChange}
          />
        ))}
    </ul>
  );
};

export default CategoryMenuDesktop;
