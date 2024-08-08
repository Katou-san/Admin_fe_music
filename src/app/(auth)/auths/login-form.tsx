"use client";

import { Auth } from "@/api/Auth";
import { EnvConfig } from "@/configs/Env_Config";
import { contextAuth } from "@/contexts/providerAuth";
import useRequest from "@/hooks/axios/request";
import {
  Auth_respone_type,
  Login_request,
  Login_request_type,
} from "@/model/auth";
import { hash64 } from "@/util/Convert/Hash";
import { Validate_Login } from "@/util/Validate/User";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

interface Provider {
  HandleChangeForm: () => void;
  GetValueError: (value: Object) => void;
}

export default function LoginForm({ Value }: { Value: Provider }) {
  const router = useRouter();
  let { setAuth } = useContext(contextAuth);
  const [ValueError, setValueError] = useState({});

  const [ValueForm, setValue] = useState<Login_request_type>(Login_request);

  const [Req_state, Req_dispatch] = useRequest();
  const { is_Loading } = Req_state;

  const LoginSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!is_Loading) {
      Req_dispatch({ type: "REQUEST" });
      const checkError = Validate_Login(ValueForm);
      if (!checkError.status) {
        Auth.Login({ ...ValueForm, User_Pass: hash64(ValueForm.User_Pass) })
          .then((res) => {
            if (res.status == 200) {
              Req_dispatch({ type: "SUCCESS" });
              setAuth(res.data as Auth_respone_type);
              localStorage.setItem(EnvConfig.LocalToken, res.data.Access_Token);
              toast.success(res.message);
              router.push("/");
            } else {
              Req_dispatch({ type: "SUCCESS" });
              toast.error(res.message);
            }
          })
          .catch((err) => {
            Req_dispatch({ type: "SUCCESS" });
            toast.error(err.message);
          });
      } else {
        Req_dispatch({ type: "SUCCESS" });
        const Error_Value = checkError.Error;
        let Arraykey = Object.keys(Error_Value);
        toast.error(Error_Value[Arraykey[0]]);
      }
    } else {
      toast.warning("Please dont spawn");
    }
  };
  return (
    <>
      <form onSubmit={LoginSubmitForm}>
        <h1>Login</h1>
        <div className="inputText">
          <label htmlFor="Email"> Email</label>
          <input
            type="email"
            required
            value={ValueForm.User_Email}
            onChange={(e) =>
              setValue({ ...ValueForm, User_Email: e.target.value })
            }
          />
          <div className="toastInput">
            {/* {Object.keys(Check_Error_Login(FormValue).Detail_Error).length > 0
              ? ValueError.Email
              : ""} */}
          </div>
        </div>
        <div className="inputText">
          <label htmlFor="Pass">Password</label>
          <input
            type="password"
            required
            value={ValueForm.User_Pass}
            onChange={(e) =>
              setValue({ ...ValueForm, User_Pass: e.target.value })
            }
          />

          <div className="toastInput">
            {/* {Object.keys(Check_Error_Login(FormValue).Detail_Error).length > 0
              ? ValueError.Password
              : ""} */}
          </div>
        </div>
        <div className="inputText">
          <label htmlFor="Pass">Phone</label>
          <input
            type="text"
            required
            value={ValueForm.Phone}
            onChange={(e) => setValue({ ...ValueForm, Phone: e.target.value })}
          />

          <div className="toastInput">
            {/* {Object.keys(Check_Error_Login(FormValue).Detail_Error).length > 0
              ? ValueError.Password
              : ""} */}
          </div>
        </div>
        {/* <div className="selection">
                <div className="remeber">
                    <input type="checkbox" name="" />
                    <p>Remember</p>
                </div>
                <p>Forgot Password</p>
            </div> */}
        <button
          className="Loginbtn"
          //   id={true ? "Loginbtn" : "normal1"}
          type="submit"
        >
          {/* {Is_Loading ? <LoadingSVGWatting /> : ""} */}
          Login
        </button>
      </form>
    </>
  );
}
