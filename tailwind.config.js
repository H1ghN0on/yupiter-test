module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'activeCard': '0 0 0 8px rgba(79, 226, 74, 1)',
        'loadMoreButton': '0 3px 9px 8px rgba(112, 112, 112, 0.08)'
      },
      colors: {
        'lightgray': '#707070',
        'header':'#28293E',
        'content': '#FDF0E9',
        'textPrimary': "#391400",
        'categoryActive': "#16CD53",
        'selectOrange': "#F3D1BD",
        'selectArrowOrange': '#EF6D58',
      },
      padding: {
        'dNav': "15%",
        'dCategoriesBottom': "70px",
        'dCategoriesX': "15%",
        'mCategoriesBottom': "70px",
        'mCategoriesX': "15%",
        'dHeaderTop': "16px",
        'dHeaderBottom': "64px",
        'dContentBottom': "180px",
        'dContentTop': "70px",
        'mContentTop': "70px",
        'mContentBottom': "224px",
        'dCardListBottom': "80px",
        'mCardListBottom': "48px",
      }
    },
  },
  plugins: [],
};
