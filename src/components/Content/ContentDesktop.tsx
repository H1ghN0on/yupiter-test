import React from "react";
import { Container } from "react-bootstrap";
import { ContentProps } from ".";
import CategoryMenuDesktop from "@ui/Desktop/CategoryMenuDesktop";
import CardListDesktop from "@ui/Desktop/CardListDesktop";

const ContentDesktop: React.FC<ContentProps> = ({
  activeCard,
  onCardClick,
  categories,
  activeCategory,
  onNavCategoryChange,
  onCardCategoryChange,
  cards,
  onCardDelete,
}) => {
  const handleDelKeyClick = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Delete") {
        onCardDelete();
      }
    },
    [onCardDelete]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleDelKeyClick, false);

    return () => {
      document.removeEventListener("keydown", handleDelKeyClick, false);
    };
  }, [handleDelKeyClick]);

  return (
    <div className="h-full bg-content flex flex-1 flex-col items-center pb-44 pt-dContentTop">
      <Container>
        <section className="w-full px-dCategoriesX pb-dCategoriesBottom">
          <CategoryMenuDesktop
            items={categories}
            active={activeCategory}
            onChange={onNavCategoryChange}
          />
        </section>
        <CardListDesktop
          onCategoryClick={onCardCategoryChange}
          active={activeCard}
          onCardClick={onCardClick}
          className="pb-dCardListBottom grow"
          items={cards}
        />
      </Container>
    </div>
  );
};

export default ContentDesktop;
