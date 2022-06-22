import React from "react";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import {
  CategoryItemType,
  CatergoryMenuProps,
} from "../Desktop/CategoryMenuDesktop";
import CategoryItemMobile from "./CategoryItemMobile";

const CategoryMenuMobile: React.FC<CatergoryMenuProps> = ({
  items,
  active,
  onChange,
}) => {
  const textStyle = "text-[#391400] opacity-[.64]";

  const [isActive, setActive] = React.useState<Boolean>(false);
  return (
    <>
      <div
        onClick={() => {
          setActive(!isActive);
        }}
        className="w-full border border-[#F3D1BF] bg-white rounded p-3 flex items-center"
      >
        <div>
          <span className={textStyle}>{active.label}</span>
        </div>
        <div className="ml-auto">
          {isActive ? (
            <CaretUpFill fill="#EF6D58" />
          ) : (
            <CaretDownFill fill="#EF6D58" />
          )}
        </div>
      </div>
      {isActive && (
        <ul className="flex flex-col rounded w-full bg-white  border border-[#F3D1BF] p-3 space-y-3">
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
    </>
  );
};

export default CategoryMenuMobile;
