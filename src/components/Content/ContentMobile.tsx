import React from "react";
import { Container } from "react-bootstrap";
import { ContentProps } from "./Content";
import CategoryMenuMobile from "../ui/Mobile/CategoryMenuMobile";
import CardListMobile from "@components/ui/Mobile/CardListMobile";

const ContentMobile: React.FC<ContentProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  cards,
}) => {
  return (
    <div className="bg-[#FDF0E9] flex flex-col items-center justify-center">
      <Container fluid>
        <section className="w-full px-[10%] py-[70px]">
          <CategoryMenuMobile
            items={categories}
            active={activeCategory}
            onChange={onCategoryChange}
          />
        </section>
        <CardListMobile
          className="w-full grid grid-cols-1 gap-y-10 pb-12 justify-items-center"
          items={cards}
        />
      </Container>
    </div>
  );
};

export default ContentMobile;
