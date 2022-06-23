import React from "react";
import { Container } from "react-bootstrap";
import { ContentProps } from ".";
import CategoryMenuMobile from "@ui/Mobile/CategoryMenuMobile";
import CardListMobile from "@ui/Mobile/CardListMobile";

const ContentMobile: React.FC<
  Omit<ContentProps, "activeCard" | "onCardClick" | "onCardDelete">
> = ({
  categories,
  activeCategory,
  onNavCategoryChange,
  onCardCategoryChange,
  cards,
}) => {
  return (
    <div className="bg-content flex flex-col items-center justify-center pt-mContentTop pb-mContentBottom">
      <Container fluid>
        <section className="w-full px-mCategoriesX pb-mCategoriesBottom">
          <CategoryMenuMobile
            items={categories}
            active={activeCategory}
            onChange={onNavCategoryChange}
          />
        </section>
        <CardListMobile
          onCategoryClick={onCardCategoryChange}
          className="pb-mCardListBottom justify-items-center"
          items={cards}
        />
      </Container>
    </div>
  );
};

export default ContentMobile;
