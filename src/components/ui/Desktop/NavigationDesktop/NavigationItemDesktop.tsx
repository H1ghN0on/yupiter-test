import React from "react";

import { NavigationItemType } from ".";

interface NavigationItemProps {
  item: NavigationItemType;
}

const NavigationItemDesktop: React.FC<NavigationItemProps> = ({ item }) => {
  return (
    // <NavLink to={item.path}>
    <li>
      <span>{item.label}</span>
    </li>
    // </NavLink>
  );
};

export default NavigationItemDesktop;
