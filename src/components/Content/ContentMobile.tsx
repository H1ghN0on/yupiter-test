import React from "react";
import { Container } from "react-bootstrap";
import { ContentProps } from "./Content";
import CategoryMenuMobile from "../ui/Mobile/CategoryMenuMobile";
import CardListMobile from "@components/ui/Mobile/CardListMobile";
import LoadMoreButton from "./Common/LoadMoreButton";

const ContentMobile: React.FC<
  Omit<ContentProps, "activeCard" | "onCardClick">
> = ({
  categories,
  activeCategory,
  onCategoryChange,
  cards,
  onLoadMoreClick,
}) => {
  return (
    <div className="bg-content flex flex-col items-center justify-center pt-mContentBottom pb-mContentBottom">
      <Container fluid>
        <section className="w-full px-mCategoriesX pb-mCategoriesBottom">
          <CategoryMenuMobile
            items={categories}
            active={activeCategory}
            onChange={onCategoryChange}
          />
        </section>
        <CardListMobile
          className="w-full grid grid-cols-1 gap-y-10 pb-mCardListBottom justify-items-center"
          items={cards}
        />
      </Container>
      <LoadMoreButton onClick={onLoadMoreClick} />
    </div>
  );
};

export default ContentMobile;
