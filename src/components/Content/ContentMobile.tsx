import React from "react";
import { ContentProps } from "./Content";
import CategoryMenuMobile from "./Mobile/CategoryMenuMobile";

const ContentMobile: React.FC<ContentProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-[#FDF0E9] flex flex-col items-center justify-center">
      <section className="w-full px-[10%] py-[70px]">
        <CategoryMenuMobile
          items={categories}
          active={activeCategory}
          onChange={onCategoryChange}
        />
      </section>
    </div>
  );
};

export default ContentMobile;
