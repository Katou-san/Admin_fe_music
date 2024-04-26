import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { BellIcon, LogoutIcon } from "@/util/Icons/Icon";
import { Avatar } from "@nextui-org/react";
import "./_header.scss";

export default function Header() {
  return (
    <header>
      <span></span>
      <span></span>
      {/* <SearchBar /> */}
      <div className="bell-header">
        <BellIcon />
      </div>
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <div className="login">
            <Avatar
              isBordered
              color="default"
              src={
                "https://cdn.sforum.vn/sforum/wp-content/uploads/2024/01/avartar-anime-12.jpg"
              }
            />
            <span>hung</span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="Logout_Content cursor-pointer">
              {/* <LogoutIcon /> */}
              <span>Logout</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </header>
  );
}
