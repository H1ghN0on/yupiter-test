import React from "react";
import { ContentProps } from "./Content";
import CategoryMenuDesktop from "./Desktop/CategoryMenuDesktop";

const ContentDesktop: React.FC<ContentProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="px-[135px] bg-[#FDF0E9] flex flex-col items-center justify-center">
      <section className="w-full px-[15%] py-[70px]">
        <CategoryMenuDesktop
          items={categories}
          active={activeCategory}
          onChange={onCategoryChange}
        />
      </section>
    </div>
  );
};

export default ContentDesktop;
