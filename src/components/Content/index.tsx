import React from "react";
import { AdaptiveContext } from "@contexts/AdaptiveContext";
import { CardType } from "@appTypes/CardTypes";
import { CategoryItemType } from "@appTypes/CategoryTypes";

const ContentDesktopLazy = React.lazy(() => import("./ContentDesktop"));
const ContentMobileLazy = React.lazy(() => import("./ContentMobile"));

let cards: CardType[] = [
  {
    id: 0,
    category: {
      label: "Design",
      accessor: "design",
    },
    name: "SOFA",
    img: "/image/sofa.png",
  },
  {
    id: 1,
    category: {
      label: "Branding",
      accessor: "branding",
    },
    name: "KeyBoard",
    img: "/image/keyboard.png",
  },
  {
    id: 2,
    category: {
      label: "Illustration",
      accessor: "illustration",
    },
    name: "Work Media",
    img: "/image/media.png",
  },
  {
    id: 3,
    category: {
      label: "Motion",
      accessor: "motion",
    },
    name: "DDDone",
    img: "/image/dddone.png",
  },
  {
    id: 4,
    category: {
      label: "Design",
      accessor: "design",
    },
    name: "Abstract",
    img: "/image/abstract.png",
  },
  {
    id: 5,
    category: {
      label: "Branding",
      accessor: "branding",
    },
    name: "HandP",
    img: "/image/handp.png",
  },
  {
    id: 6,
    category: {
      label: "Motion",
      accessor: "motion",
    },
    name: "Architect",
    img: "/image/architect.png",
  },
  {
    id: 7,
    category: {
      label: "Design",
      accessor: "design",
    },
    name: "Calc",
    img: "/image/calc.png",
  },
  {
    id: 8,
    category: {
      label: "Branding",
      accessor: "branding",
    },
    name: "Sport",
    img: "/image/sport.png",
  },
  {
    id: 9,
    category: {
      label: "Design",
      accessor: "design",
    },
    name: "SOFA2",
    img: "/image/sofa.png",
  },
  {
    id: 10,
    category: {
      label: "Branding",
      accessor: "branding",
    },
    name: "KeyBoard2",
    img: "/image/keyboard.png",
  },
  {
    id: 11,
    category: {
      label: "Illustration",
      accessor: "illustration",
    },
    name: "Work Media2",
    img: "/image/media.png",
  },
  {
    id: 12,
    category: {
      label: "Motion",
      accessor: "motion",
    },
    name: "DDDone2",
    img: "/image/dddone.png",
  },
  {
    id: 13,
    category: {
      label: "Design",
      accessor: "design",
    },
    name: "Abstract2",
    img: "/image/abstract.png",
  },
  {
    id: 14,
    category: {
      label: "Branding",
      accessor: "branding",
    },
    name: "HandP2",
    img: "/image/handp.png",
  },
  {
    id: 15,
    category: {
      label: "Motion",
      accessor: "motion",
    },
    name: "Architect2",
    img: "/image/architect.png",
  },
  {
    id: 16,
    category: {
      label: "Design",
      accessor: "design",
    },
    name: "Calc2",
    img: "/image/calc.png",
  },
  {
    id: 17,
    category: {
      label: "Branding",
      accessor: "branding",
    },
    name: "Sport2",
    img: "/image/sport.png",
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
  onNavCategoryChange: (item: CategoryItemType) => void;
  onCardCategoryChange: (card: CardType) => void;
  cards: CardType[];
  activeCard: CardType;
  onCardClick: (card: CardType) => void;
  onCardDelete: () => void;
}

const Content = () => {
  const [activeCards, setActiveCards] = React.useState<CardType[]>(cards);

  const [activeCategory, setActiveCategory] = React.useState<CategoryItemType>(
    categories[0]
  );

  const [activeCard, setActiveCard] = React.useState<CardType>(emptyCard);

  const onNavCategoryChange = (category: CategoryItemType) => {
    if (activeCategory.accessor === category.accessor) return;

    //потушить карту при переключении категории
    // setActiveCard(emptyCard);

    setActiveCategory(category);
    if (category.accessor === "all") {
      setActiveCards(cards);
    } else {
      setActiveCards(
        cards.filter((card) => card.category.accessor === category.accessor)
      );
    }
  };

  const onCardCategoryChange = (card: CardType) => {
    if (activeCategory.accessor === card.category.accessor) {
      setActiveCard(card);
    } else {
      onNavCategoryChange(card.category);
    }
  };

  const onCardClick = (card: CardType) => {
    if (activeCard === card) {
      setActiveCard(emptyCard);
    } else {
      setActiveCard(card);
    }
  };

  const onActiveCardDelete = () => {
    cards = cards.filter((_card) => _card !== activeCard);
    setActiveCards(activeCards.filter((_card) => _card !== activeCard));
  };

  const adaptiveContext = React.useContext(AdaptiveContext);

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      {adaptiveContext.isMobile() ? (
        <ContentMobileLazy
          categories={categories}
          activeCategory={activeCategory}
          onNavCategoryChange={onNavCategoryChange}
          onCardCategoryChange={onCardCategoryChange}
          cards={activeCards}
        />
      ) : (
        <ContentDesktopLazy
          cards={activeCards}
          categories={categories}
          activeCategory={activeCategory}
          onNavCategoryChange={onNavCategoryChange}
          onCardCategoryChange={onCardCategoryChange}
          activeCard={activeCard}
          onCardClick={onCardClick}
          onCardDelete={onActiveCardDelete}
        />
      )}
    </React.Suspense>
  );
};

export default Content;
