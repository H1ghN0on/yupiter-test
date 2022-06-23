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
      accessor: "Design",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 1,
    category: {
      label: "Design",
      accessor: "Design",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 2,
    category: {
      label: "Design",
      accessor: "Design",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 3,
    category: {
      label: "Design",
      accessor: "Design",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 4,
    category: {
      label: "Design",
      accessor: "Design",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
  {
    id: 5,
    category: {
      label: "Design",
      accessor: "Design",
    },
    name: "Sofa",
    img: "/test.jpg",
  },
];

const items: CategoryItemType[] = [
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

export interface ContentProps {
  categories: CategoryItemType[];
  activeCategory: CategoryItemType;
  onCategoryChange: (item: CategoryItemType) => void;
  cards: CardType[];
}

const Content = () => {
  const [activeCategory, setActiveCategory] = React.useState<CategoryItemType>(
    items[0]
  );

  const onCategoryChange = (item: CategoryItemType) => {
    setActiveCategory(item);
  };

  const adaptiveContext = React.useContext(AdaptiveContext);

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      {adaptiveContext.isMobile() ? (
        <ContentMobileLazy
          categories={items}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
          cards={cards}
        />
      ) : (
        <ContentDesktopLazy
          cards={cards}
          categories={items}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      )}
    </React.Suspense>
  );
};

export default Content;
