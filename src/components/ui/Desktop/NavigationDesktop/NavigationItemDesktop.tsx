import React from "react";

import { NavigationItemType } from "@appTypes/NavigationTypes";

interface NavigationItemProps {
  item: NavigationItemType;
}

const NavigationItemDesktop: React.FC<NavigationItemProps> = ({ item }) => {
  return (
    // <NavLink to={item.path}>
    <li className="cursor-pointer">
      <span>{item.label}</span>
    </li>
    // </NavLink>
  );
};

export default NavigationItemDesktop;
