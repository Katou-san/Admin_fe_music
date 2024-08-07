'use client'

import { Auth } from "@/api/Auth";
import { EnvConfig } from "@/configs/Env_Config";
import useRequest from "@/hooks/axios/request";
import { login } from "@/hooks/redux/action/auth";
import { RootState } from "@/hooks/redux/store";
import { Login_request, Login_request_type } from "@/model/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import { hash64 } from "../../util/Convert/Hash";


function Login({ Value }: { Value: any }) {

  const [Req_state, Req_dispatch] = useRequest();
  const { is_Loading } = Req_state
  const [ValueError, setValueError] = useState({});
  const [valueFrom, Set_value] = useState<Login_request_type>(Login_request);

  const router = useRouter()


  const dispacth = useDispatch()
  const state = useSelector((state: RootState) => state.auth);

  const Change_Value_Login = (value: any) => {
    Set_value({ ...valueFrom, ...value });
  };

  const SubmitForm = (e: any) => {
    e.preventDefault();
    Req_dispatch({ type: "REQUEST" })
    if (!is_Loading) {
      Auth.Login({ ...valueFrom, User_Pass: hash64(valueFrom.User_Pass) })
        .then(res => {
          if (res.status == 200) {
            dispacth(login(res.data))
            localStorage.setItem(EnvConfig.LocalToken, res.data?.Access_Token)
            toast.success(res.message);
            router.push('/home', { scroll: false })
          } else if (res.status == 404) {
            toast.error(res.message);
          }

        })

    } else {
      toast.warning("Please dont spam");
    }
    Req_dispatch({ type: "SUCCESS" })
  };

  return (
    <div className={`FromLS LoginForm ${Value.ChangeForm ? "active" : ""}`}>
      <form onSubmit={SubmitForm}>
        <h1>Login</h1>
        <div className="inputText">
          <label htmlFor="Email"> Email</label>
          <input
            type="text"
            required
            value={valueFrom.User_Email}
            onChange={(e) => Change_Value_Login({ User_Email: e.target.value })}
          />
          <div className="toastInput">
            {/* {Object.keys(Check_Error_Login(valueFrom).Detail_Error).length > 0
              ? ValueError.Email
              : ""} */}
          </div>
        </div>
        <div className="inputText">
          <label htmlFor="Pass">Password</label>
          <input
            type="password"
            required
            value={valueFrom.User_Pass}
            onChange={(e) => Change_Value_Login({ User_Pass: e.target.value })}
          />

          <div className="toastInput">
            {/* {Object.keys(Check_Error_Login(valueFrom).Detail_Error).length > 0
              ? ValueError.Password
              : ""} */}
          </div>
        </div>
        <div className="selection" style={{ color: "#000" }}>
        </div>
        <button
          className="Loginbtn"
          // id={Is_Loading ? "Loginbtn" : "normal1"}
          type="submit"
        >
          {/* {Is_Loading ? <LoadingSVGWatting /> : ""} */}
          Login
        </button>
      </form>

    </div>
  );
}

export default Login;
