
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type prop_Type = {
  id: number;
  title: String;
  url: String;
  icon: React.ReactNode;
  item: Array<any>;
};

type event_Type = {
  active: number;
  Set_active: React.SetStateAction<any>;
};

export default function ContentBox({
  Vaule,
  index,
  event,
}: {
  Vaule: prop_Type;
  index: number;
  event: event_Type;
}) {
  const router = useRouter();
  const { active, Set_active } = event;
  const [active_children, Set_active_children] = useState(0);


  return (
    <div
      className={`content-box ${active === index ? (active !== 0 ? "actives" : "actives no-item") : ""}`}
    >
      <div className="title-aside" onClick={() => {
        if (Vaule.url != "/") {
          Set_active_children(0)
          router.push(`/${Vaule.url}/${Vaule.item[0].children_url}`);
        } else {
          router.push(`/${Vaule.url}`);
        }
        Set_active(index);
      }}>
        <i>{Vaule.icon}</i>
        <h3>{Vaule.title}</h3>
      </div>


      <ul>
        {Vaule.item.map((detail, i: number) => {
          return (
            <li
              key={i}
              className={`${active === index
                ? active_children === i
                  ? "children_active"
                  : ""
                : "hidden_list"
                }`}
              onClick={() => {
                router.push(`/${Vaule.url}/${detail.children_url}`);
                Set_active_children(i)
              }}
            >
              <i>{detail.icon_item}</i>
              <h2>{detail.title_item}</h2>
            </li>
          );
        })}
      </ul>
    </div>

  );
}
