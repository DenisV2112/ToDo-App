import React from "react";
import { MenuItems } from "./MenuItems";
import { ProfileItem } from "./Profile";

export default function Navbar() {
  return (
    <nav className="NavbarItems">
      <div className="AllNavbar">
        {ProfileItem.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.Title}
              </a>
            </li>
          );
        })}
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.Title}
              </a>
            </li>
          );
        })}
      </div>
    </nav>
  );
}
