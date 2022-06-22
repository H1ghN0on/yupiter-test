import React from "react";
import { AdaptiveContext } from "@contexts/AdaptiveContext";
import { CategoryItemType } from "./Desktop/CategoryMenuDesktop";

const ContentDesktopLazy = React.lazy(() => import("./ContentDesktop"));
const ContentMobileLazy = React.lazy(() => import("./ContentMobile"));

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
        />
      ) : (
        <ContentDesktopLazy
          categories={items}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      )}
    </React.Suspense>
  );
};

export default Content;
