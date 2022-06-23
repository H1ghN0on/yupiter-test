import React from "react";
import { Container } from "react-bootstrap";
import { ContentProps } from "./Content";
import CategoryMenuDesktop from "../ui/Desktop/CategoryMenuDesktop";
import CardListDesktop from "@components/ui/Desktop/CardListDesktop";
import LoadMoreButton from "./Common/LoadMoreButton";

const ContentDesktop: React.FC<ContentProps> = ({
  activeCard,
  onCardClick,
  categories,
  activeCategory,
  onCategoryChange,
  cards,
  onLoadMoreClick,
}) => {
  return (
    <div className="h-full bg-content flex flex-col items-center justify-center pb-44 pt-dContentTop">
      <Container>
        <section className="w-full px-dCategoriesX pb-dCategoriesBottom">
          <CategoryMenuDesktop
            items={categories}
            active={activeCategory}
            onChange={onCategoryChange}
          />
        </section>
        <CardListDesktop
          active={activeCard}
          onCardClick={onCardClick}
          className="w-full grid grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-10 pb-dCardListBottom"
          items={cards}
        />
      </Container>
      <LoadMoreButton onClick={onLoadMoreClick} />
    </div>
  );
};

export default ContentDesktop;
