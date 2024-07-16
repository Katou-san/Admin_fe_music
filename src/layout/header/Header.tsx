'use client'
import React, { useContext, useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { BellIcon, LogoutIcon } from "@/util/Icons/Icon";
import { Avatar } from "@nextui-org/react";
import "./_header.scss";
import { contextAuth } from "@/contexts/providerAuth";
import { Auth_respone } from "@/model/auth";
import { EnvConfig } from "@/configs/Env_Config";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Send } from "@/api/Send";

export default function Header() {
  const { auth, setAuth } = useContext(contextAuth)
  const router = useRouter()
  const [url, set_url] = useState("")

  const Logout = () => {
    setAuth(Auth_respone)
    localStorage.removeItem(EnvConfig.LocalToken)
    toast.success('logout successful!')
    router.push('/auths')
  }

  useEffect(() => {
    if (auth.is_Login) {
      Send.Avatar(auth.Avatar)
        .then((res) => {
          set_url(URL.createObjectURL(res))
        })
    }

  }, [auth])

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
                url
              }
            />
            <span>{auth.User_Name}</span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2" onClick={Logout}>
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
