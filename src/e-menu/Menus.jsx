import Categories from "./Categories";
import Title from "./Title";
import menus from "./data";
import { useState } from "react";

const allCategories = ["all", ...new Set(menus.map((item) => item.category))];

function Menus() {
  const [menuItems, setMenuItems] = useState(menus);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    console.log(category);

    if (category === "all") {
      setMenuItems(menus);
      return;
    }
    const newItems = menus.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className="menu">
      <Title text="Out Menu" />
      <Categories categories={categories} filterItems={filterItems} />

      <div className="section-center">
        {menuItems.map((menu) => (
          <Menu key={menu.id} {...menu} filterItems={filterItems} />
        ))}
      </div>
    </div>
  );
}

function Menu({ title, price, img, desc }) {
  return (
    <div className="menu-item">
      <img className="img" src={img} alt="" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <p className="item-price">$ {price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
}
export default Menus;
