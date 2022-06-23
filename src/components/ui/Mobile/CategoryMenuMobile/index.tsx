import { CategoryItemType } from "@appTypes/CategoryTypes";
import React from "react";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import { CatergoryMenuProps } from "../../Desktop/CategoryMenuDesktop";

import CategoryItemMobile from "./CategoryItemMobile";

const CategoryMenuMobile: React.FC<CatergoryMenuProps> = ({
  items,
  active,
  onChange,
}) => {
  const textStyle = "text-textPrimary opacity-[.64]";
  const [isActive, setActive] = React.useState<Boolean>(false);
  return (
    <div className="relative">
      <div
        onClick={() => {
          setActive(!isActive);
        }}
        className="w-full border border-selectOrange bg-white rounded p-3 flex items-center"
      >
        <div>
          <span className={textStyle}>{active.label}</span>
        </div>
        <div className="ml-auto">
          {isActive ? (
            <CaretUpFill className="fill-selectArrowOrange" />
          ) : (
            <CaretDownFill className="fill-selectArrowOrange" />
          )}
        </div>
      </div>
      {isActive && (
        <ul className="absolute z-10 flex flex-col rounded w-full bg-white border border-selectOrange p-3 space-y-3">
          {items &&
            items.map((item: CategoryItemType) => (
              <CategoryItemMobile
                item={item}
                active={false}
                onClick={(item: CategoryItemType) => {
                  onChange(item);
                  setActive(false);
                }}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryMenuMobile;
