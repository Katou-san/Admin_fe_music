'use client'

import { Auth } from '@/api/Auth';
import { LogoFacebook, LogoGoogle } from '@/util/Icons/Logo';
import { Login_Init, Login_Type } from '@/util/interface-auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface Provider {
    HandleChangeForm: () => void,
    GetValueError: (value: Object) => void
}

export default function LoginForm({ Value }: { Value: Provider }) {
    const router = useRouter();
    const [ValueError, setValueError] = useState({});
    const [FormValue, setFormValue] = useState<Login_Type>(Login_Init);
    const Change_Value_Login = (value: Object) => {
        setFormValue({ ...FormValue, ...value });
    };

    useEffect(() => {

    }, [])

    const LoginSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push("/home")
    }
    return (<>
        <form onSubmit={LoginSubmitForm}>
            <h1>Login</h1>
            <div className="inputText">
                <label htmlFor="Email"> Email</label>
                <input
                    type="email"
                    required
                    value={FormValue.User_Email}
                    onChange={(e) => Change_Value_Login({ User_Email: e.target.value })}
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
                    value={FormValue.User_Pass}
                    onChange={(e) => Change_Value_Login({ User_Pass: e.target.value })}
                />

                <div className="toastInput">
                    {/* {Object.keys(Check_Error_Login(FormValue).Detail_Error).length > 0
              ? ValueError.Password
              : ""} */}
                </div>
            </div>
            <div className="selection">
                <div className="remeber">
                    <input type="checkbox" name="" />
                    <p>Remember</p>
                </div>
                <p>Forgot Password</p>
            </div>
            <button
                className="Loginbtn"
                //   id={true ? "Loginbtn" : "normal1"}
                type="submit"
            >
                {/* {Is_Loading ? <LoadingSVGWatting /> : ""} */}
                Login
            </button>
        </form>

        <div className="otherOptions">
            <div className="titleOther">Or</div>
            <button className="optionLogin google">
                <LogoGoogle /> Sign in with Google
            </button>
            <button className="optionLogin facebook">
                <LogoFacebook /> Sign in with Facebook
            </button>
        </div>
        <div className="btnLink mt-20U ">
            <p> Dont have an account
                <span
                    style={{ color: "#fff", cursor: "pointer" }}
                    onClick={Value.HandleChangeForm}
                >
                    Register
                </span>
            </p>
        </div></>
    )
}
