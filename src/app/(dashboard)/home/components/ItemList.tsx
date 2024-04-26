
import React from "react";
type Prop = {
  title: String,
  icon: React.ReactElement,
  string: String
}

export default function ItemList({ Value }: { Value: Prop }) {
  return (
    <div className="Item-status">
      <div className="header-status">
        <h3>{Value.title}</h3>
        <i>{Value.icon}</i>
      </div>
      <div className="content-status">
        content
        <p>contents</p>
      </div>
    </div>
  );
}
