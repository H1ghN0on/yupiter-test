import React from "react";
import { Container } from "react-bootstrap";
import { ContentProps } from "./Content";
import CategoryMenuDesktop from "../ui/Desktop/CategoryMenuDesktop";
import CardListDesktop, {
  CardType,
} from "@components/ui/Desktop/CardListDesktop";

const ContentDesktop: React.FC<ContentProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  cards,
}) => {
  const [activeCard, setActiveCard] = React.useState<CardType>(cards[0]);

  const onCardClick = (card: CardType) => {
    setActiveCard(card);
  };

  return (
    <div className="bg-[#FDF0E9] flex flex-col items-center justify-center">
      <Container>
        <section className="w-full px-[15%] py-[70px]">
          <CategoryMenuDesktop
            items={categories}
            active={activeCategory}
            onChange={onCategoryChange}
          />
        </section>
        <CardListDesktop
          active={activeCard}
          onCardClick={onCardClick}
          className="w-full grid grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-10 pb-20"
          items={cards}
        />
      </Container>
    </div>
  );
};

export default ContentDesktop;
