import React from "react";

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <button
      className="px-[45px] py-[15px] shadow-loadMoreButton bg-white"
      onClick={onClick}
    >
      <span className="text-sm uppercase text-textPrimary">Load more</span>
    </button>
  );
};

export default LoadMoreButton;
