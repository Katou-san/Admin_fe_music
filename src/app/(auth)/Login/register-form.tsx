'use client'
import { Register_Type, Register_Init } from '@/util/respone_Type/interface-auth';
import React, { useState } from 'react'

interface Provider {
    HandleChangeForm: () => void,
    GetValueError: (value: Object) => void
}

export default function RegisterForm({ Value }: { Value: Provider }) {
    const [FormValue, setFormValue] = useState<Register_Type>(Register_Init);
    const [Error, set_Error] = useState({});

    const Set_Change_Value = (value: Object) => {
        setFormValue({ ...FormValue, ...value });
    };

    const SubmitRegister = () => {

    }
    return (

        <form onSubmit={SubmitRegister}>
            <h1>Sign Up</h1>
            <div className="inputText">
                <label htmlFor="SEmail"> Email</label>
                <input
                    type="text"
                    required
                    value={FormValue.Email}
                    onChange={(e) => Set_Change_Value({ Email: e.target.value })}
                />
                <div className="toastInput">
                    {/* {Object.keys(ValueError).length > 0 ? ValueError.Email : ""} */}
                </div>
            </div>

            <div className="inputText">
                <label htmlFor="SPass">Password</label>
                <input
                    type="password"
                    value={FormValue.Pass}
                    onChange={(e) => Set_Change_Value({ Pass: e.target.value })}
                    required
                />

                <div className="toastInput">
                    {/* {Object.keys(ValueError).length > 0 ? ValueError.Password : ""} */}
                </div>
            </div>

            <div className="inputText">
                <label htmlFor="SRPass">Confirm Pass</label>
                <input
                    type="password"
                    required
                    value={FormValue.ConfirmPass}
                    onChange={(e) =>
                        Set_Change_Value({ ConfirmPass: e.target.value })
                    }
                />

                <div className="toastInput">
                    {/* {Object.keys(ValueError).length > 0
              ? ValueError.ConfirmPassword
              : ""} */}
                </div>
            </div>
            <button
                className="mt-30U Loginbtn"
                //   id={Is_Loading ? "Registerbtn" : "normal2"}
                type="submit"
            >
                {/* {Is_Loading ? <LoadingSVGWatting /> : ""} */}
                Register
            </button>
            <div className="btnLink mt-20U">
                <p>
                    I have an account
                    <span
                        style={{ color: "#fff", cursor: "pointer" }}
                        onClick={Value.HandleChangeForm}
                    >
                        Login
                    </span>
                </p>
            </div>
        </form>
    )
}
