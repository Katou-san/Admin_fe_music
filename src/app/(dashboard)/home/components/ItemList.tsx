import React from "react";
type Prop = {
  title: String;
  icon?: React.ReactElement;
  num: number;
};

export default function ItemList({ title, icon, num }: Prop) {
  return (
    <div className="Item-status">
      <div className="header-status">
        <i>{icon}</i>
        <h3>{title}</h3>
      </div>
      <div className="content-status">
        {num.toLocaleString()} {title == "Revenues" && "vnd"}
      </div>
    </div>
  );
}
