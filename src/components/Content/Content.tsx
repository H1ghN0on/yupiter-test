import React from "react";
import { AdaptiveContext } from "@contexts/AdaptiveContext";
import { CategoryItemType } from "../ui/Desktop/CategoryMenuDesktop";
import { CardType } from "@components/ui/Desktop/CardListDesktop";

const ContentDesktopLazy = React.lazy(() => import("./ContentDesktop"));
const ContentMobileLazy = React.lazy(() => import("./ContentMobile"));

const cards: CardType[] = [
  {
    id: 0,
    category: {
      label: "Design",
      accessor: "design",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 1,
    category: {
      label: "Illustration",
      accessor: "illustration",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 2,
    category: {
      label: "Motion",
      accessor: "motion",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 3,
    category: {
      label: "Branding",
      accessor: "branding",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 4,
    category: {
      label: "Illustration",
      accessor: "illustration",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 5,
    category: {
      label: "Branding",
      accessor: "branding",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
];

const categories: CategoryItemType[] = [
  {
    label: "Show All",
    accessor: "all",
  },
  {
    label: "Design",
    accessor: "design",
  },
  {
    label: "Branding",
    accessor: "branding",
  },
  {
    label: "Illustration",
    accessor: "illustration",
  },
  {
    label: "Motion",
    accessor: "motion",
  },
];

const emptyCard = {
  id: -1,
  category: {
    label: "",
    accessor: "",
  },
  name: "",
  img: "",
};

export interface ContentProps {
  categories: CategoryItemType[];
  activeCategory: CategoryItemType;
  onCategoryChange: (item: CategoryItemType) => void;
  cards: CardType[];
  onLoadMoreClick: () => void;
  activeCard: CardType;
  onCardClick: (card: CardType) => void;
}

const Content = () => {
  const [activeCards, setActiveCards] = React.useState<CardType[]>(cards);

  const [activeCategory, setActiveCategory] = React.useState<CategoryItemType>(
    categories[0]
  );

  const [activeCard, setActiveCard] = React.useState<CardType>(cards[0]);

  const onCategoryChange = (category: CategoryItemType) => {
    setActiveCard(emptyCard);
    setActiveCategory(category);
    if (category.accessor === "all") {
      setActiveCards(cards);
    } else {
      setActiveCards(
        cards.filter((card) => card.category.accessor === category.accessor)
      );
    }
  };

  const onCardClick = (card: CardType) => {
    setActiveCard(card);
  };

  const onLoadMoreClick = () => {};

  const adaptiveContext = React.useContext(AdaptiveContext);

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      {adaptiveContext.isMobile() ? (
        <ContentMobileLazy
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
          cards={activeCards}
          onLoadMoreClick={onLoadMoreClick}
        />
      ) : (
        <ContentDesktopLazy
          cards={activeCards}
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
          onLoadMoreClick={onLoadMoreClick}
          activeCard={activeCard}
          onCardClick={onCardClick}
        />
      )}
    </React.Suspense>
  );
};

export default Content;
